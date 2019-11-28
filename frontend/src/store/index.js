import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/services/user.service'
import cityService from '@/services/city.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    // cities: [], // city stuff for inon
    currCity: null
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
      })
      // console.log('pp');
      // console.log(guides);

      return guides

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
    }
  },
  modules: {
  }
})
