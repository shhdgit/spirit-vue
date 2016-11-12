import { mapState } from 'vuex'
import * as types from 'vuex/types'

export default {
  computed: {
    ...mapState( {
      flow: ( { config } ) => config.flow,
      routeParams: ( { route } ) => route.params
    } ),
    mixProcedureFlow () {
      return this.flow[ this.routeParams.order ]
    },
    mixProcedureOperator () {
      return this.mixProcedureFlow.operator
    }
  },

  methods: {
    // add record, change players information
    mixProcedureConfirm () {
      this.$store.dispatch( this.mixProcedureOperator )
    },
    mixProcedureNext () {
      this.mixProcedureConfirm()

      if ( this.mixProcedureOperator === 'nextday' ) {
        this.$router.replace( '/game/timeline' )
      } else {
        const nextFlow = this.routeParams.order + 1
        const nextRoute = {
          name: this.flow[ nextFlow ].route,
          params: { order: nextFlow }
        }

        this.$store.commit( types.RECO_UPDATE_FLOW, nextFlow )
        this.$router.replace( nextRoute )
      }
    }
  }
}
