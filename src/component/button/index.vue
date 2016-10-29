<template>
  <button
    :class="'button button-style-' + type + ' button-size-' + size"
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
      size: {
        type: String,
        default: 'm'
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
  @size: button-size;

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
  .@{size}-l {
    width: 90%;
  }
  .@{size}-m {
    width: 82%;
  }
  .@{size}-s {
    width: 30%;
  }
</style>
