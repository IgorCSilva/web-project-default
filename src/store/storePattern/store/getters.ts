
import { formatState } from '../types/formatState'
import { GetterTree } from 'vuex'

export const getters: GetterTree<formatState, any> = {
  varValue: state => {
    return state.defaultVar
  }
}
