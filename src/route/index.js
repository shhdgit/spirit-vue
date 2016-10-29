// CDN Version. NPM Version need add Vue.ues( VueRouter )
import VueRouter from 'vue-router'

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

export default router

