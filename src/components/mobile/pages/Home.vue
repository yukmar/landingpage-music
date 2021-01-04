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
    @apply flex flex-grow flex-col
    justify-between h-full;
  }

div:first-child{
  img{
    @apply w-2/4;
  }
  @apply flex flex-row justify-center
  order-2 w-full;
}
div:last-child{
  padding-right: 20px;

  @apply flex flex-col order-1 gap-4
  mt-12 ml-12
  leading-4;
}
.title{
  @apply text-4xl;
}
.subtitle{
  @apply text-base;
}
</style>