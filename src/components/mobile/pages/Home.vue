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
    // flex-grow: 1;
    // display: flex;
    // flex-direction: column;
    
    // justify-content: space-between;
    // height: 100%;

    @apply flex flex-col flex-grow
    justify-between h-full;
  }

div:first-child{
  // display: flex;
  // flex-direction: row;
  // justify-content: center;

  // order: 2;
  // width: 100%;
  img{
    // width: 50%;
    @apply w-2/4;
  }
  @apply flex flex-row justify-center
  order-2 w-full;
}
div:last-child{
  // order: 1;
  // display: flex;
  // flex-direction: column;
  // gap: 1rem;
  // line-height: 1rem;
  // margin-top: 3rem;
  // margin-left: 3rem;
  padding-right: 20px;

  @apply flex flex-col order-1 gap-4
  mt-12 ml-12
  leading-4;
}
.title{
  // font-size: 2.5rem;
  @apply text-4xl;
}
.subtitle{
  // font-size: 1rem;
  @apply text-base;
}
</style>