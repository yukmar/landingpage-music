<template>
  <Header />
  <transition name="fade" mode="out-in">
    <div>
      <router-view></router-view>
    </div>
  </transition>
  <Footer v-if="checkPathHome" />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    checkPathHome(){
      return this.$route.name !== 'home';
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateX(2rem);
}
.fade-enter-active, .fade-leave-active{
  transition: transform .3s ease;
}
</style>