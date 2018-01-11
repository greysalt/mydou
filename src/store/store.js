import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  movies: {
    movie_in_theaters: {
      count: 0,
      subjects: []
    },
    movie_coming_soon: {
      count: 0,
      subjects: []
    }
  },
  moviesQuery: {
    count: 0,
    subjects: [],
    q: '',
    showBtn: true
  },
  showLoading: false,
  movieTabName: 'in_theaters'
}

const mutations = {
  FETCH_MOVIES (state, payload) {
    state.movies['movie_' + payload.tabName].count = payload.subjects.length
    state.movies['movie_' + payload.tabName].subjects = payload.subjects
  },
  CHANGE_MOVIE_TAB (state, payload) {
    state.movieTabName = payload.tabName
  },
  FETCH_MOVIES_QUERY (state, payload) {
    state.moviesQuery.subjects.push(...payload.subjects)
    if (payload.subjects.length < 10) {
      state.moviesQuery.showBtn = false
    }
    state.moviesQuery.count += 10
  },
  CLEAR_FETCH_MOVIES_QUERY (state) {
    state.moviesQuery.count = 0
    state.moviesQuery.subjects = []
    state.moviesQuery.showBtn = true
  },
  CHANGE_QUERY_INPUT (state, payload) {
    state.moviesQuery.q = payload.q
  }
}

const actions = {
  fetchMovies (context, payload) {
    var m = context.state.movies
    if (m.movie_coming_soon.count === 0) {
      context.state.showLoading = true
      const url = '/api/movie/' + payload.tabName + '?count=12'
      axios.get(url)
        .then(function (res) {
          var movieArr = []
          res.data.subjects.map(function (item) {
            var movie = {}
            movie.id = item.id
            movie.title = item.title
            movie.rating = item.rating.average
            movie.imgUrl = item.images.large
            movieArr.push(movie)
          })
          context.state.showLoading = false
          context.commit('FETCH_MOVIES', {subjects: movieArr, tabName: payload.tabName})
        })
    }
  },
  fetchMoviesQuery (context, payload) {
    const query = context.state.moviesQuery
    const url = '/api/movie/search?q=' + query.q + '&count=10&start=' + query.count
    context.state.showLoading = true
    axios.get(url)
      .then(function (res) {
        context.state.showLoading = false
        context.commit('FETCH_MOVIES_QUERY', {subjects: res.data.subjects})
      }).catch(function (error) {
        console.log(error)
      })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
