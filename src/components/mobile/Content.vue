<template>
  <slot></slot>
  <Footer />
  <div id="circle-1"></div>
  <div id="circle-2"></div>
  <div id="circle-3"></div>
</template>
<script>
  import Footer from './Footer.vue';
  export default {
    components: {
      Footer
    }
  }
</script>
<style lang="scss" scoped>
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