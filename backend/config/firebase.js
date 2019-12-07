const config = {
    apiKey: "AIzaSyDrS_Y6A_gQgFkwj-hQqWMjdMIR0Ms_zJI",
    authDomain: "local-genius.firebaseapp.com",
    databaseURL: "https://local-genius.firebaseio.com",
    projectId: "local-genius",
    storageBucket: "local-genius.appspot.com",
    messagingSenderId: "480858059583",
    appId: "1:480858059583:web:bdc260a5f6c0504e4d598a",
    measurementId: "G-6YMJ75JN4G"
};

firebase.initializeApp(config)

const messaging = firebase.messaging();
messaging.requestPermission()
    .then(() => {
        console.log('Have Permission');
        return messaging.getToken()
    })
    .then(token => {
        console.log(token);

    })
    .catch(err => {
        console.log(err);

    })