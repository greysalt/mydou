<template>
  <div class="md-layout md-alignment-center-center" style="background:transparent;"> 
    <md-progress-spinner style="margin:20px 0;" md-mode="indeterminate" :md-diameter="26" :md-stroke="2.5"></md-progress-spinner>
  </div>
</template>
<style>
/*loading动画*/
.loading-enter-active, .loading-leave-active {
  transition: all .3s ease;
}
.loading-enter {
  transform: translateY(-50%);
  opacity:0;
}
.loading-leave-to {
  transform: translateY(-50%);
  opacity:0;
}

.loading-faed-enter-active, .loading-faed-leave-active {
  transition: opacity .5s ease;
}
.loading-faed-enter {
  opacity:0;
}
.loading-faed-leave-to {
  opacity:0;
}


</style>
