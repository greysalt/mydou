<template>
  <div class="search-container">
    <div class="search-bar">
      <md-toolbar>
        <div class="md-toolbar-row">
          <md-button class="md-primary md-icon-button" @click="back()">
          <md-icon>arrow_back</md-icon>
        </md-button>
          <md-field>
            <md-input ref="movieSearch" v-model="queryInput" :placeholder="placeholder" @keyup.enter="newFetch()" @focus="placeholder=''" @blur="placeholder='请输入搜索信息'"></md-input>
          </md-field>

            <md-button class="md-icon-button md-primary" @click="newFetch()">
              <md-icon>search</md-icon>
            </md-button>
        </div>
        
      </md-toolbar>
    </div>
    
    <div class="result-box">
      <div class="result">
        <transition-group tag="div" name="cardSlide">
          <div class="card-box md-elevation-2" v-for="item in dataQuery" :key="item.id">
            <md-ripple>
              <router-link tag="div" class="card" :to="{ path:'/' + queryType +'/detail/' + item.id }">
                <div class="img" :style="{backgroundImage:'url(' + item.images.large + '),url(/mydou/dist/static/img/book_default.png)'}"></div>
                <div class="info">
                  <div>
                    <div class="title">{{ item.title }}<span v-if="item.year"> {{ item.year }}</span></div>
                    <div class="rating">
                      <Star v-if="item.rating.average !== 0" :rating="item.rating.average"></Star>
                      <span v-if="item.rating.average === 0">暂无评分</span>
                    </div>
                    <div class="subinfo" v-if="queryType === 'movie'">
                      <p class="type">类型：{{ item.genres | arrToString }}</p>
                      <p class="director">导演：{{ item.directors.map(e=>e.name) | arrToString }}</p>
                      <p class="casts">主演：{{ item.casts.map(e=>e.name) | arrToString }}</p>
                    </div>
                    <div class="subinfo" v-if="queryType === 'book'">
                      <p>{{item.author | arrToString }}</p>
                      <p>{{item.publisher}} / {{item.pubdate}}</p>
                      <p>{{item.price}}</p>
                    </div>
                    
                  </div> 
                </div>
              </router-link>
            </md-ripple>
          </div>
        </transition-group>
        
        <!-- 错误信息 -->
        <div v-if="showError" style="text-align:center;color:#ccc;">{{showError}}</div>
        
        <transition name="loading">
          <Loading v-if="showLoading"></Loading>
        </transition>
          

        <div class="md-layout md-alignment-center-center">
          <md-button class="md-primary" v-if="showBtn && dataQuery.length && queryInput && !showLoading" @click="fetchQuery()">加载更多</md-button>
          <md-button disabled v-if="!showBtn">- 没有更多内容啦 -</md-button>
        </div>
        </div> 
      </div>
    </div>

    
  </div>
</template>
<script>
import Star from './Star.vue'
import Loading from './Loading.vue'

export default {
  components: {
    Star,
    Loading
  },
  data () {
    return {
      placeholder: '请输入搜索信息'
    }
  },
  computed: {
    dataQuery () {
      return this.$store.state.dataQuery.subjects
    },
    showBtn () {
      return this.$store.state.dataQuery.showBtn
    },
    showLoading () {
      return this.$store.state.showLoading
    },
    showError () {
      return this.$store.state.showError
    },
    queryInput: {
      get: function () {
        return this.$store.state.dataQuery.q
      },
      set: function (newValue) {
        this.$store.state.dataQuery.q = newValue
      }
    },
    queryType () {
      return this.$route.params.nav
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    fetchQuery () {
      this.$store.dispatch('fetchQuery', { queryType: this.queryType })
    },
    newFetch () {
      this.$store.commit('CLEAN_FETCH_QUERY')
      this.$store.dispatch('fetchQuery', { queryType: this.queryType })
    }
  }
}
</script>
<style lang="scss">
.search-container{
  position:absolute;
  background:whitesmoke;
  width:100%;
  min-height:100vh;
  z-index:200;
  .search-bar{
    width:100%;
    position:fixed;
    top:0;
    z-index:99;
  }
  .result-box{
    width:100%;
    height:100%;
    .result{
      padding: 76px 14px;
      .card-box{
        margin-bottom:10px;
      }
      .card{
        border-radius:2px;
        height:auto;
        background:#fff;
        display:flex;
        position:relative;
        overflow:hidden;
        cursor:pointer;
        .img{
          width:30%;
          height:0;
          padding-bottom:40%;
          background:#eee;
          background-size:cover;
        }
        .info{
          width:70%;
          padding:10px 10px;
          position:absolute;
          right:0;
          .title{
            font-size:16px;
            font-weight:bold;
            span{
              color:#aaa;
              font-size:14px;
              font-weight:normal;
            }
          }
          .rating{
            line-height:24px;
            color:#FB8C00;
          }
          p{
            width:100%;
            text-overflow: ellipsis;
            overflow:hidden;
            white-space: nowrap;
            color:#aaa;
          }
        }
      }

    }
  }

}
  
</style>