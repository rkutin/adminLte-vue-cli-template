import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import ALink from 'components/ALink'
import MultilevelFirst from 'components/MultilevelFirst'
import MultilevelSecond from 'components/MultilevelSecond'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
        description: 'Homepage of the application',
      },
      component: Hello
    },
    {
      path: '/link',
      name: 'A Link',
      meta: {
        description: 'A page from a link',
      },
      component: ALink
    },
    {
      path: '/multilevel/first',
      name: 'Multilevel First',
      meta: {
        description: 'A first page from a multilevel',
      },
      component: MultilevelFirst
    },
    {
      path: '/multilevel/second',
      name: 'Multilevel Second',
      meta: {
        description: 'A second page from a multilevel',
      },
      component: MultilevelSecond
    },
  ]
})
