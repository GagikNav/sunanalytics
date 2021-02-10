import axios from 'axios';

export default {
  methods: {
    async getDogs(breed, subBreed) {
      subBreed = subBreed || undefined;
      let errors = {};
      let url;
      // Here I am Checking if there is is a sub Breed to call API accordingly
      if (subBreed) {
        url = `https://dog.ceo/api/breed/${breed}/${subBreed}/images`;
      } else {
        url = `https://dog.ceo/api/breed/${breed}/images`;
      }
      const { data } = await axios.get(url);

      try {
        data.message.map(img => this.dogsImages.push(img));
        // Image repeat Error
        errors.gotImages = 'We got Images once if you need more please refresh';
      } catch (error) {
        console.error('error', error);
      }
      this.uploadedImageValidation = { ...errors };
    },
  },
};
