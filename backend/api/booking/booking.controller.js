const bookingService = require('./booking.service')

async function getBookings(req, res) {
    // console.log(req.query);
    const bookings = await bookingService.query(req.query)
    res.send(bookings)
}

async function deleteBooking(req, res) {
    await bookingService.remove(req.params.id)
    res.end()
}

async function addBooking(req, res) {
    var booking = req.body;
    // booking.byUserId = req.session.user._id;
    booking = await bookingService.add(booking)
    // booking.byUser = req.session.user;
    res.send(booking)
}

module.exports = {
    getBookings,
    deleteBooking,
    addBooking
}