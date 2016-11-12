import * as types from 'vuex/types'

const state = {
  identity: [],
  procedure: {},
  winCondition: {},
  roleConfig: {},
  flow: []
}

const mutations = {
  [ types.CONFIG_SET_IDENTITY ]: ( state, identity ) => state.identity = identity,
  [ types.CONFIG_SET_PROCEDURE ]: ( state, procedure ) => state.procedure = procedure,
  [ types.CONFIG_SET_CONDITION ]: ( state, condition ) => state.winCondition = condition,
  [ types.CONFIG_SET_ROLE_CONFIG ]: ( state, roleConfig ) => state.roleConfig = roleConfig,
  [ types.CONFIG_SET_FLOW ]: ( state, procedure ) => {
    let flow = []

    procedure.forEach( proc => {
      proc.flow.forEach( f => {
        flow.push( f )
      } )
    } )
    state.flow = flow
  }
}

const actions = {
  setConfig ( { commit }, { identity, procedure, condition, roleConfig } ) {
    commit( types.CONFIG_SET_IDENTITY, identity )
    commit( types.CONFIG_SET_PROCEDURE, procedure )
    commit( types.CONFIG_SET_CONDITION, condition )
    commit( types.CONFIG_SET_ROLE_CONFIG, roleConfig )
    commit( types.CONFIG_SET_FLOW, procedure )
  }
}

export default {
  state,
  mutations,
  actions
}
