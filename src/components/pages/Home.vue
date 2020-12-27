<template>
  <div title="left">
    <img src="../../assets/images/landing-page-girl.png">
  </div>
  <div title="right" class="headline">
    <h1 class="title">Feel The Music</h1>
    <p class="subtitle">Stream over 20 thousand songs with one click</p>
    <router-link :to="{name: 'join'}"><a class="button">Join Now</a></router-link>
  </div>
</template>
<style lang="scss" scoped>
div:first-child{
  img{
    height: 80vh;
  }
  @apply self-end flex-grow;
}
</style>