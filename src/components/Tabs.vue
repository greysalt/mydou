<template>
<div class="tab-container">
  <div class="tabs">
    <div class="tab" v-for="(item,index) in tabs" :style="tabStyle" @click="changeTab(item.tabName, item.label)" :class="{'active':activeTabName === item.tabName}">
      <md-ripple>
      <div class="label">{{item.label}}</div>
    </md-ripple>
    </div>
  </div>
  <div class="indicator" :style="indicatorStyle"></div>
</div>

</template>
<script>
export default {
  props: ['tabs', 'navName'],
  data () {
    return {
      tabIndex: 0
    }
  },
  computed: {
    tabStyle () {
      var n = this.tabs.length
      return {
        width: (1 / n) * 100 + '%'
      }
    },
    indicatorStyle () {
      var n = this.tabs.length
      var tabIndex
      this.tabs.map((e, index) => {
        if (e.tabName === this.activeTabName) {
          tabIndex = index
        }
      }, this)
      return {
        width: (1 / n) * 100 + '%',
        left: (1 / n) * 100 * tabIndex + '%'
      }
    },
    activeTabName () {
      return this.$store.state[this.navName + 'TabName']
    }
  },
  methods: {
    changeTab (tabName, tag) {
      if (this.$store.state[this.navName + 's'][tabName].count === 0) {
        this.$store.dispatch('fetch_' + this.navName, {tabName: tabName, tag: tag})
      }
      this.$store.commit('CHANGE_TAB_' + this.navName.toUpperCase(), {tabName: tabName})
    }
  }
}
</script>
<style lang="scss" scope>
.tab-container{ 
  width:100%;
  position:relative;
  .tabs{
    width:100%;
    display:flex;
    justify-content:center;
    .tab{
      background:#fff;
      text-align:center;
      position:relative;
      line-height:48px;
      cursor:pointer;
      &.active{
        color:rgb(67, 160, 71);
      }
    }
  }
  .indicator{
    height:2px;
    background:#43a047;
    position:absolute;
    top:46px;
    transition: all .4s cubic-bezier(.55,0,.1,1);
  }
}
</style>
