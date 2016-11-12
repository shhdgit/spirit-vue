<template>
  <div class="checkid">
    <c-header
      r-btn-name="icon-cross"
      v-header-close
    >查看身份</c-header>
    <div class="card-wrap">
      <transition name="rotate-back">
        <id-card
          :id="title"
          v-if="!phase"
        >
          <div class="card-back">
            <img src="public/image/turn.png">
          </div>
        </id-card>
      </transition>
      <transition name="rotate-front">
        <id-card
          :id="title"
          v-if="phase"
        >
          <div class="card-front">
            <img src="public/image/turn2.png">
            <p>角色：{{ identity }}</p>
          </div>
        </id-card>
      </transition>
    </div>
    <c-button
      class="button"
      :on-click="next"
    >{{ btnText }}</c-button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        order: 0
      }
    },

    computed: {
      ...mapState( {
        ids: ( { information } ) => information.identity
      } ),
      index () {
        return Math.floor( this.order / 2 )
      },
      phase () {
        return this.order % 2
      },
      title () {
        return this.index + 1
      },
      identity () {
        return this.ids[ this.index ].name
      },
      isLast () {
        return this.order === this.ids.length * 2 - 1
      },
      btnText () {
        const title = this.title

        if ( this.isLast ) {
          return '隐藏并传递给法官'
        }

        return this.phase === 0 ? `查看${ title }号身份` : `隐藏并传递给${ title + 1 }号`
      }
    },

    methods: {
      next () {
        if ( this.isLast ) {
          this.$router.push( '/game/overview' )
        } else {
          this.order += 1
        }
      }
    },

    components: {
      CHeader: require( 'component/header' ),
      IdCard: require( './id-card' ),
      CButton: require( 'component/button' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;
  @bkg-color: #ffedc5;

  .checkid {
    position: fixed;

    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 2rem;

    background-color: @main-color;
  }
  .button {
    position: absolute;
    bottom: 15%;
  }
  .card-back {
    position: relative;
    top: 15%;

    width: 60%;
    padding-top: 60%;

    img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
    }
  }
  .card-front {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 70%;
    }
    p {
      margin-top: 1rem;

      font-size: 1rem;
      color: #03b8e5;
    }
  }
  .card-wrap {
    display: flex;
    justify-content: center;
  }

  .rotate-back-enter-active {
    transition: transform .5s .5s;
  }
  .rotate-back-leave-active {
    transition: transform .5s;
  }
  .rotate-back-enter, .rotate-back-leave-active {
    transform: rotateY( 90deg );
  }
  .rotate-front-enter-active {
    transition: transform .5s .5s;
  }
  .rotate-front-leave-active {
    transition: transform .5s;
  }
  .rotate-front-enter, .rotate-front-leave-active {
    transform: rotateY( 90deg );
  }
</style>
