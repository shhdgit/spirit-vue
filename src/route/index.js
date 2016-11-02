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
      component: resolve => require( [ 'view/version' ], resolve )
    },
    {
      name: 'configuration',
      path: '/configuration',
      component: resolve => require( [ 'view/configuration' ], resolve )
    },
    {
      name: 'checkid',
      path: '/game/checkid',
      component: resolve => require( [ 'view/game/checkid' ], resolve )
    },
    {
      name: 'overview',
      path: '/game/overview',
      component: resolve => require( [ 'view/game/overview' ], resolve )
    },
    {
      name: 'timeline',
      path: '/game/timeline',
      component: resolve => require( [ 'view/game/timeline' ], resolve )
    },
    {
      name: 'operator',
      path: '/game/operator',
      component: resolve => require( [ 'view/game/operator' ], resolve )
    },
    {
      name: 'report',
      path: '/game/report',
      component: resolve => require( [ 'view/game/report' ], resolve )
    },
    {
      name: 'result',
      path: '/game/result',
      component: resolve => require( [ 'view/game/result' ], resolve )
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

