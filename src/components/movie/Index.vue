<template>
  <div class="index-container" :class="{'hide': showDrawer}">
      <div class="head">            
        <Nav navName="movie" :showDrawer="showDrawer"></Nav>
        
        <Tabs :tabs="tabs" navName="movie"></Tabs>
      </div>

      <div class="index-loading">
        <transition name="loading-fade">
          <Loading v-if="showLoading"></Loading>
        </transition>
        <div v-if="showError" style="text-align:center;color:#ccc;">{{showError}}</div> 
      </div>         
    
      <div class="cards">
        <Card v-if="movieTabName === 'in_theaters'" tabName="in_theaters" navName="movie"></Card> 
        <Card v-if="movieTabName === 'coming_soon'" tabName="coming_soon" navName="movie"></Card>  
      </div>

    
  </div>
</template>

<script>
import Card from '../Card.vue'
import Loading from '../Loading.vue'
import Nav from '../Nav.vue'
import Tabs from '../Tabs.vue'

export default {

  components: {
    Card,
    Loading,
    Nav,
    Tabs
  },
  data () {
    return {
      tabs: [
        {tabName: 'in_theaters', label: '正在热映'},
        {tabName: 'coming_soon', label: '即将上映'}
      ]
    }
  },
  computed: {
    showDrawer () {
      return this.$store.state.showDrawer
    },
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
    toggleDrawer () {
      this.$store.commit('TOGGLE_DRAWER')
    }
  },
  mounted () {
    if (this.$store.state.movies.in_theaters.count === 0) {
      this.$store.dispatch('fetch_movie', {tabName: 'in_theaters'})
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
    z-index:10;
  }
  .index-loading {
    position:absolute;
    width:100%;
    z-index:0;
    margin-top:200px;
  }
}



.md-overlay {
    z-index:888 !important;
    height:100vh;
    position:fixed;
  }


</style>
