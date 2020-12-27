<template>
  <div class="main">
    <router-view></router-view>
  </div>
  <Footer v-if="checkPathHome"/>
  <div id="circle-1"></div>
  <div id="circle-2"></div>
  <div id="circle-3"></div>
</template>
<script>
  import Footer from './Footer.vue';
  export default{
    components: {
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
  .main{
    @apply text-white flex flex-col sm:flex-row justify-around flex-grow py-4 sm:p-0 w-4/5;
  }

  #circle-1{
    @include circle(16em, 16em, #3c313f, 50%, bottom, 3em, left, 6em);
  }

  #circle-2{
    @include circle(10em, 10em, #2f3446, 50%, top, 13vh, left, 40vw);
  }

  #circle-3{
    @include circle(30em, 30em, #2d364f, 50%, bottom, 0, right, 0);
    transform: translate(40%, 40%);
  }
</style>