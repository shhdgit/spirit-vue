// CDN Version. NPM Version need add Vue.ues( VueRouter )
import VueRouter from 'vue-router'
import store from 'vuex/store'

const router = new VueRouter( {
  routes: [
    {
      name: 'bootstrap',
      path: '/',
      component: resolve => require( [ 'view/bootstrap' ], resolve )
    },
    {
      name: 'version',
      path: '/version',
      component: require( 'view/version' )
    },
    {
      name: 'configuration',
      path: '/configuration',
      component: require( 'view/configuration' )
    },
    {
      name: 'checkid',
      path: '/game/checkid',
      component: require( 'view/game/checkid' )
    },
    {
      name: 'overview',
      path: '/game/overview',
      component: require( 'view/game/overview' )
    },
    {
      name: 'timeline',
      path: '/game/timeline',
      component: require( 'view/game/timeline' )
    },
    {
      name: 'operator',
      path: '/game/operator/:order',
      component: require( 'view/game/operator' )
    },
    {
      name: 'report',
      path: '/game/report/:order',
      component: require( 'view/game/report' )
    },
    {
      name: 'result',
      path: '/game/result',
      component: require( 'view/game/result' )
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
} )

router.beforeEach((to, from, next) => {
  if ( to.name !== 'bootstrap' && to.name !== 'version' ) {
    if ( !store.state.config.identity.length ) {
      location.hash = ''
      location.reload()
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

