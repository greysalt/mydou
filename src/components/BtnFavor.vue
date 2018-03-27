<template>
      <div class="btn" @click="ripple()">
        <i class="material-icons" v-if="!isLiked">favorite_border</i>
        <i class="material-icons active" v-if="isLiked">favorite</i>
        <i class="material-icons favor-ripple" ref="favor_ripple">favorite</i>
      </div>  
</template>
<script>
export default {
  props: ['isLiked'],
  methods: {
    // 心形动效
    ripple () {
      var heart = this.$refs.favor_ripple
      heart.classList.remove('ani')
      setTimeout(function () {
        heart.classList.add('ani')
      }, 50)
    }
  }
}
</script>
<style lang="scss" scoped>
  .btn{
    width:40px;
    height:40px;
    border-radius:40px;
    cursor:pointer;
    color:rgba(255,255,255,0.9);
    line-height:40px;
    display:flex;
    justify-content:center;
    .material-icons{
      line-height:inherit;
      &.active {
        color:#fb8c00;
      } 
    }
    .favor-ripple {
        color: #fb8c00;
        position:absolute;
        top:0;
        left:8px;
        opacity:0;
        &.ani {
          animation: favorRipple .4s ease
        }
    }
  }

  @keyframes favorRipple {
    from { transform: scale(1); opacity: 1;}
    to { transform: scale(3); opacity: 0;}
  }
  
</style>