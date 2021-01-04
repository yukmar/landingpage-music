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
    // flex-grow: 1;
    // display: flex;
    // flex-direction: column;
    
    // align-items: center;
    // justify-content: center;
    @apply flex flex-col flex-grow
    items-center justify-center;
  }

.title{
  font-size: 2.7rem;
  span{
    font-size: 3.5rem;
    color: $fun-wordColor;
    // font-weight: bold;
    @apply font-bold;
  }
  @apply mb-2;
}
div:last-child{
  background-color: $bgColor-2nd;
  // margin: .5rem;
  // padding: 1rem;
  @apply m-2 p-4;
}
.form{
  // display: flex;
  // flex-direction: column;
  // gap: 1rem;

  @apply flex flex-col
  gap-4;
}
input[type='text']{
  all: unset;
  border-color: $input-borderColor;
  // border: 1px solid $input-borderColor;
  // padding: .5rem .5rem;

  @apply p-2
  border border-solid;
}
</style>