<template>
  <div>
    <div
      v-if="rightDay"
      v-for="stage in procedure"
      class="stage"
    >
      <div class="stage-icon">
        <p :class="'icon icon-' + stage.icon"></p>
      </div>
      <p
        v-for="flow in stage.flow"
        class="flow"
        :class=" { 'flow-active': ( recordFlow === flow.order ) && rightDay } "
        @click="jump( flow.route, flow.order )"
      >{{ flow.title }}</p>
    </div>
    <div
      v-if="!rightDay"
    >
      <p v-for="event in recordEvent[ day - 1 ]">{{ event }}</p>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as types from 'vuex/types'

  export default {
    props: {
      day: [ Number ]
    },

    computed: {
      ...mapState( {
        procedure: state => state.config.procedure,
        record: ( { record } ) => record
      } ),
      recordFlow () {
        return this.record.timeline[ 0 ].flow
      },
      recordDay () {
        return this.record.timeline[ 0 ].day
      },
      recordEvent () {
        return this.record.events
      },
      rightDay () {
        return this.recordDay === this.day
      }
    },

    methods: {
      jump ( name, order ) {
        if ( ( this.recordFlow === order ) && this.rightDay ) {
          this.$router.push( { name, params: { order } } )
        }
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
  .flow-active {
    background-color: @main-color;

    &::before {
      content: '';
      position: absolute;
      top: 25%;
      left: -.5rem;

      display: inline-block;
      border-style: solid;
      border-width: .5rem .8rem .5rem 0;
      border-color: transparent @main-color;
    }
  }
</style>
