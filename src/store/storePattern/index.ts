import { Module } from 'vuex'

import { state } from './store/state'
import { getters } from './store/getters'
import { mutations } from './store/mutations'
import { actions } from './store/actions'

export const storePattern: Module<any, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
