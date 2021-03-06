import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

const state = {
  movieTabName: 'in_theaters',
  movies: {
    in_theaters: {
      count: 0,
      subjects: []
    },
    coming_soon: {
      count: 0,
      subjects: []
    }
  },
  bookTabName: 'hot',
  books: {
    hot: {
      count: 0,
      subjects: []
    },
    scifi: {
      count: 0,
      subjects: []
    },
    detective: {
      count: 0,
      subjects: []
    },
    kongfu: {
      count: 0,
      subjects: []
    },
    romantic: {
      count: 0,
      subjects: []
    }
  },
  dataQuery: {
    count: 0,
    subjects: [],
    q: '',
    showBtn: true
  },
  showDrawer: false,
  showLoading: false,
  showError: '',
  // 收藏
  favorTabName: 'movie'
}

const mutations = {
  TOGGLE_DRAWER (state) {
    state.showDrawer = !state.showDrawer
  },
  FETCH_MOVIE (state, payload) {
    state.movies[payload.tabName].count = payload.subjects.length
    state.movies[payload.tabName].subjects = payload.subjects
  },
  CHANGE_TAB_MOVIE (state, payload) {
    state.movieTabName = payload.tabName
  },
  FETCH_BOOK (state, payload) {
    state.books[payload.tabName].subjects = payload.subjects
    state.books[payload.tabName].count = payload.subjects.length
  },
  CHANGE_TAB_BOOK (state, payload) {
    state.bookTabName = payload.tabName
  },
  FETCH_QUERY (state, payload) {
    state.dataQuery.subjects.push(...payload.subjects)
    if (payload.subjects.length < 10) {
      state.dataQuery.showBtn = false
    }
    state.dataQuery.count += 10
  },
  CLEAN_FETCH_QUERY (state) {
    state.dataQuery.count = 0
    state.dataQuery.subjects = []
    state.dataQuery.showBtn = true
  },
  CHANGE_QUERY_INPUT (state, payload) {
    state.dataQuery.q = payload.q
  },
  CHANGE_FAVOR_TAB (state, payload) {
    state.favorTabName = payload.tabName
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
