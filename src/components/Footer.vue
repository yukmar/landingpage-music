<template>
  <footer class="navbar">
    <nav class="navbar__nav">
      <div class="navbar__nav-left">
        <router-link :to="{name: 'join'}" class="navbar__nav-item">About Us</router-link>
        <router-link :to="{name: 'join'}" class="navbar__nav-item">Contact</router-link>
      </div>
      <div class="navbar__nav-right">
        <a href="https://twitter.com" class="navbar__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M24 4.55705C23.117 4.94905 22.168 5.21305 21.172 5.33205C22.189 4.72305 22.97 3.75805 23.337 2.60805C22.386 3.17205 21.332 3.58205 20.21 3.80305C19.313 2.84605 18.032 2.24805 16.616 2.24805C13.437 2.24805 11.101 5.21405 11.819 8.29305C7.728 8.08805 4.1 6.12805 1.671 3.14905C0.381 5.36205 1.002 8.25705 3.194 9.72305C2.388 9.69705 1.628 9.47605 0.965 9.10705C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.10605C22.505 6.41105 23.34 5.54405 24 4.55705Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>Twitter</span>
        </a>
        <a href="https://facebook.com" class="navbar__nav-item">
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M22.675 0H1.325C0.593 0 0 0.543583 0 1.21458V20.7863C0 21.4564 0.593 22 1.325 22H12.82V13.4805H9.692V10.1603H12.82V7.71192C12.82 4.87025 14.713 3.32292 17.479 3.32292C18.804 3.32292 19.942 3.41367 20.274 3.454V6.424L18.356 6.42492C16.852 6.42492 16.561 7.08033 16.561 8.041V10.1613H20.148L19.681 13.4814H16.561V22H22.677C23.407 22 24 21.4564 24 20.7854V1.21458C24 0.543583 23.407 0 22.675 0V0Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="22" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>Facebook</span>
        </a>
      </div>
    </nav>
  </footer>
</template>
<style lang="scss" scoped>
.navbar{
  @screen sm{
    @apply w-full justify-center;
  }
  &__nav{
    @apply w-full justify-around sm:justify-between sm:w-4/5;
    &-left, &-right{
      @apply flex flex-col justify-between;
      @screen sm{
        @apply flex-row;
      }
    }
    &-item{
      @apply flex flex-row gap-2;
    }
  }
}
footer{
  background-color: $bgColor-2nd;
  @apply text-base w-full;
}
</style>