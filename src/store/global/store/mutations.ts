import { MutationTree } from 'vuex'
import {formatState} from '../types/formatState'

export const mutations: MutationTree<formatState> = {
  ['exampleTest'] (state, data) {
    state.defaultVar = data
  },
  ['showModal'] (state, modalName) {
    if (!state.modalsToShow.includes(modalName)) {
      state.modalsToShow.push(modalName)
    }
  },
  ['hideModal'] (state, modalName) {
    state.modalsToShow = state.modalsToShow.filter(modal => {
      return modal !== modalName
    })
  },
  ['clearAllModals'] (state) {
    state.modalsToShow = []
  },
}
