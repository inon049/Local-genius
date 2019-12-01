
import userService from '@/services/user.service'
export default {
  state: {
    users: [],
    currGuide: null,
    loggedInUser: {
      _id: "5de3ed727fe0b526944c41e8",
      name: "Maya Williams",
      email: "ww@ww.com",
      password: "11",
      type: "guide",
      rate: 4.2
    }
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser
    },
    users(state) {
      return state.users
    },
    guides(state) {
      const guides = state.users.filter(user => {
        if (user.city) return user.city === state.currCity.name
      })
      return guides
    },
    guide(state) {
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
    setCurrGuide(state, { guide }) {
      state.currGuide = guide
    }
  },
  actions: {
    async loadUsers(context) {
      const users = await userService.query();
      context.commit({ type: 'setUsers', users })
    },
    async getGuideById(context, { guideId }) {
      const guide = await userService.getGuideById(guideId);
      context.commit({ type: 'setCurrGuide', guide })
    }
  },
}
