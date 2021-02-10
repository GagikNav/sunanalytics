export default {
  methods: {
    getExtension(filename) {
      //File type validation function
      let parts = filename.split('.');
      return parts[parts.length - 1];
    },

    isImage(filename) {
      // File size validation function
      let ext = this.getExtension(filename);
      switch (ext.toLowerCase()) {
        case 'jpg':
        case 'bmp':
        case 'png':
        case 'jpeg':
          return true;
      }
      return false;
    },

    // ..
    // main file uploader function
    async onFileChange(e) {
      let errors = {};
      this.loading = true;
      this.uploadedFile = e.target.files || e.dataTransfer.files;

      // Here I am checking for validations
      // and creating error object
      if (this.uploadedFile[0].size > 1200000) {
        errors.fileSize = 'Please select a file smaller than 1 MB';
      }

      if (!this.isImage(this.uploadedFile[0].name)) {
        errors.fileType =
          'Please select correct image type (jpeg, png, bmp, jpg)';
      }

      this.uploadedImageValidation = {
        ...this.uploadedImageValidation,
        ...errors,
      };
      if (!errors.fileType && !errors.fileSize) {
        this.createImage(this.uploadedFile[0]);
      }
    },
  },
};
