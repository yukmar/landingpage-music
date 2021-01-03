<template>
  <header class="mob-navbar">
    <div class="mob-navbar__nav" title="nav-right">
      <router-link :to="{name: 'home'}" class="mob-navbar__logo">
        <img src="../../assets/images/logo.png" alt="">
        <span>Soundwave</span>
      </router-link>
    </div>
    <div class="mob-navbar__nav" title="nav-left">
      <router-link :to="{name: 'discover'}" class="mob-navbar__nav-item">
        Discover
      </router-link>
      <router-link :to="{name: 'join'}" class="mob-navbar__nav-item">
        Join
      </router-link>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  .mob-navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    &__nav{
      display: flex;
      flex-direction: row;
      justify-content: center;
      &-item{
        text-decoration: none;
        padding: 1rem .5rem;
      }
    }
    &__logo{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: .5rem;
      img{
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
</style>