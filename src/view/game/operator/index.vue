<template>
  <div class="operator">
    <c-header
      l-btn-name="icon-menu-circle"
      :l-btn-fn="jump2timeline"
      r-btn-name="icon-cross"
      v-header-close
    >杀手杀人</c-header>
    <div class="tips">
      <p>狙击手</p>
    </div>
    <p class="tips2">点击下方玩家头像，对被狙击玩家进行标记</p>
    <div class="ids">
      <id-mask></id-mask>
    </div>
    <c-button
      class="btn"
    >确定</c-button>
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
      CHeader: require( 'component/header' ),
      IdMask: require( 'component/id-mask' ),
      CButton: require( 'component/button' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;
  @tip-color: #b9e9f5;

  .operator {
    position: fixed;

    width: 100%;
    height: 100%;

    background-color: @main-color;
  }
  .tips {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 2.5rem;
    padding: .2rem 2rem;

    background-color: @tip-color;

    &::before {
      content: '';
      position: absolute;
      bottom: -.6rem;

      display: inline-block;
      border-style: solid;
      border-width: .7rem .4rem 0;
      border-color: @tip-color transparent;
    }
  }
  .tips2 {
    margin-top: 1rem;
    margin-bottom: .5rem;

    font-size: .7rem;
    color: #fff;
    text-align: center;
  }
  .ids {
    height: 60%;
    padding-left: 4%;

    overflow: scroll;

    & > div {
      float: left;
      margin: 5%;
    }
  }
  .btn {
    margin-top: 2%;
  }
</style>
