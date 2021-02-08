<template>
  <figure v-LazyLoad>
    <img :data-url="imgUrl" alt="dog image" />
  </figure>
</template>
<script>
  import LazyLoad from '../directives/LazyLoad';
  export default {
    data() {
      return {
        showLoader: true,
      };
    },
    props: {
      imgUrl: String,
    },
    directives: {
      LazyLoad,
    },
  };
</script>
<style lang="css"></style>
