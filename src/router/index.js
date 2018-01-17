import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/movie/Index'
import MovieDetail from '@/components/movie/MovieDetail'
import BookIndex from '@/components/book/BookIndex'
import BookDetail from '@/components/book/BookDetail'
import Search from '@/components/Search'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    // movie
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
    // book
    {
      path: '/book',
      name: 'book',
      component: BookIndex
    },
    {
      path: '/book/detail/:id',
      name: 'bookDetail',
      component: BookDetail
    },
    // search
    {
      path: '/search/:nav',
      name: 'search',
      component: Search
    },
    // about
    {
      path: '/about/info',
      name: 'about',
      component: About
    },
    // redirect
    {
      path: '*',
      redirect: '/'
    }

  ]
})
