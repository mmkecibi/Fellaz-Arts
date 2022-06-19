<template>
  <div>
      <form @submit.prevent="onUpload">
          <div class="form-group">
              <input type="file" name="imagesArray" multiple @change="onChange">
          </div>
          <div class="form-group">
              <button class="btn btn-success">Store</button>
          </div>
      </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
      return {
         imagesArray: null
      };
    },
    methods: {
        onChange (event) {
          this.imagesArray = event.target.files
          console.log('  this.imagesArray  :  ',  this.imagesArray)
        },
        onUpload() {
          const formData = new FormData();
          for (const i of Object.keys(this.imagesArray)) {
            formData.append('imagesArray', this.imagesArray[i])
          }
         /* axios.post('http://localhost:8888/api/multi-images-upload', formData, {
          }).then((res) => {
            console.log(res)
          })*/
        }  
    }

}
</script>

<style scoped lang="css">
.container {
  max-width: 550px;
}
</style>