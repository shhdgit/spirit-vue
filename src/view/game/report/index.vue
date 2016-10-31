<template>
  <div class="report">
    <c-header
      l-btn-name="icon-menu-circle"
      :l-btn-fn="jump2timeline"
      r-btn-name="icon-cross"
      v-header-close
    >黑夜解密</c-header>
    <div class="content">
      <img src="public/image/killtip.png">
      <div class="record">
        <p>1号被杀死了 身份是平民</p>
        <p>2号被杀死了 身份是平民</p>
      </div>
    </div>
    <c-button>第二天</c-button>
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
      CButton: require( 'component/button' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;
  @tip-color: #b9e9f5;

  .report {
    position: fixed;

    width: 100%;
    height: 100%;

    background-color: @main-color;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 40%;
      margin: 2rem;
    }
  }
  .record {
    height: 7rem;
    margin: 1rem;

    color: #fff;
    font-size: .8rem;
    overflow-y: scroll;

    & > p:first-child {
      color: #fbb480;
    }
  }
</style>
