<template>
  <Content :layoutClass="styleClass">
    <div title="left">
      <h1 class="title">Join the <span>fun.</span></h1>
    </div>
    <div title="right">
      <form class="form">
        <div class="form__item">
          <label>Name:</label>
          <input type="text">
        </div>
        <div class="form__item">
          <label>Email:</label>
          <input type="text">
        </div>
        <div class="form__item">
          <label>Password:</label>
          <input type="text">
        </div>
        <button class="button">Join Now</button>
      </form>
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
        styleClass: ['items-center', 'justify-center']
      }
    }
  }
</script>
<style lang="scss" scoped>

.title{
  @apply mb-2 sm:font-bold sm:text-6xl;
  span{
    font-size: 3.5rem;
    color: $fun-wordColor;

    @apply font-bold sm:text-8xl;
  }
}
div:last-child{
  background-color: $bgColor-2nd;
  @apply m-2 p-4 rounded-xl;
  @screen sm{
    min-height: 55vh;
    width: 40vw;
    @apply flex flex-col items-center justify-center;
  }
}
.form{
  @apply flex flex-col
  gap-4;
  @screen sm{
    width: 70%;
    @apply content-center gap-8 py-8;
  }
  &__item{
    @screen sm{
      @apply flex flex-col gap-4;
    }
    label{
      @apply sm:font-bold;
    }
  }
}
input[type='text']{
  all: unset;
  border-color: $input-borderColor;

  @apply p-2 border border-solid rounded;
  @screen sm{
    @apply border-2 px-4 py-2;
  }
}
</style>