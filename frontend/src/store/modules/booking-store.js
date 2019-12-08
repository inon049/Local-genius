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
        bookings(state) {
            return state.bookings
        }
    },
    mutations: {
        setCurrBooking(state, { booking }) {
            state.currBooking = booking
        },
        setBookings(state, { bookings }) {
            state.bookings = bookings
        }
    },
    actions: {
        async saveBooking(context, { booking }) {
            await context.dispatch({ type: "loadChats" });
            let chats = context.rootGetters.chats
            if (!chats.some(chat => {
                return chat.guide._id === booking.toGuideId && chat.user._id === booking.byUserId
            })) {
                context.dispatch({ type: 'createChat', chat: { guideId: booking.toGuideId, userId: booking.byUserId } })
            }
                const currBooking = await bookingService.add(booking)
                context.commit({ type: 'setCurrBooking', booking : currBooking })
                let notif ={
                    toId: booking.toGuideId,
                    fromId: booking.byUserId,
                    type:'booking',
                     txt:'You just got a new booking',
                    isRead:false,
                    }
                context.dispatch({type:'addNotif',notif})
                context.dispatch({type:'sendBookingNotif' , notif})
                return currBooking

        },
        async loadBookings(context, { filterBy }) {
            const bookings = await bookingService.query(filterBy)
            context.commit({ type: 'setBookings', bookings })
            return bookings
        },

    }
}
