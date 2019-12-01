import bookingService from '@/services/booking.service'

export default {
    state: {
        currBooking: null
    },
    getters: {
        booking(state) {
            return state.currBooking
        }
    },
    mutations: {
        setCurrBooking(state,{booking}){
            state.currBooking = booking
        }
    },
    actions: {
        async saveBooking(context, { booking }) {
            console.log('bpoking', booking);
            const currBooking = await bookingService.add(booking)
            console.log('pp', currBooking);
            context.commit({ type: 'setCurrBooking', booking : currBooking })
            return currBooking
        }
    }
}