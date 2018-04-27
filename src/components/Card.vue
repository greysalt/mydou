<template>
  <div class="card-container">
    <div class="md-layout md-alignment-left">   
      <div class="md-layout-item md-size-33" v-for="item in subjects" :key="item.id">
        <md-card class="card">
          <md-ripple>
            <router-link class="card-link" :to="{ path: navName + '/detail/' + item.id }">
              <md-card-media>
                <div class="card-img" :style="{ backgroundImage: 'url(' + item.imgUrl + '),url(/mydou/dist/static/img/book_default.png)' }"></div>
              </md-card-media>
              <div class="card-info">
                <div class="card-title">{{ item.title }}</div> 
                <div class="card-rating">
                  <Star v-if="item.rating !== 0" :rating="item.rating"></Star>
                  <span v-if="item.rating === 0">暂无评分</span>
                </div>
              </div>
            </router-link>
          </md-ripple>
        </md-card>
      </div> 
    </div>

    <div class="nomore-info" v-show="subjects.length">- 已将到底啦 -</div>
  </div>
</template>
<script>
import Star from './Star.vue'

export default{
  components: {
    Star
  },
  props: ['tabName', 'navName'],
  computed: {
    subjects () {
      return this.$store.state[this.navName + 's'][this.tabName].subjects
    }
  }
}
</script>
<style lang="scss">
.card-container{
  width:100%;
  padding:5px 5px 5px 5px;
  background:whitesmoke;
  .nomore-info {
    color:#ccc;
    text-align:center;
    padding:30px;
    background:whitesmoke;
  }
  .card{
    margin:5px;
    .card-img{
      width:100%;
      height:0;
      padding-bottom:150%;
      background-size:cover;
    }
    .card-info{
      padding:6px;
      .card-title{
        text-overflow: ellipsis;
        overflow:hidden;
        white-space: nowrap;
      }
      .card-rating{
        line-height: 16px;
        font-size:14px;
        color:#FB8C00;
      }
    }
    
  }
} 
</style>