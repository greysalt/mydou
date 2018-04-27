<template>
  <div class="m-detail-container">
    
    <div class="head">
      <div class="post md-elevation-24" :style="{backgroundImage:'url(' + movie.images.small + '),url(/mydou/dist/static/img/book_default.png)'}"></div>
      <div class="btn-back" @click="back()">
          <BtnBack></BtnBack>
      </div>
      <div class="btn-favor" @click="addFavor()">
          <BtnFavor :isLiked="this.isLiked"></BtnFavor>
      </div>    
    </div>
    <div class="main-title">   
      <div class="title">{{ movie.title }}</div>
      <div class="rating">
        <Star v-if="movie.rating.average !== 0" :rating="movie.rating.average"></Star>
        <span v-if="movie.rating.average === 0">暂无评分</span>
      </div>
    </div>
    <div class="info">
      <div class="info-group">
        <span class="key">原名：</span>
        <div class="value">{{ movie.original_title }}</div>
      </div>
      <div class="info-group">
        <span class="key">类型：</span>
        <div class="value">{{ movie.genres | arrToString }}</div>
      </div>
      <div class="info-group">
        <span class="key">年代：</span>
        <div class="value">{{movie.year}}</div>
      </div>
      <div class="info-group">
        <span class="key">地区：</span>
        <div class="value">{{ movie.countries | arrToString }}</div>
      </div>
      <div class="info-group">
        <span class="key">又名：</span>
        <div class="value">{{ movie.aka | arrToString }}</div>
      </div>  
    </div>
    <div>
      <md-ripple>
        <div class="summary">
            <span class="start">剧情简介：</span>
            <p>{{ movie.summary }}</p>
        </div>
      </md-ripple>
    </div>

    <div class="staff">
      <div class="directors">
        <p class="key">导演：</p>
        <div class="person-viewbox">
          <div class="person-wrap">
          
            <div class="person" v-for="person in movie.directors">
              <!-- <a :href="person.avatars.small" target="_blank"> -->
                <!-- <div class="img md-elevation-1" :style="{backgroundImage:'url(' + person.avatars.small + '),url(/mydou/dist/static/img/cast_default.png)'}"></div> -->
                <div class="img md-elevation-1" :style="{backgroundImage:'url(/mydou/dist/static/img/cast_default.png)'}"></div>
                <p class="name">{{ person.name }}</p>
              <!-- </a> -->
            </div>
          
          </div>
        </div>
        
        
      </div>
      <div class="clear"></div>
      <div class="casts">
        <p class="key">主演：</p>
        <div class="person-viewbox">
          <div class="person-wrap" :style="{width: (movie.casts.length*100 + 30) + 'px'}">
          
            <div class="person" v-for="person in movie.casts">
              <!-- <a :href="person.avatars.small" target="_blank"> -->
                <!-- <div class="img  md-elevation-1" :style="{backgroundImage:'url(' + person.avatars.small + '),url(/mydou/dist/static/img/cast_default.png)' }"></div> -->
                <div class="img  md-elevation-1" :style="{backgroundImage:'url(/mydou/dist/static/img/cast_default.png)' }"></div>
              <!-- </a> -->
              <p class="name">{{ person.name }}</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>

    <transition name="popup">
      <Popup v-show="popActive" :message="popMessage"></Popup>
    </transition>

  </div>
</template>
<script>
// import axios from 'axios'
import Star from '../Star.vue'
import BtnBack from '../BtnBack.vue'
import BtnFavor from '../BtnFavor.vue'
import Popup from '../Popup.vue'

export default {
  components: {
    Star,
    BtnBack,
    BtnFavor,
    Popup
  },
  data () {
    return {
      movie: {
        id: '',
        title: '',
        rating: {
          average: 0
        },
        images: {small: ''},
        original_title: '',
        year: '',
        genres: [''],
        countries: [''],
        aka: [''],
        summary: '',
        directors: [{name: '', avatars: {small: ''}}],
        casts: [{name: '', avatars: {small: ''}}]

      },
      isLiked: false,
      popActive: false,
      popMessage: ''
    }
  },
  computed: {
  },
  methods: {
    fetchMovieDetail () {
      const id = this.$route.params.id
      // const url = '/api/movie/subject/' + id // 开发用
      const url = 'https://api.douban.com/v2/movie/subject/' + id
      const _that = this
      $.ajax({  // eslint-disable-line
        url: url,
        dataType: 'jsonp',
        success: function (data) {
          _that.movie = data
          // 判断是否已经收藏
          var itemIndex = _that.getIndex(data.id)
          if (itemIndex !== -1) {
            _that.isLiked = true
          } else {
            _that.isLiked = false
          }
        },
        error: function (xhr, err) {
          console.log(err)
        }
      })

      // axios.get(url)
      //   .then(function (res) {
      //     console.log(res.data)
      //     _that.movie = res.data
      //   })
    },
    back () {
      this.$router.go(-1)
    },

    // 收藏按钮
    addFavor () {
      if (this.movie.id) {
        const STORAGE_KEY = 'mydou_favor_movie'
        var favorItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        var favorItem = {
          id: this.movie.id,
          title: this.movie.title,
          img: this.movie.images.small,
          rating: this.movie.rating.average
        }
        if (this.isLiked !== true) {
          // 加入收藏
          favorItems.push(favorItem)
          this.isLiked = true
          this.showPop('已加入收藏')
        } else {
          // 取消收藏
          var itemIndex = this.getIndex(this.movie.id)
          if (itemIndex !== -1) {
            favorItems.splice(itemIndex, 1)
            this.isLiked = false
          }
          this.showPop('已取消收藏')
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorItems))
      }
    },
    // 从 LOCAL STORAGE 获取已收藏电影的 INDEX
    getIndex (val) {
      var index = -1
      const STORAGE_KEY = 'mydou_favor_movie'
      var favorItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      if (favorItems) {
        for (var i = 0; i < favorItems.length; i++) {
          if (favorItems[i].id === val) {
            index = i
            break
          }
        }
      }
      return index
    },
    showPop (msg) {
      this.popActive = true
      this.popMessage = msg
      var _that = this
      setTimeout(function () {
        _that.popActive = false
      }, 2000)
    }
  },
  created () {
    this.fetchMovieDetail()
  }
}
</script>

<style lang="scss">
.m-detail-container{
  position: absolute;
  z-index:400;
  width:100%;
  min-height:100vh;
  background:whitesmoke;
  .head{
    position:relative;
    width:100%;
    height:45vh;
    background:linear-gradient(#69b96d, #43a047);
    display:flex;
    justify-content:center;
    align-items:flex-end;
    overflow:hidden;
    .post{
      width:40%;
      height:0;
      padding-bottom:60%;
      margin-bottom:20px;
      background-size:cover;
    }
  }
  .main-title{
    .title{
      padding:40px 0 0;
      font-size:20px;
      font-weight:bold;
      text-align:center;
    }
    .rating{
      padding:0 20px;
      width:100%;
      //background:#eee;
      line-height:60px;
      font-size:28px;
      display:flex;
      justify-content: center;
      color:#ddd;
    }
  }

  .info{
    padding:0 20px 20px;
    .info-group{
      padding:5px 0;
      display:flex;
      justify-content:left;
      .key{
        flex-shrink:0;
        color:#aaa;
      }
      .value{  
      }
    }
  }
  .summary{
    padding:20px;
    background:#eee;
    line-height:1.6em;
    span{
      color:#aaa;
    }
    p {
      margin-top:10px;
      text-indent: 20px;
    }
  }
  .staff{
    padding:20px 0;
    .key{
      color:#aaa;
      margin-bottom:10px;
      padding: 0 20px;
    }
    .person-viewbox{
      width:100%;
      overflow:scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .person-wrap{
        height:200px;
        width:100%;
        display:flex;
        padding:0 20px;
        .person{
          flex-shrink:0;
          width:90px;
          text-align:center;
          margin-right:10px;
          display:inline-block;
          .img{
            width:100%;
            height:140px;
            background:#eee;
            background-size:cover;
            background-image: url(/static/img/cast_default.png);
          }
          .name{
            width:100%;
            margin-top:10px;
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
          }
        }
      }
    }   
  }

  .btn-back{
    position:absolute;
    z-index:999;
    top:10px;
    left:6px;
  }
  .btn-favor{
    position:absolute;
    z-index:999;
    top:10px;
    right:6px;
  }

}
</style>