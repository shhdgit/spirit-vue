import * as types from 'vuex/types'

const state = {
  identity: [],
  procedure: {},
  winCondition: {}
}

const mutations = {
  [ types.CONFIG_SET_IDENTITY ]: ( state, identity ) => state.identity = identity,
  [ types.CONFIG_SET_PROCEDURE ]: ( state, procedure ) => state.procedure = procedure,
  [ types.CONFIG_SET_CONDITION ]: ( state, condition ) => state.winCondition = condition
}

const actions = {
  setConfig ( { commit }, { identity, procedure, condition } ) {
    commit( types.CONFIG_SET_IDENTITY, identity )
    commit( types.CONFIG_SET_PROCEDURE, procedure )
    commit( types.CONFIG_SET_CONDITION, condition )
  }
}

export default {
  state,
  mutations,
  actions
}
