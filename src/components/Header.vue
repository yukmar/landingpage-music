<template>
  <header class="navbar">
    <nav class="navbar__nav">
      <div class="navbar__nav-left">
        <router-link :to="{name: 'home'}" class="navbar__nav-logo">
          <img src="../assets/images/logo.png" alt="logo" />
          <span>Soundwave</span>
        </router-link>
      </div>
      <div class="navbar__nav-right">
        <router-link :to="{name: 'discover'}" class="navbar__nav-item">
          Discover
        </router-link>
        <router-link :to="{name: 'join'}" class="navbar__nav-item">
          Join
        </router-link>
      </div>
    </nav>
  </header>
</template>