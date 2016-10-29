<template>
  <div
    class="block"
    :style="{ width, height }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '90%'
      },
      height: {
        type: String,
        default: '2rem'
      }
    }
  }
</script>

<style lang="less" scoped>
  .block {
    margin-left: auto;
    margin-right: auto;

    background-color: #fff;
  }
</style>
