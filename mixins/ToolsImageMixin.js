export default {
    mounted() {
        
    },
    computed: {
    },
    watch: {
          },
    methods: {
        resizeImage  ({ imagedatauri, maxSize })  {
            const reader = new FileReader();
            const image = new Image();
            const canvas = document.createElement('canvas');
          
            const resize = () => {
              let { width, height } = image;
          
              if (width > height) {
                if (width > maxSize) {
                  height *= maxSize / width;
                  width = maxSize;
                }
              } else if (height > maxSize) {
                width *= maxSize / height;
                height = maxSize;
              }
          
              canvas.width = width;
              canvas.height = height;
              canvas.getContext('2d').drawImage(image, 0, 0, width, height);
              const dataUrl = canvas.toDataURL('image/jpeg');
          
              return dataUrl //dataURItoBlob(dataUrl);
            };
          
            return new Promise((ok, no) => {
                image.onload = () => ok(resize());
                image.src = imagedatauri ;
            });
          },
          readURL(imagedatauri,maxSize) {

            this.originalImg = imagedatauri;
            // START: preview resized
           return  this.resizeImage({ imagedatauri: imagedatauri, maxSize: maxSize }).then((resizedImage) => {
      
              this.resizedImg = resizedImage; //URL.createObjectURL(resizedImage);
              return this.resizedImg;
            }).catch((err) => {
              console.error(err);
            });
            // END: preview resized
          },
    }
}
  