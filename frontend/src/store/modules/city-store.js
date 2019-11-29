import cityService from '@/services/city.service'

export default {
    state: {
      currCity: null,
      cities: [],
    },
    getters: {
      cities(state) {
        return state.cities
      },

    },
    mutations: {
      setCities(state, { cities }) {
        state.cities = cities
      },
      setCurrCity(state, { currCity }) {
        state.currCity = currCity      
      },
    },
    actions: {
      async loadCities(context) {
        const cities = await cityService.query();
        context.commit({ type: 'setCities', cities })
      },
      async getCityById(context, { cityId }) {
        const currCity = await cityService.getById(cityId)
        context.commit({ type: 'setCurrCity', currCity })
        return currCity
      }
    },
}