import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import router from './route'
import './directive'
import App from './view/App'

sync( store, router )
new Vue( {
  router,
  ...App
} ).$mount( '#app' )

