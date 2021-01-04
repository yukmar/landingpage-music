<template>
  <Header />
  <router-view></router-view>
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