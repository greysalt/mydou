<template>
  <div id="app">
    <div class="viewport">
      <transition :name="slideName">
        <router-view/>
      </transition>
    </div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      var arrTo = to.path.split('/')
      var arrFrom = from.path.split('/')
      if (arrTo.length > arrFrom.length) {
        this.slideName = 'slide-left'
      } else if (arrTo.length === arrFrom.length) {
        this.slideName = ''
      } else {
        this.slideName = 'slide-right'
      }
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #333;
  background: #ddd;
}

#app .viewport{
  width:100%;
  max-width: 500px;
  height: 100vh;
  background: #fff;
  position:relative;
  margin:0 auto;
  overflow:hidden;
}

.clear{
  clear:both;
}

//插件元素调整（tab底色）
// .md-tabs.md-theme-default .md-tabs-navigation{
//   background:rgba(0,0,0,.05);
//   // border-bottom:1px solid #ddd;
// }

//插件元素调整（去除a标签默认主题色）
.md-theme-default a:not(.md-button){
  text-decoration:none;
  color:rgba(0,0,0,.87);
  &:hover,&:active{
    color:rgba(0,0,0,.87);
  }
}

//切换动画
//左滑
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform .6s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter {
  transform: translateX(100%);

}
.slide-left-leave-to {
  transform: translateX(-50%);

}

//右滑
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform .6s cubic-bezier(.55,0,.1,1);
}
.slide-right-enter {
  transform: translateX(-50%);

}
.slide-right-leave-to {
  transform: translateX(100%);

}

//卡片动效

.cardSlide-enter-active, .cardSlide-leave-active {
  transition: all .5s ease;
}
.cardSlide-enter {
  transform: translateY(50%);
  opacity:0;
}
.cardSlide-leave-to {
  transform: translateY(-50%);
  opacity:0;
}

// .cardSlide-move{
//   transition: all 1s ease;
// }

</style>
