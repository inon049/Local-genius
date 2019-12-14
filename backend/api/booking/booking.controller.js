const bookingService = require('./booking.service')

async function getBookings(req, res) {
    const bookings = await bookingService.query(req.query)
    res.send(bookings)
}

async function deleteBooking(req, res) {
    await bookingService.remove(req.params.id)
    res.end()
}

async function addBooking(req, res) {
    var booking = req.body;
    booking = await bookingService.add(booking)
    res.send(booking)
}

module.exports = {
    getBookings,
    deleteBooking,
    addBooking
}