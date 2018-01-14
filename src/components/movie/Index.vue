<template>
  <div class="index-container" ref="index_container">
      <div class="head">            
        <md-toolbar class="md-primary" md-elevation="2">
          <md-button class="md-icon-button" @click="showDrawer = !showDrawer">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">MOVIE</span>
          <div class="md-toolbar-section-end">
            <router-link to="/movie/search">
              <md-button class="md-icon-button">
                <md-icon>search</md-icon>
              </md-button>
            </router-link>
          </div>
          
        </md-toolbar>

        <md-tabs class="index-tab" md-alignment="fixed" :md-active-tab="'tab_' + movieTabName">
          <md-tab id="tab_in_theaters" md-label="正在热映" @click="changeTab('in_theaters')"></md-tab>
          <md-tab id="tab_coming_soon" md-label="即将上映" @click="changeTab('coming_soon')"></md-tab>
        </md-tabs>
      </div>


        <div class="index-loading">
          <transition name="loading-fade">
            <Loading v-if="showLoading"></Loading>
          </transition>
          <div v-if="showError" style="text-align:center;color:#ccc;">{{showError}}</div> 
        </div>         
      
        <div class="cards">
          <Card v-if="movieTabName === 'in_theaters'" tab-name="in_theaters"></Card> 
          <Card v-if="movieTabName === 'coming_soon'" tab-name="coming_soon"></Card>  
        </div>

      <md-drawer class="drawer" :md-active.sync="showDrawer">
        <div class="drawer-title">MyDou V1.0</div>
        <md-list>
          <md-list-item to="/movie" @click="showDrawer=!showDrawer">
            <md-icon class="md-primary">movie</md-icon>
            <span class="md-list-item-text">电影</span>
          </md-list-item>
          <md-list-item to="/book">
            <md-icon>book</md-icon>
            <span class="md-list-item-text">图书</span>
            <span class="cs">( coming soon )</span>
            
          </md-list-item>
          <md-list-item to="/favor">
            <md-icon>favorite</md-icon>
            <span class="md-list-item-text">收藏</span>
            <span class="cs">( coming soon )</span>
          </md-list-item>
          <div class="divider"></div>
          <md-list-item to="/about/info">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">关于</span>
          </md-list-item>
        </md-list>
      </md-drawer>

    
  </div>
</template>

<script>
import Card from './Card.vue'
import Loading from '../Loading.vue'

export default {

  components: {
    Card,
    Loading
  },
  data () {
    return {
      showDrawer: false
    }
  },
  computed: {
    showLoading () {
      return this.$store.state.showLoading
    },
    movieTabName () {
      return this.$store.state.movieTabName
    },
    showError () {
      return this.$store.state.showError
    }
  },
  methods: {
    changeTab (tabName) {
      if (this.$store.state.movies['movie_' + tabName].count === 0) {
        this.$store.dispatch('fetchMovies', {tabName: tabName})
      }
      this.$store.commit('CHANGE_MOVIE_TAB', {tabName: tabName})
    }
  },
  watch: {
    showDrawer: function (val) {
      if (val === true) {
        this.$refs.index_container.classList.add('hide')
      } else {
        this.$refs.index_container.classList.remove('hide')
      }
    }
  },
  mounted () {
    if (this.$store.state.movies['movie_in_theaters'].count === 0) {
      this.$store.dispatch('fetchMovies', {tabName: 'in_theaters'})
      console.log('fetched')
    }
  }
}
</script>

<style lang="scss">
// @import "../../node_modules/vue-material/src/theme/engine";

// @include md-register-theme("green-tab", (
//     primary: md-get-palette-color(green, 100)
//   ));

// @import "../../node_modules/vue-material/src/components/MdTabs/theme";

.index-container{
  position: absolute;
  width:100%;
  z-index:0;
  &.hide{
    height:100vh;
    overflow:hidden;
  }
  .head {
    width:100%;
    position:fixed;
    top:0;
    z-index:10;
    .index-tab {
      width:100%;

    }
  }
  .cards {
    padding-top:104px;
  }
  
}

.index-loading {
  position:absolute;
  width:100%;
  z-index:0;
  margin-top:200px;
}

.md-overlay {
    z-index:888 !important;
    height:100vh;
    position:fixed;
  }

.drawer{
  height:100vh;
  position:fixed;
  &.md-drawer{
  width:300px;
  max-width: calc(100vw - 125px) !important;
  z-index:999 !important;
  }
  .drawer-title{
    padding:50px 16px;
    font-size:20px;
    //font-weight:bold;
    color:#fff;
    text-align:center;
    background:rgba(67, 160, 71, .8);
  }
  .cs {
    color:#ddd;
  }
}
.nav-title{
  padding: 50px 0;
}

.divider{
  height:1px;
  background:rgba(0,0,0,.12);
  //margin-left:16px;
}

</style>
