<template>
  <div class="player-config">
    <div class="config-left">
      <p>玩</p>
      <p>家</p>
      <p>配</p>
      <p>比</p>
    </div>
    <div class="config-right">
      <div class="config-list">
        <ul v-show="!showConfig">
          <li v-for="( id, index ) in identity">
            <span>{{ id.name }}</span> {{ distriIds[ '_' + index ] }} 人
          </li>
        </ul>
        <ul v-show="showConfig">
          <li v-for="( id, index ) in identity">
            <span>{{ id.name }}</span>
            <input
              type="number"
              v-model="distriIds[ '_' + index ]"
            > 人
          </li>
        </ul>
      </div>
      <p @click="confirmNumber">{{ showConfig ? '确定' : '点击设置' }}</p>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        distriIds: {},
        showConfig: false
      }
    },

    computed: {
      ...mapState( {
        identity: ( { config } ) => config.identity,
        players: ( { information } ) => information.players
      } )
    },

    watch: {
      players () {
        this.updateIds()
      }
    },

    methods: {
      initIds () {
        const players = this.players

        this.identity.forEach( ( id, index ) => {
          const number = id.proportion( players )

          this.$set( this.distriIds, `_${ index }`, number ? number : 0 )
        } )
      },
      updateIds () {
        const players = this.players

        this.identity.forEach( ( id, index ) => {
          const number = id.proportion( players )

          this.distriIds[ `_${ index }` ] = number ? number : 0
        } )
      },
      confirmNumber () {
        if ( this.showConfig ) {
          const ids = this.distriIds
          let total = 0,
              others = 0,
              keys = Object.keys( ids )

          keys.forEach( key => {
            total += parseInt( ids[ key ] )
          } )
          keys.shift()
          keys.forEach( key => {
            others += parseInt( ids[ key ] )
          } )

          if ( total > this.players ) {
            this.balancePlayer( others )
          }
        }

        this.showConfig = !this.showConfig
      },
      balancePlayer ( others ) {
        this.distriIds._0 = this.players - others
      }
    },

    mounted () {
      this.initIds()
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .player-config {
    display: flex;
    width: 90%;
    margin-bottom: .5rem;

    background-color: #fbfbfb;
  }
  .config-left {
    padding: 3rem 1.2rem;

    background-color: #fff;
    font-size: .9rem;
  }
  .config-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-left: 1px solid #f0f0f0;

    & > p {
      padding: .5rem;
      border-top: 1px solid #f0f0f0;

      text-align: center;
      color: @main-color;
    }
    li {
      color: #999;
    }
    li:nth-child(odd) {
      &::before {
        content: '▪︎ ';
        color: @sub-color;
      }
    }
    li:nth-child(even) {
      &::before {
        content: '▪︎ ';
        color: @main-color;
      }
    }
    input {
      width: 1rem;

      color: @sub-color;
      text-align: center;
      font-size: .8rem;
    }
  }
  .config-list {
      display: flex;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      padding-top: 1rem;
  }
</style>
