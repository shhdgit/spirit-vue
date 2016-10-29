<template>
  <div class="player-config">
    <div class="config-left">
      <p>玩</p>
      <p>家</p>
      <p>配</p>
      <p>比</p>
    </div>
    <div class="config-right">
      <div class="config-list">
        <ul>
          <li><span>杀­­ 手</span> 1 人</li>
          <li><span>警 察</span> 1 人</li>
          <li><span>平 民</span> 1 人</li>
        </ul>
      </div>
      <p>点击设置</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .player-config {
    display: flex;
    width: 90%;
    margin-bottom: .5rem;

    background-color: #fbfbfb;
  }
  .config-left {
    padding: 3rem 1.2rem;

    background-color: #fff;
    font-size: .9rem;
  }
  .config-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-left: 1px solid #f0f0f0;

    & > p {
      padding: .5rem;
      border-top: 1px solid #f0f0f0;

      text-align: center;
      color: @main-color;
    }

    li {
      color: #999;

      span {
        word-spacing: .5rem;
      }
    }

    li:nth-child(odd) {
      &::before {
        content: '▪︎ ';
        color: @sub-color;
      }
    }
    li:nth-child(even) {
      &::before {
        content: '▪︎ ';
        color: @main-color;
      }
    }
  }
  .config-list {
      display: flex;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      padding-top: 1rem;
  }
</style>
