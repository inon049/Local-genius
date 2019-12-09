
import userService from '@/services/user.service'

var localLoggedinUser = null
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user)

export default {
  state: {
    users: [],
    currGuide: null,
    loggedInUser: localLoggedinUser
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
    updateUser(state,{updatedUser}){
      let idx = state.users.findIndex(user=>user._id===updatedUser._id)
      state.users[idx]=updatedUser
    },
    setUser(state, { user }) {
      state.loggedInUser = user
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
    async updateUser(context,{user}){
      const updatedUser = await userService.update(user)
      context.commit({type:'updateUser',updatedUser})
    },
    async loadUsers(context) {
      const users = await userService.query();
      context.commit({ type: 'setUsers', users })
    },
    async getUserById(context, { _id }) {
      const guide = await userService.getById(_id);
      context.commit({ type: 'setCurrGuide', guide })
    },
    async login(context, { userCred }) {
      const user = await userService.login(userCred);
      context.commit({ type: 'setUser', user })
      context.dispatch({type:'createUserSocket'})
      context.dispatch({type:'loadNotifs'})
      return user;
    },
    async signup(context, { userCred }) {
      const user = await userService.signup(userCred)
      context.commit({ type: 'setUser', user })
      return user;
    },
    async logout(context) {
      await userService.logout()
      context.commit({ type: 'setUser', user: null })
    },
    async addGuide(context, { guide }) {
      const newGuide = userService.getById(guide._id)
      if(newGuide) await userService.update(newGuide);
      else await userService.add(guide)
    }
  },
}
