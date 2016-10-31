<template>
  <div class="operator">
    <c-header
      l-btn-name="icon-menu-circle"
      :l-btn-fn="jump2timeline"
      r-btn-name="icon-cross"
      v-header-close
    >杀手杀人</c-header>
    <div>123</div>
  </div>
</template>

<script>
  export default {
    methods: {
      jump2timeline () {
        this.$router.push( '/game/timeline' )
      }
    },

    components: {
      CHeader: require( 'component/header' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .operator {
    position: fixed;

    width: 100%;
    height: 100%;

    background-color: @main-color;
  }
</style>
