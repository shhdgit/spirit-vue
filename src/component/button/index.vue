<template>
  <button
    :class="'button button-style-' + type"
    @click="onClick"
  ><slot></slot></button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'normal'
      },
      onClick: {
        type: Function,
        default () {}
      }
    }
  }
</script>

<style lang="less" scoped>
  @prefix: button;
  @style: button-style;

  .@{prefix} {
    position: relative;
    display: block;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 2.2rem;
    border: none;

    font-size: 1rem;
    outline: none;

    &:active::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: rgba( 0, 0, 0, .05 );
    }
  }
  .@{style}-normal {
    background-color: #fbb435;
    color: #fff;
  }
</style>
