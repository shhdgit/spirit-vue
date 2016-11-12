<template>
  <div class="report">
    <c-header
      l-btn-name="icon-menu-circle"
      :l-btn-fn="jump2timeline"
      r-btn-name="icon-cross"
      v-header-close
    >{{ mixProcedureFlow.title }}</c-header>
    <div class="content">
      <img src="public/image/killtip.png">
      <div class="record">
        <p v-for="r in recordEvent[ recordDayIndex ]">{{ r }}</p>
      </div>
    </div>
    <c-button
      :on-click="mixProcedureNext"
    >{{ mixProcedureFlow.button || '下一步' }}</c-button>
  </div>
</template>

<script>
  import { procedure } from 'mixin'
  import { mapState } from 'vuex'

  export default {
    mixins: [ procedure ],

    computed: {
      ...mapState( {
        record: ( { record } ) => record,
        timeline: ( { record } ) => record.timeline
      } ),
      recordDayIndex () {
        return this.record.timeline[ 0 ].day - 1
      },
      recordEvent () {
        return this.record.events
      }
    },

    methods: {
      jump2timeline () {
        this.$router.push( '/game/timeline' )
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

  .report {
    position: fixed;

    width: 100%;
    height: 100%;

    background-color: @main-color;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 40%;
      margin: 2rem;
    }
  }
  .record {
    height: 7rem;
    margin: 1rem;

    color: #fff;
    font-size: .8rem;
    overflow-y: scroll;

    & > p:first-child {
      color: #fbb480;
    }
  }
</style>
