
import { VueOfflineStorage } from 'vue-offline'
import lsKeys from '../keys'
import GeneralStorage from '../generalStorage'

export default {
  mixins: [],
  methods: {
    lsGet(key) {
      let result = null

      if (VueOfflineStorage.keys && VueOfflineStorage.keys.includes(key)) {
        result = VueOfflineStorage.get(key)
      } else {
        GeneralStorage.doesNotExistKey(key)
      }
      
      return result
    },
    lsSetData(data) {
      VueOfflineStorage.set(lsKeys.defaultData, data)
    },
    lsGetData() {
      let key = lsKeys.defaultData
      let result = null

      result = this.lsGet(key)
      console.log(result)

      return result
    },
    lsRemoveData() {
      localStorage.removeItem(lsKeys.defaultData)
    },
    lsRemoveAllKeys() {
      for(let key in lsKeys) {
        localStorage.removeItem(lsKeys[key])
      }
    }
  }
}