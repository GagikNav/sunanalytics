export default {

  methods: {

    //  This is main search and validation function
    // I am checking if the breeds and sub breeds are matching

    mainBreedSearch ()
    {
      let errors = {}
      this.classifyBreedArr.map(word => //looping through founded words 
      {
        this.mainBreeds.map(breed =>
        {
          if (breed === word)
          {
            this.foundBreed.mainBreed = breed;
            if (this.fullBreeds.[ breed ].length > 0)
            {
              this.fullBreeds.[ breed ].map(subBreed => this.classifyBreedArr.map(subWord => subWord === subBreed ? this.foundBreed.subBreed = subBreed : ''));
            }
            return;

          }
          errors.breed = 'Sorry we can not find your Dog'

          return;
        });
      });

      this.uploadedImageValidation = { ...errors };
    }
  }
}

