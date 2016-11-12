import * as types from 'vuex/types'

const state = {
  // 玩家数
  players: 8,
  // 每个玩家的身份
  identity: [],
  // 存活数
  alive: 0,
  // 阵营信息
  camp: {},
  // 选中的玩家
  operatorIndex: []
}

const mutations = {
  [ types.INFO_SET_PLAYERS ]: ( state, number ) => state.players = number,
  [ types.INFO_SET_CAMP ]: ( state, camp ) => state.camp = camp,
  [ types.INFO_SET_ALIVE ]: ( state, number ) => state.alive = number,
  [ types.INFO_SET_IDS ]: ( state, ids ) => state.identity = ids,
  [ types.INFO_KILL ]: ( state ) => {
    const opIndexs = state.operatorIndex

    function kill ( index ) {
      const role = state.identity[ index ].uid

      state.identity[ index ].alive = 0
      if ( state.camp[ role ] ) {
        state.camp[ role ] -= 1
      }
    }

    opIndexs.forEach( index => {
      kill( index )
    } )
  },
  [ types.INFO_SAVE ]: ( state ) => {
    const opIndexs = state.operatorIndex

    function save ( index ) {
      const role = state.identity[ index ].uid

      state.identity[ index ].alive = 1
      if ( state.camp[ role ] ) {
        state.camp[ role ] += 1
      }
    }

    opIndexs.forEach( index => {
      save( index )
    } )
  },
  [ types.INFO_CHANGE_OP_INDEX ]: ( state, indexs ) => {
    state.operatorIndex = indexs
  }
}

const actions = {
  kill ( { state, commit } ) {
    commit( types.INFO_KILL )
    commit( types.INFO_SET_ALIVE, state.alive - 1 )
  }
}

export default {
  state,
  mutations,
  actions
}
