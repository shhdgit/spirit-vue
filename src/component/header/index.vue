<template>
  <div class="header c-header">
    <i
      v-if="lBtnName"
      :class="'header-lb icon ' + lBtnName"
      @click="lBtnFn"
    ></i>
    <p class="header-title"><slot></slot></p>
    <i
      v-if="rBtnName"
      :class="'header-rb icon ' + rBtnName"
      @click="rBtnFn"
    ></i>
  </div>
</template>

<script>
  export default {
    props: {
      lBtnName: String,
      lBtnFn: Function,
      rBtnName: String,
      rBtnFn: Function
    }
  }
</script>

<style lang="less">
  @height: 2.5rem;

  .c-header + * {
    margin-top: @height;
  }
</style>
<style lang="less" scoped>
@prefix: header;
@height: 2.5rem;

.@{prefix} {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: @height;
  border-bottom: 1px solid #74d4eb;

  background-color: #29bde0;
  color: #fff;
}
.@{prefix}-title {
  font-size: 1rem;
  text-align: center;
}
.@{prefix}-lb,
.@{prefix}-rb {
  position: absolute;

  padding: .6rem;

  text-align: center;
  font-size: 1rem;
}
.@{prefix}-lb {
  left: .5rem;
}
.@{prefix}-rb {
  right: .5rem;
}
</style>
