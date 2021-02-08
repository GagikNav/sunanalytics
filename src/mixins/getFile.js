export default {
  methods: {
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
  },
};
