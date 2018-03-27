<template>
  <div class="popup">{{ message }}
  </div>
</template>

<script>
  export default {
    props: ['message']
  }
</script>

<style lang="scss">
.popup {
  position:fixed;
  top:30px;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50px;
  padding:8px 16px;
  max-width:300px;
  color:#43a047;
  box-shadow: 0 4px 10px rgba(0,0,0,.4);
  z-index:9999;

}

// popup动效
.popup-enter-active, .popup-leave-active {
  transition: all .4s ease;
}
.popup-enter {
  top:10px;
  opacity:0
}
.popup-leave-to {
  top:10px;
  opacity:0
}
  
</style>