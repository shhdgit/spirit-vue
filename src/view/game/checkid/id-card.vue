<template>
  <c-block
    class="card"
    width="80%"
    height=""
  >
    <div
      class="card-content"
    >
      <span class="card-id">{{ id }}</span>
      <slot></slot>
    </div>
  </c-block>
</template>

<script>
  export default {
    props: {
      id: [ String, Number ]
    },

    components: {
      CBlock: require( 'component/block' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;
  @bkg-color: #ffedc5;

  .card {
    position: absolute;

    padding-top: 100%;
    border: 3px solid #fff;

    background-color: @bkg-color !important;
  }
  .card-content {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .card-id {
    position: relative;
    top: -1.1rem;

    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 3px solid @bkg-color;

    background-color: #fff;
    border-radius: 50%;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #ee4065;
  }
</style>
