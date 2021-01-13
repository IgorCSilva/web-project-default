import { formatState } from '../types/formatState'
import { ActionTree } from 'vuex'

export const actions: ActionTree<formatState, any> = {
  funcName ({commit}, payload) {
    commit('exampleTest', payload)
  },
  showModal ({commit}, modalName) {
    commit('showModal', modalName)
  },
  hideModal ({commit}, modalName) {
    commit('hideModal', modalName)
  },
  hideAllModals ({commit}) {
    commit('hideAllModals')
  },
}
