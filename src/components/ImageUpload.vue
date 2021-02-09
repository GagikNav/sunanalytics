<template>
  <div class="container mx-auto ">
    <!-- Main picture  -->

    <!-- upload section -->

    <InputForm :onFileChange="onFileChange" :remove="remove" />

    <!-- Image Preview Section -->
    <div v-show="uploadedImage" class="flex flex-col justify-around mx-auto ">
      <img :src="uploadedImage" alt="" class="mx-auto w-2xl h-80" />

      <div v-if="!classify[0]" class="flex items-center justify-center ">
        loading prediction...
        <img
          src="../../public/Spinner-1s-200px.gif"
          style="height: 70px; width: 70px "
          alt=""
        />
      </div>
    </div>
  </div>

  <OperationButtons
    :getDogs="getDogs"
    :isImage="classifyBreedArr"
    :validator="uploadedImageValidation"
  />
  <!-- Images Card Section -->
  <div
    v-if="dogsImages"
    class="flex flex-wrap items-center justify-center gap-10 mx-auto mt-20 max-w-7xl"
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
  import OperationButtons from './OperationButtons';
  // Import Mixins...
  import getFile from '../mixins/getFile';
  import mainBreedSearch from '../mixins/mainBreedSearch';
  import getDogs from '../mixins/getDogs';
  import createImage from '../mixins/createImage';

  export default {
    name: 'ImageUpload',
    mixins: [getFile, mainBreedSearch, createImage, getDogs],
    components: {
      ViewImage,
      InputForm,
      OperationButtons,
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
        this.classify = [];
      },
    },
  };
</script>

<style></style>
