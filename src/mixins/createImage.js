import * as mobilenet from '@tensorflow-models/mobilenet';

export default {
  methods: {
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
  },
};
