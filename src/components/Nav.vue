<template>
  <div>
    <md-toolbar class="md-primary" md-elevation="2">
      <md-button class="md-icon-button" @click="showDrawer = !showDrawer">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title nav-title">{{ navName }}</span>
      <div class="md-toolbar-section-end" v-if="navName === 'movie' || navName === 'book'">
        <router-link :to="`/search/${navName}`">
          <md-button class="md-icon-button"  @click="cleanQuery()">
            <md-icon>search</md-icon>
          </md-button>
        </router-link>
      </div>    
    </md-toolbar>

    <md-drawer class="drawer" :md-active.sync="showDrawer">
        <div class="drawer-title">MyDou V1.0</div>
        <md-list>
          <md-list-item to="/movie" @click="showDrawer=!showDrawer">
            <md-icon  :class="{'md-primary': iconActive.movie }">movie</md-icon>
            <span class="md-list-item-text">电影</span>
          </md-list-item>
          <md-list-item to="/book" @click="showDrawer=!showDrawer">
            <md-icon :class="{'md-primary': iconActive.book }">book</md-icon>
            <span class="md-list-item-text">图书</span>  
          </md-list-item>
          <md-list-item to="/favor" @click="showDrawer=!showDrawer">
            <md-icon  :class="{'md-primary': iconActive.favor }">favorite</md-icon>
            <span class="md-list-item-text">收藏</span>
          </md-list-item>
          <div class="divider"></div>
          <md-list-item to="/about/info" @click="showDrawer=!showDrawer">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">关于</span>
          </md-list-item>
        </md-list>
      </md-drawer>  
  </div>    
</template>
<script>
export default {
  props: ['navName'],
  data () {
    return {
      iconActive: {
        movie: '',
        book: '',
        favor: ''
      }
    }
  },
  computed: {
    showDrawer: {
      get: function () {
        return this.$store.state.showDrawer
      },
      set: function (newValue) {
        this.$store.state.showDrawer = newValue
      }
    }
  },
  methods: {
    cleanQuery () {
      this.$store.commit('CLEAN_FETCH_QUERY')
      this.$store.commit('CHANGE_QUERY_INPUT', {q: ''})
    }
  },
  mounted () {
    this.iconActive[this.navName] = true
  }
}
</script>
<style lang="scss">
.nav-title {
  text-transform: uppercase;
}

.drawer{
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
    //background:linear-gradient(#69b96d, #43a047);
    background:rgba(67, 160, 71, 1);
  }
  .cs {
    color:#ddd;
  }
}

.divider{
  height:1px;
  background:rgba(0,0,0,.12);
}
</style>
