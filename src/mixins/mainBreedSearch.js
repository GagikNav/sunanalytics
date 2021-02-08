export default {

  methods: {
    mainBreedSearch ()
    {
      this.classifyBreedArr.map(word =>
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
          return;
        });
      });

      
    }
  }
}

