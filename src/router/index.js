import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import MovieDetail from '@/components/MovieDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/pelicula/:id',
      name: 'MovieDetail',
      component: MovieDetail,
      props: true
    }
  ]
})
