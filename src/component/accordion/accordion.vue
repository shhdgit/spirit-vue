<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showId: 0
      }
    },

    methods: {
      showPanel ( id ) {
        if ( id !== this.showId ) {
          this.showId = id
        } else {
          this.showId = 0
        }
      }
    },

    created () {
      this.$on( 'showPanel', this.showPanel )
    },

    mounted () {
      const childrenUid = this.$children[ 0 ]._uid

      if ( childrenUid ) {
        this.showId = childrenUid
      }
    }
  }
</script>

<style lang="less" scoped>
  .accordion {
    width: 94%;
    margin-left: auto;
    margin-right: auto;

    & > * {
      margin-bottom: .5rem;
    }
  }
</style>
