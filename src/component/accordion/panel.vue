<template>
  <div class="panel">
    <div
      class="title"
      @click="openPanel"
    >
      <p>{{ title }}</p>
      <i :class="'icon icon-' + icon"></i>
    </div>
    <transition name="fade">
      <div
        class="content"
        v-if="isIdEqual"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: 0
      }
    },

    props: {
      title: String
    },

    computed: {
      isIdEqual () {
        return this.$parent.showId === this._uid
      },
      icon () {
        return this.isIdEqual ? 'chevron-up' : 'chevron-down'
      }
    },

    methods: {
      openPanel () {
        this.$parent.$emit( 'showPanel', this._uid )
      }
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;
  @height: 2.4rem;

  .panel {
    border: 1px solid #ccc;
    background-color: #fff;
  }
  .title {
    position: relative;
    height: @height;

    p {
      font-size: 1rem;
      line-height: @height;
      text-align: center;
      color: @main-color;
    }
    i {
      position: absolute;
      top: 35%;
      right: 1rem;

      color: @main-color;
      font-weight: 800;
    }
  }
  .content {
    border-top: 1px solid #ccc;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
