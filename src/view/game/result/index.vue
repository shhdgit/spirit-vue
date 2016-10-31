<template>
  <div class="result">
    <c-header
      l-btn-name="icon-home"
      :l-btn-fn="jump2home"
    >游戏结果</c-header>
    <div class="content">
      <div class="win-pic">
        <img src="public/image/win.png">
        <p>杀手胜利</p>
      </div>
      <div class="statistics">
        <p>本次游戏共计用时 0时25分</p>
        <p>
          <span>杀手 0 人</span>
        </p>
      </div>
    </div>
    <ul class="record-list">
      <li>
        <span>第一天</span>
        <p>晚上：1号被杀，身份是平民</p>
        <p>白天：2号被投死，身份是平民</p>
      </li>
    </ul>
    <div class="sticky">
      <c-button
        size="s"
        type="warn"
        :on-click="again"
      >再来一局</c-button>
      <c-button
        size="s"
      >上传并分享</c-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      jump2home () {
        this.$router.replace( '/version' )
      },
      again () {
        this.$router.replace( '/configuration' )
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

  .result {
    position: fixed;

    width: 100%;
    height: 100%;

    overflow-y: scroll;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: @main-color;
  }
  .win-pic {
    position: relative;
    margin-top: 1rem;
    text-align: center;

    img {
      width: 60%;
    }
    p {
      position: absolute;
      left: 50%;
      bottom: 12%;

      color: #fff;
      transform: translateX( -50%; )
    }
  }
  .statistics {
    width: 80%;
    margin-top: 10%;
    padding-bottom: 5%;

    color: #fff;

    p {
      margin-top: .2rem;
    }
  }
  .record-list {
    li {
      padding: 3% 10%;

      border-bottom: 1px solid #ddd;

      span {
        display: inline-block;
        margin-bottom: .2rem;
      }
      p {
        color: #aaa;
        font-size: .7rem;
      }
    }
  }
  .sticky {
    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;

    background-color: rgba( 41, 189, 226, .4 );

    & > button {
      border-radius: 5px;
    }
  }
</style>
