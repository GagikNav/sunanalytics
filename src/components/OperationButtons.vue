<template>
  <div class="flex flex-col items-center w-full h-36">
    <div
      v-if="dogsImages.length > 0"
      class="p-3 mx-auto my-5 text-xl font-bold sm:text-2xl"
    >
      <p>We found {{ dogsImages.length }} matches in our database!</p>
    </div>
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
      We have a {{ (classify[0].probability * 100).toFixed(0) }}% match for your
      cute
      <span class="capitalize text-primary"
        >{{ isImage[0] }} {{ isImage[1] }} {{ isImage[2] }}</span
      >! Let's see some similar pictures from this breed!
    </h1>
    <h1 v-else class="mx-auto my-5 font-light text-red-700 sm:text-lg">
      {{ validator.fileSize }} <br />
      {{ validator.breed }} <br />{{ validator.fileType }}<br />
    </h1>

    <button
      @click="getDogs(foundBreed.mainBreed, foundBreed.subBreed)"
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
      classify: Array,
      getDogs: Function,
      validator: Object,
      isImage: Array,
      dogsImages: Array,
      foundBreed: Object,
    },
  };
</script>
