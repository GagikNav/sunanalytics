<template>
  <div>
    <ImageUpload />
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue';
  import ImageUpload from '@/components/ImageUpload.vue';

  export default {
    name: 'Home',
    components: {
      // HelloWorld,
      ImageUpload,
    },
  };
</script>
