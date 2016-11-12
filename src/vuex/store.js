// CDN Version. NPM Version need add Vue.ues( Vuex )
import Vuex from 'vuex'
import actions from './action'
import config from './module/config'
import record from './module/record'
import information from './module/information'

export default new Vuex.Store( {
  modules: {
    config,
    record,
    information
  },
  actions
} )
