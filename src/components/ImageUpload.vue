<template>
  <div v-if="!classify.length">loading prediction</div>
  <!-- .. -->
  <div class="container mx-auto bg-gray-100 ">
    <InputForm
      :onFileChange="onFileChange"
      :remove="remove"
      :getDogs="getDogs"
      :isImage="classifyBreedArr"
      :validator="uploadedImageValidation"
    />
  </div>
  <div v-show="uploadedImage" class="w-3/6 m-auto bg-gray-500 h-80 p-auto">
    <img :src="uploadedImage" alt="" class="h-full mx-auto" />
    <div v-if="classify[0]">
      <p>Our best prediction is</p>
      <p>{{ classify[0].className }}</p>
      <p>with {{ (classify[0].probability * 100).toFixed(1) }} %</p>
    </div>
  </div>

  <!-- Images Card Section -->
  <div
    v-if="dogsImages"
    class="container flex flex-wrap items-center justify-center gap-10 mx-auto mt-20 max-w-7xl"
  >
    <ViewImage
      v-for="(image, index) in dogsImages"
      :key="index"
      :imgUrl="image"
    />
  </div>
</template>

<script>
  // Import Components...

  import InputForm from './InputForm';
  import ViewImage from './ViewImage';
  // Import Mixins...
  import getFile from '../mixins/getFile';
  import mainBreedSearch from '../mixins/mainBreedSearch';
  import getDogs from '../mixins/getDogs';
  import createImage from '../mixins/createImage';

  export default {
    mixins: [getFile, mainBreedSearch, createImage, getDogs],
    components: {
      ViewImage,
      InputForm,
    },

    data() {
      return {
        uploadedImageValidation: {}, // I created this Object for multipurpose validation
        uploadedImage: '', // Coming from createImage mixin
        uploadedFile: null,
        classify: [],
        classifyBreedArr: [], //returned array from TensorFlow
        loading: false,
        dogsImages: [],
        mainBreeds: [], //created for search in main breed
        fullBreeds: {}, // this full breeds array getting on the created hook
        foundBreed: {},
      };
    },
    beforeMount() {
      this.remove();
    },
    methods: {
      //Mixins are here, I separated  theme to avoid log file
      // ..

      remove() {
        this.uploadedImage = false;
        this.dogsImages = [];
        this.foundBreed = {};
        this.uploadedFile = null;
        this.uploadedImageValidation = {};
        this.classifyBreedArr = [];
      },
    },
  };
</script>

<style></style>
