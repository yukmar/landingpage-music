<template>
  <div :style="layoutCss" :class="baseStyle()">
    <slot></slot>
  </div>
  <div id="circle-1"></div>
  <div id="circle-2"></div>
  <div id="circle-3"></div>

</template>
<script>
  export default{
    props: {
      layoutCss: Object,
      layoutClass: Array
    },
    methods: {
      baseStyle(){
        let styleList = ['base-content']
        if (this.layoutClass) {
          styleList.push(...this.layoutClass);
        }
        return styleList;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .base-content{
    @apply flex flex-col flex-grow;
    @screen sm{
      @apply flex-row
      justify-around 
      p-0 w-4/5
      text-white;
    }
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