<template>
  <div class="index-container" :class="{'hide': showDrawer}">
    
    <div class="head">
      <Nav navName="book"></Nav>

      <md-tabs class="index-tab" md-alignment="fixed" :md-active-tab="'tab_book_' + bookTabName">
        <md-tab id="tab_book_hot" md-label="热门" @click="changeTab('hot','2017')"></md-tab>
        <md-tab id="tab_book_scifi" md-label="科幻" @click="changeTab('scifi', '科幻')"></md-tab>
        <md-tab id="tab_book_detective" md-label="推理" @click="changeTab('detective', '推理')"></md-tab>
        <md-tab id="tab_book_kongfu" md-label="武侠" @click="changeTab('kongfu', '武侠')"></md-tab>
        <md-tab id="tab_book_romantic" md-label="言情" @click="changeTab('romantic', '言情')"></md-tab>
      </md-tabs>
    </div>  

    <div class="index-loading">
      <transition name="loading-fade">
        <Loading v-if="showLoading"></Loading>
      </transition>
      <div v-if="showError" style="text-align:center;color:#ccc;">{{showError}}</div> 
    </div>

    <Card v-if="bookTabName === 'hot'" tabName="hot" navName="book"></Card>
    <Card v-if="bookTabName === 'scifi'" tabName="scifi" navName="book"></Card>
    <Card v-if="bookTabName === 'detective'" tabName="detective" navName="book"></Card>
    <Card v-if="bookTabName === 'kongfu'" tabName="kongfu" navName="book"></Card>
    <Card v-if="bookTabName === 'romantic'" tabName="romantic" navName="book"></Card>

  </div>
</template>
<script>
import Nav from '../Nav.vue'
import Card from '../Card.vue'
import Loading from '../Loading.vue'

export default {
  components: {
    Nav,
    Card,
    Loading
  },
  computed: {
    showDrawer () {
      return this.$store.state.showDrawer
    },
    bookTabName () {
      return this.$store.state.bookTabName
    },
    showLoading () {
      return this.$store.state.showLoading
    },
    showError () {
      return this.$store.state.showError
    }
  },
  methods: {
    fetchBooks (tabName, tag) {
      this.$store.dispatch('fetchBooks', {tag: tag, tabName: tabName})
    },
    changeTab (tabName, tag) {
      if (this.$store.state.books[tabName].count === 0) {
        this.fetchBooks(tabName, tag)
      }
      this.$store.commit('CHANGE_BOOK_TAB', {tabName: tabName})
    }
  },
  mounted () {
    if (this.$store.state.books.hot.count === 0) {
      this.fetchBooks('hot', '2017')
    }
  }
}
</script>

<style>
</style>