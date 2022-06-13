// store/fruits.js
import axios from 'axios'

export const actions = {
  async addData({commit}) {
    let res = await axios.get('http://localhost:3001/orgStr');
    let newData = res.data;
    commit('updateData', newData)
  },
}

export const mutations = {
  updateData(state, newData) {
    state.data = newData
  },
}

export const state = () => ({
  data: null,
})

export const getters = {
  getData: (state) => {
    return state.data
  },
}
