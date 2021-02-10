<template>
  <div class="container mx-auto ">
    <!-- upload section -->

    <InputForm :onFileChange="onFileChange" :remove="remove" />

    <!-- Image Preview Section -->
    <UploadedImagePreview :uploadedImage="uploadedImage" :classify="classify" />

    <OperationButtons
      :getDogs="getDogs"
      :isImage="classifyBreedArr"
      :validator="uploadedImageValidation"
      :dogsImages="dogsImages"
      :classify="classify"
      :foundBreed="foundBreed"
    />
    <!-- Images Cards Section -->

    <div
      v-if="dogsImages"
      class="flex flex-wrap items-center justify-center gap-10 mx-auto mt-5 max-w-7xl"
    >
      <ViewImage
        v-for="(image, index) in dogsImages"
        :key="index"
        :imgUrl="image"
      />
    </div>
  </div>
</template>

<script>
  // Import modules

  import axios from 'axios';

  // Import Components...

  import InputForm from './InputForm';
  import UploadedImagePreview from './UploadedImagePreview';
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
      UploadedImagePreview,
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

    //  Here I'm calling api to get latest main breeds
    async created() {
      const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
      this.mainBreeds = Object.keys(data.message);
      this.fullBreeds = data.message;
    },

    methods: {
      //Mixins are here, I separated  theme to avoid log file
      // ..

      remove() {
        //this function is for resting states
        this.uploadedImage = false;
        this.dogsImages = [];
        this.foundBreed = {};
        this.uploadedFile = null;
        this.uploadedImageValidation = {};
        this.classifyBreedArr = [];
        this.classify = [];
      },
      handleScroll() {
        console.log(window.scrollY);
      },
    },
  };
</script>

<style></style>
