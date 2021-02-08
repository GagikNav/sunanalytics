<template>
  <div class="container p-2 mx-auto bg-blue-400">
    <label v-show="!uploadedImage"
      >Select image
      <input type="file" @change="onFileChange" />
    </label>
    <div class="flex p-5">
      <img v-show="uploadedImage" :src="uploadedImage" alt="" />
      <div v-show="uploadedImage" class="w-3/6 m-auto bg-gray-100 p-auto">
        <div v-if="classify[0]">
          <p>Our best prediction is</p>
          <p>{{ classify[0].className }}</p>
          <p>with {{ (classify[0].probability * 100).toFixed(1) }} %</p>
        </div>
        <div v-if="!classify.length">loading prediction</div>
        <button @click="remove" class="btn">close</button>
      </div>
    </div>
  </div>

  <button @click="getDogs" class="btn btn-blue">Get images</button>

  <div v-if="dogsImages" class="flex flex-wrap justify-center">
    <ViewImage
      class="object-scale-down w-2/5 m-10 max-h-96"
      v-for="(image, index) in dogsImages"
      :key="index"
      :imgUrl="image"
      alt=""
    />
  </div>
</template>

<script>
  import ViewImage from './ViewImage';
  import getFile from '../mixins/getFile';
  import mainBreedSearch from '../mixins/mainBreedSearch';
  import getDogs from '../mixins/getDogs';
  import createImage from '../mixins/createImage';

  export default {
    mixins: [getFile, mainBreedSearch, createImage, getDogs],
    components: {
      ViewImage,
    },

    data() {
      return {
        observer: null,
        uploadedImage: true,
        img_name: '',
        classify: [],
        classifyBreedArr: [],
        loading: false,
        dogsImages: [],
        mainBreeds: [],
        fullBreeds: {},
        foundBreed: {},
      };
    },
    methods: {
      // TODO if there is image API calls  should be disabled hidden!!
      //mainBreedSearch goes here
      // ..

      // Show uploaded images

      // Get dog method

      remove() {
        this.uploadedImage = false;
        this.dogsImages = [];
        this.foundBreed = {};
      },
    },
  };
</script>

<style></style>
