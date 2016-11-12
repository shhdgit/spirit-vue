<template>
  <div class="version">
    <c-header
      l-btn-name="icon-menu"
      :l-btn-fn="showMenu"
    ></c-header>
    <c-block
      class="record"
      height="9%"
    >
      <div
        class="record-wrap"
        @click="jump2lastGame"
      >
        <p>上次游戏：杀人游戏</p>
        <i class="icon icon-chevron-right"></i>
      </div>
    </c-block>
    <gamekit></gamekit>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'
  import * as types from 'vuex/types'
  import mafia from 'gamekit/mafia'

  const gamekits = {
    mafia
  }

  export default {
    computed: {
      lastGame () {
        const local = localStorage.getItem( 'lastGame' )

        return local ? local : 'mafia'
      }
    },

    methods: {
      ...mapMutations( [ types.INFO_SET_PLAYERS ] ),
      ...mapActions( [ 'setConfig' ] ),
      showMenu () {
        console.log( 'show menu' )
      },
      jump2lastGame () {
        const lastGame = this.lastGame

        this[ types.INFO_SET_PLAYERS ]( gamekits[ lastGame ].default )
        this.setConfig( {
          identity: gamekits[ lastGame ].idmap,
          peopleNum: gamekits[ lastGame ].peopleNum,
          procedure: gamekits[ lastGame ].procedure,
          roleConfig: gamekits[ lastGame ].roleConfig,
          condition: gamekits[ lastGame ].winCondition
        } )
        this.$router.push( '/configuration' )
      }
    },

    components: {
      CHeader: require( 'component/header' ),
      CBlock: require( 'component/block' ),
      Gamekit: require( './gamekit' )
    }
  }
</script>

<style lang="less" scoped>
  .version {
    position: fixed;

    width: 100%;
    height: 100%;
    padding-top: 1rem;

    background-color: #f0f0f0;
  }
  .record {
    margin-bottom: 1rem;

    color: #aaa;

    p {
      font-size: 1rem;
      font-weight: 200;
      text-align: center;
    }
    i {
      position: absolute;
      right: 1rem;
      top: 50%;

      font-size: 1rem;
      color: #ddd;
      transform: translateY( -50% );
    }
  }
  .record-wrap {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
