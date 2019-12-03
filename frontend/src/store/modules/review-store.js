import reviewService from '@/services/review.service'

export default {
    state: {
        reviews: null
    },
    getters: {
        reviews(state){
            return state.reviews
        }
    },
    mutations: {
        setReviews(state,{reviews}){
            state.reviews = reviews
        }
    },
    actions: {
        async saveReview(context ,{ review }) {            
            const newReview = await reviewService.add(review)
            return newReview
        },
        async loadReviews(context,{filterBy}){            
            const reviews = await reviewService.query(filterBy)
            context.commit({type:'setReviews', reviews})
            return reviews
        }
    }
}