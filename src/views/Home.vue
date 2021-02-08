<template>
  <div>
    <ImageUpload />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ImageUpload from '@/components/ImageUpload.vue';

  export default {
    name: 'Home',
    components: {
      ImageUpload,
    },
  };
</script>
