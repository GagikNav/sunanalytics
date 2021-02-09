<template>
  <figure
    v-LazyLoad
    class="w-full overflow-hidden rounded-lg h-80 sm:w-3/12 md:h-full"
  >
    <img :data-url="imgUrl" alt="dog image" class="object-cover w-full h-80" />
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
