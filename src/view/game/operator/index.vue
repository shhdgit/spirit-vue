<template>
  <div class="operator">
    <c-header
      l-btn-name="icon-menu-circle"
      :l-btn-fn="jump2timeline"
      r-btn-name="icon-cross"
      v-header-close
    >{{ mixProcedureFlow.title }}</c-header>
    <div class="tips">
      <p>{{ mixProcedureFlow.tips }}</p>
    </div>
    <p class="tips2">点击下方玩家头像，对玩家进行标记</p>
    <div class="ids">
      <id-mask
        v-for="( role, index ) in roles"
        :index="index + 1"
        :role="role.name"
        :lock="1"
        :class="{ roleDead: !role.alive }"
      >
        <div
          class="card-wrap"
          @click="select( index )"
        >
          <i
            v-if="show[ index ] === 1"
            :class="'icon icon-' + mixProcedureFlow.icon"
          ></i>
        </div>
      </id-mask>
    </div>
    <c-button
      class="btn"
      :on-click="next"
    >{{ mixProcedureFlow.button || '确定' }}</c-button>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import * as types from 'vuex/types'
  import { procedure } from 'mixin'

  export default {
    // 下一个流程
    mixins: [ procedure ],

    data () {
      return {
        show: {}
      }
    },

    computed: {
      ...mapState( {
        roles: ( { information } ) => information.identity
      } )
    },

    methods: {
      ...mapMutations( {
        setOpIndex: types.INFO_CHANGE_OP_INDEX,
        recordNewEvent: types.RECO_NEW_EVENT
      } ),
      jump2timeline () {
        this.$router.push( '/game/timeline' )
      },
      select ( index ) {
        const role = this.roles[ index ]

        if ( role.alive ) {
          this[ this.mixProcedureFlow.choose ]( index )
        }
      },
      multi ( index ) {
        const show = this.show

        if ( !show[ index ] ) {
          this.$set( show, index, 1 )
        } else {
          this.show[ index ] = 0
        }
      },
      single ( index ) {
        const show = this.show
        const keys = Object.keys( show )
        const keyLen = keys.length

        if ( keyLen ) {
          this.$delete( show, keys[ 0 ] )
        }

        this.$set( show, index, 1 )
      },
      operate ( indexs ) {
        this.setOpIndex( indexs )
        this.mixProcedureNext()
      },
      record ( index ) {
        const record = this.mixProcedureFlow.record

        if ( record ) {
          const newRecord = record.replace( /\$id/, index + 1 ).replace( /\$role/, this.roles[index].name )

          this.recordNewEvent( newRecord )
        }
      },
      next () {
        const indexs = Object.keys( this.show )

        // 如果选择了目标
        if ( indexs.length ) {
          indexs.forEach( i => {
            this.record( parseInt( i ) )
            this.$delete( this.show, i )
          } )
        }

        this.operate( indexs )
      }
    },

    components: {
      CHeader: require( 'component/header' ),
      IdMask: require( 'component/id-mask' ),
      CButton: require( 'component/button' )
    }
  }
</script>

<style lang="less" scoped>
  @main-color: #29bde0;
  @sub-color: #fbb435;
  @tip-color: #b9e9f5;

  .operator {
    position: fixed;

    width: 100%;
    height: 100%;

    background-color: @main-color;
  }
  .tips {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 2.5rem;
    padding: .2rem 2rem;

    background-color: @tip-color;

    &::before {
      content: '';
      position: absolute;
      bottom: -.6rem;

      display: inline-block;
      border-style: solid;
      border-width: .7rem .4rem 0;
      border-color: @tip-color transparent;
    }
  }
  .tips2 {
    margin: 1rem 2rem .5rem;

    font-size: .7rem;
    color: #fff;
  }
  .ids {
    height: 50%;
    padding-left: 4%;

    overflow: scroll;

    & > div {
      float: left;
      margin: 3% 5%;
    }
  }
  .btn {
    margin-top: 2%;
  }
  .icon {
    position: absolute;
    top: 3px;
    left: 50%;

    transform: translateX( -50% );
  }
  .card-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .roleDead {
    background-color: red;
  }
</style>
