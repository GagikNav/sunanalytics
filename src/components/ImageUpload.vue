<template>
  <div class="container p-2 mx-auto bg-blue-400">
    <label v-show="!uploadedImage"
      >Select image
      <input type="file" @change="onFileChange" />
    </label>
    <div class="flex p-5">
      <img
        v-show="uploadedImage"
        class="max-w-xs bg-gray-500 "
        src="../assets/Spinner-1s-200px.gif"
        alt=""
      />
      <div
        v-if="img_name"
        v-show="uploadedImage"
        class="w-3/6 m-auto bg-gray-100 p-auto"
      >
        <div v-if="classify[0]">
          {{ classifyBreedArr }}
        </div>
        <div v-if="!classify.length">
          loading prediction
        </div>
        <button @click="remove" class="btn">close</button>
      </div>
    </div>
  </div>

  <button @click="getDogs" class="btn btn-blue">Get images</button>
  <button @click="mainBreedSearch" class="btn btn-blue">Breed Search</button>

  <div v-if="dogsImages" class="flex flex-wrap justify-center">
    <img
      class="object-scale-down w-2/5 m-10 max-h-96"
      v-for="(image, index) in dogsImages"
      :key="index"
      :src="image"
      alt=""
    />
  </div>
</template>

<script>
      import * as mobilenet from '@tensorflow-models/mobilenet';
      import axios from 'axios';


      export default {
        data() {
          return {
            uploadedImage: false,
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
        computed: {},
       async  beforeMount() {
            const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
            // getting main breeds
            this.mainBreeds = Object.keys(data.message);
            this.fullBreeds = data.message;
        // todo: temporary
            const pics = await axios.get(`https://dog.ceo/api/breed/corgi/images`)
            this.dogsImages = pics.data.message
        },
        created() {
          let options = {

      rootMargin: '-100px',
      threshold: 0.5
    }

    let observer = new IntersectionObserver(callback, options);

  const callBack = (entries , observer)=>  {
  entries.forEach(entry=>{
    console.log(entry);
  })
  }

        },

        methods: {
          // TODO if there is image API calls  should be disabled hidden!!
          mainBreedSearch() {
            //
            this.classifyBreedArr.map(word => {
              this.mainBreeds.map(breed => {
                if (breed === word) {
                  this.foundBreed.mainBreed = breed ;
                  if(this.fullBreeds.[breed].length > 0){
                    this.fullBreeds.[breed].map(subBreed=> this.classifyBreedArr.map(subWord=> subWord === subBreed ? this.foundBreed.subBreed = subBreed : ''))
                  }
                  return

                  }
                return;
              });
            });
          },

          onFileChange(e) {
            this.loading = true;
            const files = e.target.files || e.dataTransfer.files;
            this.createImage(files[0]);
            // Separate by extension (*. Is one assumption)
            const imgNameExe = files[0].name.split('.');

            // Before extension
            let imgName = imgNameExe[0];

            // Back from extension
            const imgExe = imgNameExe[1];

            //Max Bytes to display (10 full-width characters, 20 half-width characters)
            const maxBytes = 20;
            const imgNameBytes = encodeURIComponent(imgName).replace(/%../g, 'x')
              .length;

            //Comparison of image file and Max Byte number
            if (imgNameBytes > maxBytes) {
              const zenkaku = imgNameBytes - imgName.length;
              if (zenkaku > 0) {
                imgName = imgName.slice(0, maxBytes / 2 - imgName.length) + '..';
              } else {
                imgName = imgName.slice(0, maxBytes - imgNameBytes) + '..';
              }
            }

            // Concatenation of short cut and. And extension string
            imgName = imgName + '.' + imgExe;
            this.img_name = imgName;
          },
          // Show uploaded images
          createImage(file) {
            this.classify = [];
            let img = new Image();
            img.crossOrigin = 'anonymous';

            const reader = new FileReader();
            reader.onload = async e => {
              this.uploadedImage = e.target.result;
              const version = 1;
              const alpha = 0.75;
              img.src = e.target.result;
              const model = await mobilenet.load({ version, alpha });
              const prediction = await model.classify(img);
              this.loading = false;
              this.classify = prediction;
              // Finding highest probability match and put the string into
              // the "classifyBreedArr" array
              //
              this.classifyBreedArr = this.classify[0].className
                .toLowerCase()
                .split(',')[0]
                .split(' ');
            };
            reader.readAsDataURL(file);
          },

          // Get dog method

          async getDogs() {
            // Here I am Checking if there is is a sub Breed to call API accordingly
            const { data } = await axios.get(
              this.foundBreed.subBreed ? `https://dog.ceo/api/breed/${this.foundBreed.mainBreed}/${this.foundBreed.subBreed}/images` : `https://dog.ceo/api/breed/${this.foundBreed.mainBreed}/images`
            );
            try {
              data.message.map(img => this.dogsImages.push(img));
            } catch (error) {
              console.error('error', error);
            }
          },
          remove() {
            this.uploadedImage = false;
            this.dogsImages = [];
            this.foundBreed = {};
          },
        },
      };
</script>

<style></style>
