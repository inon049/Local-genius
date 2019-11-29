
import userService from '@/services/user.service'
export default {
    state: {
      users: [],
      currGuide : null,
    },
    getters: {
      users(state) {
        return state.users
      },
      guides(state) {
        const guides = state.users.filter(user => {
          if (user.city) return user.city === state.currCity.name
        })
        return guides
      },
      guide(state){
        return state.currGuide
      }
    },
    mutations: {
      setUsers(state, { users }) {
        state.users = users
      },
      setCities(state, { cities }) {
        state.cities = cities
      },
      setCurrCity(state, { currCity }) {
        state.currCity = currCity      
      },
      setCurrGuide(state , {guide}){
        state.currGuide = guide
      }
    },
    actions: {
      async loadUsers(context) {
        const users = await userService.query();
        context.commit({ type: 'setUsers', users })
      },
      async getGuideById(context , {guideId}){
        const guide = await userService.getGuideById(guideId);
        context.commit({type:'setCurrGuide', guide})
      }
    },
  }
  