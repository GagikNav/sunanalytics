<template>
  <div id="main" class="flex flex-col items-center justify-center w-full ">
    <div
      v-if="dogsImages.length > 0"
      class="p-3 mx-auto my-5 text-xl font-bold sm:text-2xl"
    >
      <p>
        We found {{ dogsImages.length }} matches for
        <span class="capitalize text-primary"> {{ breed }}</span> in our
        database!
      </p>
    </div>

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
      breed: {
        handler: 'getFilteredImages',
        immediate: true,
      },
    },

    props: {
      breed: String,
    },
    components: {
      ViewImage,
    },
    methods: {
      async getFilteredImages() {
        this.dogsImages = [];
        this.foundBreed.mainBreed = this.breed;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        this.getDogs(this.foundBreed.mainBreed);
      },
    },
  };
</script>
