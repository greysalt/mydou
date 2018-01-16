const Host = 'https://api.douban.com/v2'

const actions = {
  fetchMovies (context, payload) {
    var m = context.state.movies
    if (m.coming_soon.count === 0) {
      context.state.showLoading = true
      context.state.showError = ''
      // const url = '/api/movie/' + payload.tabName + '?count=12' // 开发用
      const url = Host + '/movie/' + payload.tabName + '?count=15'
      $.ajax({ // eslint-disable-line
        url: url,
        dataType: 'jsonp',
        success: function (data) {
          var movieArr = []
          data.subjects.map(function (item) {
            var movie = {}
            movie.id = item.id
            movie.title = item.title
            movie.rating = item.rating.average
            movie.imgUrl = item.images.large
            movieArr.push(movie)
          })
          context.state.showLoading = false
          context.commit('FETCH_MOVIES', {subjects: movieArr, tabName: payload.tabName})
        },
        error: function (xhr, err) {
          context.state.showLoading = false
          context.state.showError = 'Opps~' + err
        }
      })

      // axios.get(url)
      //   .then(function (res) {
      //     var movieArr = []
      //     res.data.subjects.map(function (item) {
      //       var movie = {}
      //       movie.id = item.id
      //       movie.title = item.title
      //       movie.rating = item.rating.average
      //       movie.imgUrl = item.images.large
      //       movieArr.push(movie)
      //     })
      //     context.state.showLoading = false
      //     context.commit('FETCH_MOVIES', {subjects: movieArr, tabName: payload.tabName})
      //   }).catch(function (error) {
      //     context.state.showLoading = false
      //     context.state.showError = 'Opps~' + error.message
      //   })
    }
  },
  fetchBooks (context, payload) {
    const url = Host + '/book/search?tag=' + payload.tag + '&count=12'
    context.state.showError = ''
    context.state.showLoading = true
    $.ajax({ // eslint-disable-line
      url: url,
      dataType: 'jsonp',
      success: function (data) {
        var bookArr = []
        data.books.map(e => {
          var book = {}
          book.id = e.id
          book.title = e.title
          book.rating = e.rating.average
          book.imgUrl = e.images.large
          bookArr.push(book)
        })
        context.state.showLoading = false
        context.commit('FETCH_BOOKS', {tabName: payload.tabName, subjects: bookArr})
      },
      error: function (xhr, err) {
        context.state.showLoading = false
        context.state.showError = 'Opps~' + err
      }
    })
  },
  fetchQuery (context, payload) {
    const query = context.state.dataQuery
    const url = Host + '/' + payload.queryType + '/search?q=' + query.q + '&count=10&start=' + query.count
    context.state.showError = ''
    context.state.showLoading = true
    $.ajax({ // eslint-disable-line
      url: url,
      dataType: 'jsonp',
      success: function (data) {
        context.state.showLoading = false
        context.commit('FETCH_QUERY', {subjects: data.subjects || data.books})
      },
      error: function (xhr, err) {
        context.state.showLoading = false
        context.state.showError = 'Opps~' + err
      }
    })
  }
}

export default actions
