<template>
  <div class="overview">
    <c-header
      l-btn-name="icon-chevron-left2"
      r-btn-name="icon-cross"
      v-header-back
      v-header-close
    >法官台本</c-header>
  </div>
</template>

<script>
  export default {
    components: {
      CHeader: require( 'component/header' )
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
</style>
