<template>
  <div class="index-container" :class="{'hide': showDrawer}">   
    <div class="head">
      <Nav navName="book" :showDrawer="showDrawer"></Nav>

      <Tabs :tabs="tabs" navName="book"></Tabs>
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
import Tabs from '../Tabs.vue'

export default {
  components: {
    Nav,
    Card,
    Loading,
    Tabs
  },
  data () {
    return {
      tabs: [
        {tabName: 'hot', label: '热门'},
        {tabName: 'scifi', label: '科幻'},
        {tabName: 'detective', label: '推理'},
        {tabName: 'kongfu', label: '武侠'},
        {tabName: 'romantic', label: '言情'}
      ]
    }
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
    fetchBook (tabName, tag) {
      this.$store.dispatch('fetch_book', {tag: tag, tabName: tabName})
    }
  },
  mounted () {
    if (this.$store.state.books.hot.count === 0) {
      this.fetchBook('hot', '2017')
    }
  }
}
</script>

<style>
</style>