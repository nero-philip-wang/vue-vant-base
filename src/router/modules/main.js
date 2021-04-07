// import Index from '../pages/Index.vue'
// import List from '../pages/List.vue'
// import Detail from '../pages/Detail.vue'

const List = r =>
  require.ensure([], () => r(require('@/views/pages/List.vue')), 'List')
const Detail = r =>
  require.ensure([], () => r(require('@/views/pages/Detail.vue')), 'Detail')

export default [
  {
    name: 'list',
    path: '/list',
    component: List
  },
  {
    name: 'detail',
    path: '/list/:id',
    component: Detail
  }
]
