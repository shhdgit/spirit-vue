<template>
  <c-block
    class="player-number"
    height="20%"
  >
    <span>玩家人数</span>
    <input
      type="number"
      autoComplete="off"
      v-model="thisNumber"
    ></input>
    <span>人</span>
  </c-block>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import * as types from 'vuex/types'

  export default {
    computed: {
      ...mapState( {
        playernumber: ( { information } ) => information.players
      } ),
      thisNumber: {
        get () {
          return this.playernumber
        },
        set ( val ) {
          this.changePlayerNum( val )
        }
      }
    },

    methods: {
      ...mapMutations( {
        changePlayerNum: types.INFO_SET_PLAYERS
      } )
    },

    components: {
      CBlock: require( 'component/block' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .player-number {
    box-sizing: border-box;
    margin-bottom: .5rem;
    padding: 1rem;

    background-color: #fff;

    & > input {
      width: 1.5rem;
      margin-left: .5rem;
      margin-right: .5rem;
      border: none;

      background-color: #f0f0f0;
      color: @sub-color;
      font-size: 1rem;
      outline: 0;
      text-align: center;
    }
  }
</style>
