<template>
  <div class="mob-main">
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
  </div>
</template>
<style lang="scss" scoped>
.mob-main{
    @apply flex flex-col flex-grow
    items-center justify-center;
  }

.title{
  font-size: 2.7rem;
  span{
    font-size: 3.5rem;
    color: $fun-wordColor;

    @apply font-bold;
  }
  @apply mb-2;
}
div:last-child{
  background-color: $bgColor-2nd;
  @apply m-2 p-4;
}
.form{
  @apply flex flex-col
  gap-4;
}
input[type='text']{
  all: unset;
  border-color: $input-borderColor;

  @apply p-2
  border border-solid;
}
</style>