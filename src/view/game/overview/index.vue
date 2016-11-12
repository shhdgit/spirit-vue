<template>
  <div class="overview">
    <c-header
      r-btn-name="icon-cross"
      v-header-close
    >法官台本</c-header>
    <div class="ids">
      <id-mask
        v-for="( role, index ) in roles"
        :index="index + 1"
        :role="role.name"
      ></id-mask>
    </div>
    <c-button :on-click="start">开始游戏</c-button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState( {
        roles: ( { information } ) => information.identity
      } )
    },

    methods: {
      start () {
        this.$router.push( '/game/timeline' )
      }
    },

    components: {
      CHeader: require( 'component/header' ),
      IdMask: require( 'component/id-mask' ),
      CButton: require( 'component/button' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;
  @bkg-color: #ffedc5;

  .overview {
    position: fixed;

    width: 100%;
    height: 100%;
    margin-top: 2rem;

    background-color: @main-color;
  }
  .ids {
    height: 70%;
    padding-left: 4%;

    overflow: scroll;

    & > div {
      float: left;
      margin: 5%;
    }
  }
</style>
