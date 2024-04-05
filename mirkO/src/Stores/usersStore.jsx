import { create } from 'zustand'
import { DB } from '../assets/DB'



const usersStore = create((set) => ({
  isLoged: false,
  errorMessage: '',
  userNameMassege: '',


  logIn: (username, password) => set(() => {
    const user = DB.find((i) => i.username === username)
    if (!user) {
      return {
        errorMessage: 'user not found'
      }
    }
    if (user.password !== password) {
      return {
        errorMessage: 'wrong password'
      }
    }
    return {
      isLoged: true,
      errorMessage: '',
      userNameMassege: username + 'Your Email is ' + user.email
    }
  }),

  logOut: () => set(() => ({
    isLoged: false,
    userNameMassege: ''
  }))

}))




export default usersStore