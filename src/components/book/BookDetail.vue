<template>
  <div class="b-detail-container">
    
    <div class="head">
      <div class="post md-elevation-24" :style="{backgroundImage:'url(' + book.images.large + ')'}"></div>
      <div class="btn-back" @click="back()">
          <BtnBack></BtnBack>
      </div>
      <div class="btn-favor" @click="addFavor()">
          <BtnFavor :isLiked="this.isLiked"></BtnFavor>
      </div>    
    </div>
    <div class="main-title">   
      <div class="title">{{ book.title }}</div>
      <div class="rating">
        <Star v-if="book.rating.average !== 0" :rating="book.rating.average"></Star>
        <span v-if="book.rating.average === 0">暂无评分</span>
      </div>
    </div>
    <div class="info">
      <div class="info-group">
        <span class="key">作者：</span>
        <div class="value">{{ book.author | arrToString }}</div>
      </div>
      <div class="info-group">
        <span class="key">出版社：</span>
        <div class="value">{{ book.publisher }}</div>
      </div>
      <div class="info-group" v-if="book.subtitle">
        <span class="key">副标题：</span>
        <div class="value">{{ book.subtitle }}</div>
      </div>
      <div class="info-group">
        <span class="key">出版年：</span>
        <div class="value">{{ book.pubdate }}</div>
      </div>
      <div class="info-group">
        <span class="key">页数：</span>
        <div class="value">{{ book.pages }}</div>
      </div>
      <div class="info-group">
        <span class="key">定价：</span>
        <div class="value">{{ book.price }}</div>
      </div>
      <div class="info-group">
        <span class="key">装帧：</span>
        <div class="value">{{ book.binding }}</div>
      </div>
      
    </div>
    <div>
      <md-ripple>
        <div class="summary">
            <span class="start">内容简介：</span>
            <p>{{ book.summary }}</p>
        </div>
      </md-ripple>
    </div>

    <div class="tags">
      <p>标签：</p>
      <span class="tag" v-for="item in book.tags">{{item.name}}</span>
    </div>
    <div>
      <md-ripple>
        <div class="summary">
            <span class="start">作者简介：</span>
            <p>{{ book.author_intro }}</p>
        </div>
      </md-ripple>
    </div>

    <transition name="popup">
      <Popup v-show="popActive" :message="popMessage"></Popup>
    </transition>

  </div>
</template>
<script>
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
      book: {
        id: '',
        title: '',
        rating: {
          average: ''
        },
        images: {
          large: ''
        },
        author: [],
        publisher: '',
        subtitle: '',
        pubdate: '',
        binding: '',
        price: '',
        pages: '',
        summary: '',
        author_intro: '',
        tags: []
      },
      isLiked: false,
      popActive: false,
      popMessage: ''
    }
  },
  computed: {
  },
  methods: {
    fetchBookDetail () {
      const id = this.$route.params.id
      const url = 'https://api.douban.com/v2/book/' + id
      const _that = this
      $.ajax({  // eslint-disable-line
        url: url,
        dataType: 'jsonp',
        success: function (data) {
          _that.book = data

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
    },
    back () {
      this.$router.go(-1)
    },

    // 收藏按钮
    addFavor () {
      if (this.book.id) {
        const STORAGE_KEY = 'mydou_favor_book'
        var favorItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        var favorItem = {
          id: this.book.id,
          title: this.book.title,
          img: this.book.images.large,
          rating: this.book.rating.average
        }
        if (this.isLiked !== true) {
          // 加入收藏
          favorItems.push(favorItem)
          this.isLiked = true
          this.showPop('已加入收藏 : )')
        } else {
          // 取消收藏
          var itemIndex = this.getIndex(this.book.id)
          if (itemIndex !== -1) {
            favorItems.splice(itemIndex, 1)
            this.isLiked = false
          }
          this.showPop('已取消收藏 : (')
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorItems))
      }
    },
    // 从 LOCAL STORAGE 获取已收藏电影的 INDEX
    getIndex (val) {
      var index = -1
      const STORAGE_KEY = 'mydou_favor_book'
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
    this.fetchBookDetail()
  }
}
</script>

<style lang="scss">
.b-detail-container{
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
        width:70px;
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

  .tags {
    padding:20px;
    p {
      color:#aaa;
      margin-bottom:10px;
    }
    .tag {
      display:inline-block;
      padding:4px 6px;
      border-radius:2px;
      background:rgba(67, 160, 71, .1);
      //border:1px solid rgba(67, 160, 71, .5);
      color:rgb(67, 160, 71);
      margin: 6px 10px 6px 0;
      white-spacing:nowrap;
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