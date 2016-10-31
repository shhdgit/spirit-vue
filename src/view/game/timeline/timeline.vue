<template>
  <div>
    <div
      v-for="stage in config.rule"
      class="stage"
    >
      <div class="stage-icon">
        <p :class="'icon icon-' + stage.icon"></p>
      </div>
      <router-link
        tag="div"
        v-for="flow in stage.flow"
        class="flow"
        :to="flow.route"
      >
        <p>{{ flow.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import config from 'gamekit/mafia'

  export default {
    data () {
      return {
        config
      }
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;

  .stage {
    position: relative;
    margin-left: 1rem;
    padding: 1rem;
    border-left: 1px solid #ccc;
  }
  .stage-icon {
    position: absolute;
    top: 2rem;
    left: -4%;

    display: inline-block;
    width: 1rem;
    height: 1rem;
    padding: .2rem;
    border: 1px solid #ccc;
    border-radius: 50%;

    background-color: #fff;

    p {
      font-size: 1rem;
      text-align: center;
      color: @sub-color;
    }
  }
  .flow {
    position: relative;

    margin: .8rem;
    padding: .4rem 1rem;

    background-color: #25a6c6;
    color: #fff;
    font-size: .9rem;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      top: 25%;
      left: -.5rem;

      display: inline-block;
      border-style: solid;
      border-width: .5rem .8rem .5rem 0;
      border-color: transparent #25a6c6;
    }
  }
</style>
