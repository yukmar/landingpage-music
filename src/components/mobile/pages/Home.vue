<template>  
  <div class="mob-main">
    <div title="left">
      <img src="../../../assets/images/landing-page-girl.png">
    </div>
    <div title="right">
      <h1 class="title">Feel The Music</h1>
      <p class="subtitle">Stream over 20 thousand songs with one click</p>
      <router-link :to="{name: 'join'}"><a class="button">Join Now</a></router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mob-main{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
    height: 100%;
  }

div:first-child{
  order: 2;
  width: 100%;
  img{
    width: 50%;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
}
div:last-child{
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1rem;
  padding-right: 20px;
  margin-top: 3rem;
  margin-left: 3rem;
}
.title{
  font-size: 2.5rem;
}
.subtitle{
  font-size: 1rem;
}
</style>