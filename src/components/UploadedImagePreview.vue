<template lang="">
  <div v-show="uploadedImage" class="flex flex-col justify-around mx-auto ">
    <img :src="uploadedImage" alt="" class="mx-auto w-2xl h-80" />

    <div v-if="!classify[0]" class="flex items-center justify-center ">
      loading prediction...
      <img src="../../public/Spinner-1s-200px.gif" class="w-8 h-8" alt="" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UploadedImagePreview',
    props: {
      uploadedImage: [String, Boolean],
      classify: Array,
    },
    //
  };
</script>
