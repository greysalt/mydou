<template>
  <div class="star">   
    <i class="material-icons md-size orange" v-for="n in ratingObj.star">star</i>
    <i class="material-icons md-size orange" v-for="n in ratingObj.half">star_half</i>
    <i class="material-icons md-size orange" v-for="n in ratingObj.left">star_border</i>
    <span>{{rating}}</span>
  </div>
</template>
<script>
export default{
  props: ['rating'],
  computed: {
    ratingObj () {
      var num = Math.floor(this.rating)
      var star = Math.floor(num / 2)
      var half = num % 2
      var left = 5 - star - half
      return {
        star,
        half,
        left
      }
    }
  }
}
</script>
<style lang="scss">
.star {
  line-height:inherit;
  .material-icons{
    display: block;
    float: left;
    margin-right:-2px;
    line-height:inherit;
    text-align:inherit;
  }
  .material-icons.md-size { font-size: inherit; }
  .material-icons.orange { color: #FB8C00; }
  span{
    margin-left:5px;
    color: #FB8C00;
    font-size:inherit;
  }
}
 
</style>