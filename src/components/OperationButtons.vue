<template>
  <div class="flex flex-col items-center w-full h-36">
    <h1
      v-if="
        !validator.fileSize &&
          !validator.fileType &&
          !validator.gotImages &&
          !validator.breed &&
          isImage[0]
      "
      class="p-3 mx-auto my-5 text-xl font-bold sm:text-2xl"
    >
      Seems you have a cute {{ isImage[0] }} {{ isImage[1] }}
      {{ isImage[2] }} here! Let's see some similar pictures from the same
      breed!
    </h1>
    <h1 v-else class="mx-auto my-5 font-light text-red-700 sm:text-lg">
      {{ validator.fileSize }} <br />
      {{ validator.breed }} <br />{{ validator.fileType }}<br />
      {{ validator.fileType }}
    </h1>

    <button
      @click="getDogs"
      v-if="
        !validator.fileSize &&
          !validator.fileType &&
          !validator.breed &&
          !validator.gotImages &&
          !validator.breeds &&
          isImage[0]
      "
      class="px-5 text-lg btn btn-primary"
    >
      YES Please!
    </button>
  </div>
</template>
<script>
  export default {
    props: {
      getDogs: Function,
      validator: Object,
      isImage: Array,
    },
  };
</script>
