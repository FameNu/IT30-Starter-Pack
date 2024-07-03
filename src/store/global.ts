import { defineStore, getActivePinia } from 'pinia'
import axios from 'axios'

export const useCapybaraStore = defineStore('capybara', {
  state: () => ({
    capybara: '' as string,
    allCapybara: {} as object
  }),
  getters: {
    getCapybara: (state) => {
      return state.capybara
    },
    getCapybaraPath: (state) => {
      state.capybara = state.capybara.toLowerCase()
      return `mascot/${state.capybara}.png`
    },
    getCapybaras: (state) => {
      return state.allCapybara
    }
  },
  actions: {
    setCapybaraName(capybara: string) {
      this.capybara = capybara
    },
    async setCapybaras() {
      try {
        const response = await axios.get('http://it30starterpack.sit.kmutt.ac.th:1337/api/lands')
        this.allCapybara = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
