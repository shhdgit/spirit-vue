export default {
  game: 'mafia',
  default: 8,
  peopleNum: [ 4, 20 ],
  procedure: [
    {
      stage: 'night',
      icon: 'moon-o',
      flow: [
        {
          title: '杀手杀人',
          route: 'operator',
          tips: '通过分析发言找出警察，杀光他们！同时也要注意隐藏自己的身份！',
          icon: 'hair-cross',
          choose: 'single',
          order: 0,
          operator: 'kill',
          record: '$id号被杀手杀死了，其真实身份是$role'
        },
        {
          title: '警察验人',
          route: 'operator',
          tips: '你是好人方的领路人，仔细分析，谨慎查证，用你的智慧带领平民走向胜利！',
          icon: 'magnifying-glass',
          choose: 'single',
          order: 1,
          operator: 'check',
          record: '查证$id号，其真实身份是$role'
        }
      ]
    },
    {
      stage: 'day',
      icon: 'sun-o',
      flow: [
        {
          title: '自由发言',
          route: 'report',
          order: 2,
          button: '去投票',
          operator: 'talk'
        },
        {
          title: '投票',
          route: 'operator',
          tips: '通过逻辑分析抓出隐藏的杀手，同时也要通过巧妙的发言来保护警察！',
          icon: 'hair-cross',
          choose: 'single',
          order: 3,
          operator: 'vote',
          record: '$id号被投票投死，其真实身份是$role'
        },
        {
          title: '发表遗言',
          route: 'report',
          order: 4,
          button: '天黑请闭眼',
          operator: 'nextday'
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
      uid: 1
    },
    {
      name: '杀手',
      uid: 2
    },
    {
      name: '警察',
      uid: 3
    }
  ],
  roleConfig: {
    "4":"2,1,1",
    "5":"3,1,1",
    "6":"4,1,1",
    "7":"5,1,1",
    "8":"4,2,2",
    "9":"5,2,2",
    "10":"6,2,2",
    "11":"5,3,3",
    "12":"6,3,3",
    "13":"7,3,3",
    "14":"8,3,3",
    "15":"7,4,4",
    "16":"8,4,4",
    "17":"9,4,4",
    "18":"8,5,5",
    "19":"9,5,5",
    "20":"10,5,5"
  }
}
