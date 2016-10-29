<template>
  <div class="checkid">
    <c-header
      l-btn-name="icon-chevron-left2"
      r-btn-name="icon-cross"
      v-header-back
      v-header-close
    >查看身份</c-header>
    <id-card
      :id="1"
      :identity="'杀手'"
    ></id-card>
    <c-button
      class="button"
      :on-click="next"
    >查看1号身份</c-button>
  </div>
</template>

<script>
  export default {
    methods: {
      next () {
        this.$router.push( '/game/overview' )
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

    width: 100%;
    height: 100%;
    margin-top: 2rem;

    background-color: @main-color;
  }
  .button {
    margin-top: 2rem;
  }
</style>
