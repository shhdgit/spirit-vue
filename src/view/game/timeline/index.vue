<template>
  <div class="timeline">
    <c-header
      l-btn-name="icon-chevron-left2"
      :l-btn-fn="back"
      r-btn-name="icon-cross"
      v-header-close
    >法官台本</c-header>
    <c-accordion>
      <c-panel title="第二天">
        <timeline></timeline>
      </c-panel>
      <c-panel title="第一天">
        <timeline></timeline>
      </c-panel>
    </c-accordion>
  </div>
</template>

<script>
  export default {
    methods: {
      back () {
        this.$router.push( '/game/overview' )
      }
    },

    components: {
      CHeader: require( 'component/header' ),
      CAccordion: require( 'component/accordion' ).Accordion,
      CPanel: require( 'component/accordion' ).Panel,
      Timeline: require( './timeline' )
    }
  }
</script>

<style lang="less" scoped>
  .timeline {
    position: fixed;

    width: 100%;
    height: 100%;
    margin-top: 1rem;

    background-color: #f0f0f0;
  }
</style>
