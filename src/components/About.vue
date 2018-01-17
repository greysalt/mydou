<template>
  <div class="about-container">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="back()">
        <md-icon>arrow_back</md-icon>
      </md-button>
      <span class="md-title">ABOUT</span>
    </md-toolbar>

    <div class="head">
      <p class="title">MyDou V1.0</p>
      <p class="sub">移动端豆瓣WEB应用</p>
    </div>
    
    <div class="info-box">
      <div class="info">
        <div class="item key">View Source Code</div>
        <div class="md-elevation-1">
          <md-ripple>
          <a class="item value" href="https://github.com/greysalt/mydou" target="_blank">
              <md-icon>link</md-icon>
              <span>GitHub</span>
          </a>
          </md-ripple> 
        </div>
        
        <div class="item key">Contact Me</div>

        <div class="md-elevation-1">
          <md-ripple>
          <div class="item value last">
            <md-icon>email</md-icon>
            <span>richard216@163.com</span>
          </div>
          </md-ripple> 
        </div>
  
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
  .about-container{
    width:100%;
    height:100vh;
    background:whitesmoke;
    position:absolute;
    z-index:100;

    .head{
      text-align:center;
      color:#999;
      .title{
        font-size:36px;
        margin:100px 0 16px;
        font-weight:bold;
        white-spacing: nowrap;
      }
      .sub {
        font-size:16px;
        margin-bottom:50px;
        letter-spacing:5px;
      }
    }
    .info-box{
      width:100%;
      position:relative;
      .info {
        margin:0 auto;
        max-width:320px;
        min-width:250px;
        width:70%;
        border:1px solid #ddd;
        border-radius:4px;
        .item {
          display:block;
          width:100%;
          line-height:50px;
          height:50px;
          padding:0 10px;
          color:#999;
          &.value {
            background:#fff;
            font-size:16px;
            color:rgba(0,0,0,0.78);
            cursor:pointer;
            &.last{
              border-radius:0 0 4px 4px;
            }
            span {
              margin-left:10px;
            }
          }
        }
      }
    }
    
  }
</style>