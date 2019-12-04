
import userService from '@/services/user.service'

var localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

export default {
  state: {
    users: [],
    currUser: null,
    loggedInUser: {
      _id: "5de3ed727fe0b526944c41e8",
      name: "Maya Williams",
      email: "Maya@ww.com",
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
      return state.currUser
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
    setCurrUser(state, { guide }) {
      state.currUser = guide
    }
  },

  //FINISH BRINGING AUTH STUFF TO STORE
  actions: {
    async loadUsers(context) {
      const users = await userService.query();
      context.commit({ type: 'setUsers', users })
    },
    async getUserById(context, { _id }) {
      const guide = await userService.getById(_id);
      context.commit({ type: 'setCurrUser', guide })
    },
    async addGuide(context, { guide }) {
      console.log('new guide in store', guide);
    }
  },
}
