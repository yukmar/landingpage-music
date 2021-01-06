<template>
  <Content :layoutClass="styleClasses">
    <div title="left">
      <img src="../../assets/images/landing-page-girl.png">
    </div>
    <div title="right" class="headline">
      <h1 class="title">Feel The Music</h1>
      <p class="subtitle">Stream over 20 thousand songs with one click</p>
      <router-link :to="{name: 'join'}"><a class="button">Join Now</a></router-link>
    </div>
  </Content>
</template>
<script>
  import Content from '../Content.vue';
  export default{
    components: {
      Content
    },
    data(){
      return{
        styleClasses: ['justify-between', 'h-full']
      }
    }
  }
</script>
<style lang="scss" scoped>

div:first-child{
  @apply flex flex-row justify-center
  order-2 w-full;
  @screen sm{
    @apply flex-grow order-1 self-end w-auto flex-grow;
  }
  img{
    @apply w-2/3;
    @screen sm{
      height: 75vh;
      @apply w-auto;
    }
  }
}
div:last-child{
  @apply mt-14 mx-14 text-center sm:mt-0 sm:mx-0
  leading-8 pr-0;
}

</style>