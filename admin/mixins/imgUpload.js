export default {
  data() {
    return {
      images: {},
      image: [],
    }
  },
  computed: {

  },
  methods: {
    imagesAdd(e) {
      this.uploadedFiles = []
      this.product.photo = ''
      // debugger
      var files = e.target.files || e.dataTransfer.files;

      this.images = [];
      this.image = [];
      Array.prototype.push.apply(this.images, files);
      if (!this.images.length)
        return;

      this.createImage(this.images);

    },

    createImage(file) {
        for (var i = 0; i < file.length; i++) {
          if (/\.(jpg|webp|jpe?g|png|gif)$/i.test(file[i].name)) {
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
              vm.image.push(e.target.result);
              // console.log(vm.image);
            };
            reader.readAsDataURL(file[i]);
          }
        }
    },
    removeImage(key) {
      this.image.splice(key, 1);
      this.images.splice(key, 1);
      this.$refs.prodImagesInput.setFiles(this.images)

      if (!this.image.length) {
        this.$refs.prodImagesInput.setFiles()
      }
    },
  }
}
