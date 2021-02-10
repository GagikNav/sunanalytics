<template>
  <div id="main" class="flex flex-col items-center justify-center w-full ">
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
  import ViewImage from '@/components/ViewImage.vue';
  import getDogs from '../mixins/getDogs';
  export default {
    name: 'FilteredDogs',
    mixins: [getDogs],
    data() {
      return {
        //
        foundBreed: {},
        dogsImages: [],
      };
    },
    watch: {
      breed() {
        this.dogsImages = [];
        console.log(typeof this.breed);
        this.foundBreed.mainBreed = this.breed;
        console.log(this.foundBreed.mainBreed);
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        this.getDogs('pug');
      },
    },
    created() {},

    props: {
      breed: String,
    },
    components: {
      ViewImage,
    },
    methods: {},
  };
</script>
