import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/movie/Index'
import MovieDetail from '@/components/movie/MovieDetail'
import MovieSearch from '@/components/movie/MovieSearch'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'movie',
      component: Index
    },
    {
      path: '/movie/detail/:id',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/movie/search',
      name: 'movieSearch',
      component: MovieSearch
    },
    {
      path: '/about/info',
      name: 'about',
      component: About
    },
    {
      path: '*',
      redirect: '/'
    }

  ]
})
