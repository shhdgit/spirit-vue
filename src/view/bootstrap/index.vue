<template>
  <div class="bootstrap">
    <img src="public/image/logo.png">
    <p>更多 ∙ 更全 ∙ 更好用</p>
  </div>
</template>

<script>
  export default {
    mounted () {
      setTimeout( () => this.$router.replace( '/version' ), 2000 )
    }
  }
</script>

<style lang="less" scoped>
  @prefix: bootstrap;
  .@{prefix} {
    position: fixed;

    width: 100%;
    height: 100%;

    background-color: #29bde0;
    text-align: center;
    color: #fff;

    img {
      width: 60%;
      margin-top: 4rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
</style>


