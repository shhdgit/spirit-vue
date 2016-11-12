import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import router from './route'
import './directive'
import App from './view/App'

if ( process.env.NODE_ENV !== 'production' ) {
  Vue.config.devtools = true
}

sync( store, router )
new Vue( {
  router,
  ...App
} ).$mount( '#app' )


