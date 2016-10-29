<template>
  <div>
    <c-header
      l-btn-name="icon-chevron-left2"
      r-btn-name="icon-cross"
      v-header-back
      v-header-close
    >查看身份</c-header>
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
</style>
