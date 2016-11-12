import * as types from 'vuex/types'

const state = {
  events: [],
  timeline: []
}

const mutations = {
  [ types.RECO_ADD_DAY ]: state => {
    const day = state.timeline.length + 1

    state.timeline.unshift( { day, flow: 0 } )
    state.events.push( [] )
  },
  [ types.RECO_UPDATE_FLOW ]: ( state, flow ) => {
    state.timeline[ 0 ].flow = flow
  },
  [ types.RECO_NEW_EVENT ]: ( state, record ) => {
    state.events[ state.events.length - 1 ].unshift( record )
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
