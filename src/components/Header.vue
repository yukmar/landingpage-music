<template>
  <header class="navbar">
    <div class="navbar__nav" title="nav-right">
      <router-link :to="{name: 'home'}" class="navbar__nav-logo">
        <img src="../assets/images/logo.png" alt="">
        <span>Soundwave</span>
      </router-link>
    </div>
    <div class="navbar__nav" title="nav-left">
      <router-link :to="{name: 'discover'}" class="navbar__nav-item">
        Discover
      </router-link>
      <router-link :to="{name: 'join'}" class="navbar__nav-item">
        Join
      </router-link>
    </div>
  </header>
</template>