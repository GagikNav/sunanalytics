<template>
  <figure
    v-LazyLoad
    class="w-full overflow-hidden rounded-lg shadow-md h-80 xl:w-1/4 sm:w-2/6 md:h-full"
  >
    <img
      :data-url="imgUrl"
      src="../../public/Spinner-1s-200px.gif"
      alt="Dog Image"
      class="object-cover w-full h-80"
      loading="lazy"
    />
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
