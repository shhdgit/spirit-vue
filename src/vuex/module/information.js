import * as types from 'vuex/types'

const state = {
  // 玩家数
  players: 8,
  // 每个玩家的身份
  identity: [],
  // 存活数
  alive: 0,
  // 阵营信息
  camp: {}
}

const mutations = {
  [ types.INFO_SET_PLAYERS ]: ( state, number ) => {
    state.players = number
    state.alive = number
  },
  [ types.INFO_SET_CAMP ]: ( state, camp ) => state.camp = camp,
  [ types.INFO_SET_ALIVE ]: ( state, number ) => state.alive = number,
  [ types.INFO_SET_IDS ]: ( state, ids ) => state.identity = ids
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
