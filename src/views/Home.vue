<template>
  <div id="main">
    <div>
      <Banner />
    </div>
    <ImageUpload />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ImageUpload from '@/components/ImageUpload.vue';
  import Banner from '@/components/Banner.vue';

  export default {
    name: 'Home',
    components: {
      ImageUpload,
      Banner,
    },
  };
</script>

<style lang="scss">
  #main {
    min-height: calc(100vh - 350px);
  }
</style>
