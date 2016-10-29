<template>
  <div class="config">
    <c-header
      l-btn-name="icon-chevron-left2"
      :l-btn-fn="back"
      r-btn-name="icon-question-circle"
    >参数设置</c-header>
    <player-config></player-config>
    <player-number></player-number>
    <c-button
      size="l"
      :on-click="start"
    >去发牌</c-button>
  </div>
</template>

<script>
  export default {
    methods: {
      back () {
        this.$router.replace( '/version' )
      },

      start () {
        this.$router.push( '/game/checkid' )
      }
    },

    components: {
      CHeader: require( 'component/header' ),
      PlayerConfig: require( './player-config' ),
      PlayerNumber: require( './player-number' ),
      CButton: require( 'component/button' )
    }
  }
</script>

<style lang="less" scoped>
  @prefix: config;
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .@{prefix} {
    position: fixed;

    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 1rem;

    background-color: #f0f0f0;
  }
</style>
