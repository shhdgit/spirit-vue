<template>
  <div
    class="id-mask"
    @click="clickHandle"
  >
    <p class="identity">{{ role }}</p>
    <div
      class="container"
      v-show="thisMask"
    >
      <img src="public/image/idmask.jpg">
    </div>
    <p class="id">{{ index }}号</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mask: 1
      }
    },

    props: {
      index: Number,
      role: String,
      lock: {
        type: Number,
        default: 0
      }
    },

    computed: {
      thisMask () {
        if ( this.lock ) {
          return this.lock === 1 ? 0 : 1
        } else {
          return this.mask
        }
      }
    },

    methods: {
      clickHandle () {
        if ( !this.lock ) {
          this.mask = !this.mask
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;

  .id-mask {
    position: relative;
    width: 20%;
    padding-top: 20%;
    border: 3px solid #fff;

    background-color: #f7c77b;
    font-size: .7rem;
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .id {
    position: absolute;
    bottom: 0;

    width: 100%;

    text-align: center;
    background-color: rgba( 41, 189, 226, .3 );
    color: #fff;
  }
  .identity {
    position: absolute;
    top: 30%;

    width: 100%;

    text-align: center;
  }
</style>
