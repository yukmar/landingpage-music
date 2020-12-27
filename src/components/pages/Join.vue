<template>
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
</template>
<style lang="scss" scoped>
  div{
    @apply self-center;
  }
  .title{
    span{
      font-size: 4.5rem;
      color: $fun-wordColor;
    }
    @apply font-bold;
  }
  div:last-child{
    background-color: $bgColor-2nd;
    @apply py-4 px-2;
  }
  .form{
    &__item{
      // width: 85vw;
      @apply flex flex-col gap-2;
    }
    @apply flex flex-col content-center gap-4 px-4 sm:px-14 py-8;
  }
  input[type='text']{
    all: unset;
    border-color: $input-borderColor;
    @apply border border-solid px-6 py-4;
  }
</style>