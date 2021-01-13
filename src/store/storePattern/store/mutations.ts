import { MutationTree } from 'vuex'
import {formatState} from '../types/formatState'

export const mutations: MutationTree<formatState> = {
  ['exampleTest'] (state, data) {
    state.defaultVar = data
  }
}
