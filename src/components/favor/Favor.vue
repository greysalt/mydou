<template>
  <div class="favor-container" :class="{'hide': showDrawer}">
    <div class="head">
      <Nav navName="favor ♥" :showDrawer="showDrawer"></Nav>
      <md-tabs md-alignment="fixed" :md-active-tab="favorTabId">
        <md-tab md-label="我的电影" @click="changeTab('movie')" id="favor_tab_movie"></md-tab>
        <md-tab md-label="我的图书" @click="changeTab('book')" id="favor_tab_book"></md-tab>
      </md-tabs>
    </div>
    
    <FavorCard type="movie" v-if="favorTabName === 'movie'" :subjects="movie"></FavorCard>
    <FavorCard type="book" v-if="favorTabName === 'book'" :subjects="book"></FavorCard>
  </div>
</template>
<script>
import Nav from '../Nav.vue'
import FavorCard from './FavorCard.vue'

export default {
  components: {
    Nav,
    FavorCard
  },
  data () {
    return {
      movie: [],
      book: []
    }
  },
  computed: {
    showDrawer () {
      return this.$store.state.showDrawer
    },
    favorTabName () {
      return this.$store.state.favorTabName
    },
    favorTabId () {
      return 'favor_tab_' + this.favorTabName
    }
  },
  methods: {
    changeTab (tabName) {
      this.$store.commit('CHANGE_FAVOR_TAB', {tabName: tabName})
    }
  },
  created () {
    this.movie = JSON.parse(localStorage.getItem('mydou_favor_movie') || '[]')
    this.book = JSON.parse(localStorage.getItem('mydou_favor_book') || '[]')
  }
}
</script>
<style lang="scss">
.favor-container{
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

</style>