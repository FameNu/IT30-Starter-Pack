import { defineStore } from 'pinia'
import axios from 'axios'
import { type Land } from '@/models/Card'

export const useCapybaraStore = defineStore('capybara', {
  state: () => ({
    capybara: '' as string,
    lands: [] as Array<Land>
  }),
  getters: {
    allLandNames: (state) => {
      return state.lands.map((land) => land.attributes.landName)
    },
    classRoomByLandName: (state) => (landName: string) => {
      const land = state.lands.find(
        (land) => land.attributes.landName.toLowerCase() === landName.toLowerCase()
      )
      return land?.attributes.classRoom
    }
  },
  actions: {
    setCapybaraName(capybara: string) {
      this.capybara = capybara
    },
    async loadLands() {
      const response = await axios.get('http://it30starterpack.sit.kmutt.ac.th:1337/api/lands')
      this.lands = response.data.data as Array<Land>
    }
  }
})

export const useBackGround = defineStore('bgName', {
  state: () => ({
    bgName: 'bg6' as String
  }),
  getters: {
    getBackGroundName: (state) => {
      return state.bgName
    }
  },
  actions: {
    setBackGroundName(name: String) {
      this.bgName = name
    }
  }
})
