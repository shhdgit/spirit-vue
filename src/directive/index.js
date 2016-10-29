import Vue from 'vue'
import router from '../route'

const back = function () {
  router.back()
}
Vue.directive( 'back', el => {
  el.addEventListener( 'click', () => back() )
} )
Vue.directive( 'header-back', el => {
  let btn = el.querySelector( '.header-lb' )

  if ( btn ) {
    btn.addEventListener( 'click', () => back() )
  }
} )
Vue.directive( 'header-close', el => {
  let btn = el.querySelector( '.header-rb' )

  if ( btn ) {
    btn.addEventListener( 'click', () => {
      if ( confirm( '确定结束本轮游戏吗？' ) ) {
        router.replace( '/configuration' )
      }
    } )
  }
} )
