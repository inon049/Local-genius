const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const firebase = require("firebase/app");

const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const webpush = require('web-push');
const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const reviewRoutes = require('./api/review/review.routes')
const bookingRoutes = require('./api/booking/booking.routes')
app.use(require('body-parser').json());
const chatRoutes = require('./api/chat/chat.routes')
const notifRoutes = require('./api/notif/notif.routes')
const connectSockets = require('./api/socket/socket.routes')


// const PUBLIC_VAPID_KEY ='BOf0qAhBz4a-lxagLIqN5ns4y6F4s2Ptailr_RP0abwLiozIceJ0EmZR8a7sHsR0wxSdhdtdbdpaZN4vfBRUS3o'

// const PRIVATE_VAPID_KEY='GmbwzEwB3YQyIhZFKWC3m8NuSfYKwbmldV26q792UKk'
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
// const publicVapidKey = 'BOf0qAhBz4a-lxagLIqN5ns4y6F4s2Ptailr_RP0abwLiozIceJ0EmZR8a7sHsR0wxSdhdtdbdpaZN4vfBRUS3o';
// const privateVapidKey = 'GmbwzEwB3YQyIhZFKWC3m8NuSfYKwbmldV26q792UKk';

webpush.setVapidDetails('mailto:dror.uzi5@gmail.com', publicVapidKey, privateVapidKey);


app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'walak walak999888',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
}


app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: 'test' });

    console.log(subscription);

    webpush.sendNotification(subscription, payload).catch(error => {
        console.error(error.stack);
    });
});



// routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/booking', bookingRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/notif', notifRoutes)
connectSockets(io)



const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

