export default {
  game: 'mafia',
  default: 8,
  min: 8,
  max: 16,
  procedure: [
    {
      stage: 'night',
      icon: 'moon-o',
      flow: [
        {
          title: '杀手杀人',
          route: 'operator'
        },
        {
          title: '警察验人',
          route: 'operator'
        }
      ]
    },
    {
      stage: 'day',
      icon: 'sun-o',
      flow: [
        {
          title: '自由发言',
          route: 'report'
        },
        {
          title: '投票',
          route: 'operator'
        },
        {
          title: '发表遗言',
          route: 'report'
        }
      ]
    }
  ],
  winCondition: function ( info ) {
    const camp = info.camp
  },
  idmap: [
    {
      name: '平民',
      uid: 1,
      proportion: function ( total ) {
        return parseInt( parseInt( total ) * .5 )
      }
    },
    {
      name: '杀手',
      uid: 2,
      proportion: function ( total ) {
        return parseInt( parseInt( total ) * .25 )
      }
    },
    {
      name: '警察',
      uid: 3,
      proportion: function ( total ) {
        return parseInt( parseInt( total ) * .25 )
      }
    }
  ]
}
