import * as types from 'vuex/types'

export default {
  kill ( { commit } ) {
  },
  save ( { commit } ) {},
  check ( { commit } ) {},
  talk () {},
  vote ( { dispatch, commit } ) {
    dispatch( 'kill' )
  },
  nextday ( { commit } ) {
    commit( types.RECO_ADD_DAY )
  }
}
