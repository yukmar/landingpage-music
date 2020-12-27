<template>
  <Header />
  <Content />
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>