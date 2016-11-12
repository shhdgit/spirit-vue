<template>
  <div class="timeline">
    <c-header
      l-btn-name="icon-chevron-left2"
      :l-btn-fn="back"
      r-btn-name="icon-cross"
      v-header-close
    >法官台本</c-header>
    <c-accordion>
      <c-panel
        v-for="flow in timeline"
        :title="'第' + flow.day + '天'"
      >
        <timeline :day="flow.day"></timeline>
      </c-panel>
    </c-accordion>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState( {
        timeline: ( { record } ) => record.timeline
      } )
    },

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
