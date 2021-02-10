<template lang="">
  <div
    class="flex flex-col items-center justify-center max-w-3xl mx-auto my-10 sm:flex-row sm:justify-center choose-file"
  >
    <label
      class="w-full mb-10 text-2xl font-bold text-center text-gray-800 sm:text-3xl sm:m-0 max-h-150 sm:text-left"
      for="name"
      >Upload your lovely dog's picture...
    </label>
    <div class="w-44">
      <button
        @click="triggerUpload"
        class="w-full text-lg font-semibold text-center btn btn-primary max-h-150"
      >
        Browse
      </button>
      <input
        ref="input"
        class="hidden"
        type="file"
        name="file"
        accept="image/jpeg, image/png"
        @change="onFileChange"
      />
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      triggerUpload() {
        this.remove();
        this.$refs.input.click();
      },
    },
    props: {
      remove: Function,
      onFileChange: Function,
    },
  };
</script>
<style lang=""></style>
