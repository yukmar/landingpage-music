<template>
  <Header />
  <Content />
</template>

<script>
import Header from './components/mobile/Header.vue';
import Content from './components/mobile/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>