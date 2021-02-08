import axios from 'axios';

export default {
  async created() {
    const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
    this.mainBreeds = Object.keys(data.message);
    this.fullBreeds = data.message;
  },

  methods: {
    async getDogs() {
      await this.mainBreedSearch();
      console.log(this.foundBreed);
      // Here I am Checking if there is is a sub Breed to call API accordingly
      const { data } = await axios.get(
        this.foundBreed.subBreed
          ? `https://dog.ceo/api/breed/${this.foundBreed.mainBreed}/${this.foundBreed.subBreed}/images`
          : `https://dog.ceo/api/breed/${this.foundBreed.mainBreed}/images`,
      );

      try {
        data.message.map(img => this.dogsImages.push(img));
      } catch (error) {
        console.error('error', error);
      }
    },
  },
};