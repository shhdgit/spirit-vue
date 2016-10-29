<template>
  <c-block
    class="player-number"
    height="20%"
  >
    <span>玩家人数</span>
    <input
      type="number"
      autoComplete="off"
    ></input>
    <span>人</span>
  </c-block>
</template>

<script>
  export default {
    components: {
      CBlock: require( 'component/block' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .player-number {
    box-sizing: border-box;
    margin-bottom: .5rem;
    padding: 1rem;

    background-color: #fff;

    & > input {
      width: 1.5rem;
      margin-left: .5rem;
      margin-right: .5rem;
      border: none;

      background-color: #f0f0f0;
      color: @sub-color;
      font-size: 1rem;
      outline: 0;
    }
  }
</style>
