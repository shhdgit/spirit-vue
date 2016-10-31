export default {
  game: 'mafia',
  rule: [
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
  win: function ( info ) {
    const camp = info.camp
  },
  idmap: {
    1: '平民',
    2: '杀手',
    3: '警察'
  }
}
