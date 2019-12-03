import bookingService from '@/services/booking.service'

export default {
    state: {
        currBooking: null,
        bookings: null
    },
    getters: {
        booking(state) {
            return state.currBooking
        },
        bookings(state){
            return state.bookings
        }
    },
    mutations: {
        setCurrBooking(state,{booking}){
            state.currBooking = booking
        },
        setBookings(state,{bookings}){
            state.bookings = bookings
        }
    },
    actions: {
        async saveBooking(context, { booking }) {
            const currBooking = await bookingService.add(booking)
            context.commit({ type: 'setCurrBooking', booking : currBooking })
            return currBooking
        },
        async loadBookings(context,{filterBy}){
            const bookings = await bookingService.query(filterBy)
            context.commit({type:'setBookings', bookings})
            return bookings
        },
        
    }
}