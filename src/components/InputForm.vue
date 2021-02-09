<template lang="">
  <div class="flex flex-col items-start justify-start">
    <label for="name" class="mb-8 text-lg font-bold text-gray-800"
      >Select Your Gog Image</label
    >
    <input
      class="w-full h-12 bg-gray-200"
      type="file"
      name="file"
      accept="image/jpeg, image/png"
      @change="onFileChange"
    />
    <div class="flex items-center justify-center w-2/4 gap-10 bg-gray-600 h-36">
      <button @click="remove" class="btn btn-gray">close</button>

      <button
        @click="getDogs"
        v-if="
          !validator.fileSize &&
            !validator.fileType &&
            !validator.breed &&
            !validator.gotImages &&
            isImage[0]
        "
        class="btn btn-blue"
      >
        Get images
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      onFileChange: Function,
      remove: Function,
      getDogs: Function,
      validator: Object,
      isImage: Array,
    },
  };
</script>
<style lang=""></style>
