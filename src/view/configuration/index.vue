<template>
  <div class="config">
    <c-header
      l-btn-name="icon-chevron-left2"
      :l-btn-fn="back"
      r-btn-name="icon-question-circle"
    >参数设置</c-header>
    <player-config ref="config"></player-config>
    <player-number></player-number>
    <c-button
      size="l"
      :on-click="start"
    >去发牌</c-button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as types from 'vuex/types'

  export default {
    computed: {
      ...mapState( {
        identity: ( { config } ) => config.identity,
        players: ( { information } ) => information.players
      } ),
      ids () {
        return this.$refs.config.distriIds
      }
    },

    methods: {
      back () {
        this.$router.replace( '/version' )
      },
      start () {
        this.$store.commit( types.INFO_SET_CAMP, this.ids )
        this.$store.commit( types.INFO_SET_IDS, this.allotRole() )
        this.$store.commit( types.INFO_SET_ALIVE, this.players )
        this.$store.commit( types.RECO_ADD_DAY )
        this.$router.push( '/game/checkid' )
      },
      allotRole () {
        const ids = this.ids
        let tempRoles = [],
            roles = []

        Object.keys( ids ).forEach( id => {
          const num = parseInt( ids[ id ] )

          for ( let i = 0; i < num; i++ ) {
            const newId = parseInt( id )
            let identity

            this.identity.some( id => {
              if ( id.uid === newId ) {
                identity = id.name
                return true
              } else {
                return false
              }
            } )

            tempRoles.push( { name: identity, uid: newId, alive: 1 } )
          }
        } )

        while ( tempRoles.length ) {
          const len = tempRoles.length
          let random = Math.floor( Math.random() * len ) % len

          roles.push( tempRoles.splice( random, 1 )[ 0 ] )
        }

        return roles
      }
    },

    components: {
      CHeader: require( 'component/header' ),
      PlayerConfig: require( './player-config' ),
      PlayerNumber: require( './player-number' ),
      CButton: require( 'component/button' )
    }
  }
</script>

<style lang="less" scoped>
  @prefix: config;
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .@{prefix} {
    position: fixed;

    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 1rem;

    background-color: #f0f0f0;
  }
</style>
