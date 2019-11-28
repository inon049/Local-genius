import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/services/user.service'
import cityService from '@/services/city.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    // cities: [], // city stuff for inon
    currCity: null,
    currGuide : null
  },
  getters: {
    users(state) {
      return state.users
    },
    cities(state) {
      return state.cities
    },
    guides(state) {
      const guides = state.users.filter(user => {
        if (user.city) {
          return user.city === state.currCity
        }
        console.log(guides);
        
        return guides
      })
    },
    guide(state){
      return state.currGuide
    }
  },
  mutations: {
    setUsers(state, { users }) {
      state.users = users
    },
    // setCities(state, { cities }) {
    //   state.cities = cities
    // },
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
    // async loadCities(context) {
    //   const cities = await cityService.query();
    //   context.commit({ type: 'setCities', cities })
    // },
    async getCityById(context, { cityId }) {
      const currCity = await cityService.getById(cityId)      
      context.commit({ type: 'setCurrCity', currCity })
      return currCity
    },
    async getGuideById(context , {_id}){
      const guide = await userService.getGuideById(_id);
      context.commit({type:'setCurrGuide', guide})
    }
  },
  modules: {
  }
})
