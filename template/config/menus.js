export default [
  {
    name: 'Home',
    link: '/',
    icon: 'fa-home',
  },
  {
    name: 'A link',
    link: '/link',
    icon: 'fa-link',
  },
  {
    name: 'A multilevel item',
    link: '',
    icon: 'fa-th-list',
    child: [
      {
        name: 'A first link',
        link: '/multilevel/first',
        icon: 'fa-link',
      },
      {
        name: 'A second link',
        link: '/multilevel/second',
        icon: 'fa-link',
      },
    ]
  },
]
