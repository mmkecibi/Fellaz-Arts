<template>
  <div class="addProduct container">
    <h2>Add new Slider</h2>

    <form>      
    <div class="row">

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("title") }} *</label>
        <input
          v-model.trim="form.title"
          @blur="$v.form.title.$touch()"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
        <div v-if="$v.form.title.$error" class="form-error">
          <span v-if="!$v.form.title.required" class="help is-danger">{{
            $t("code is required")
          }}</span>
          <span v-if="!$v.form.title.minLength" class="help is-danger">{{
            $t("code minimum length is 6 characters")
          }}</span>
        </div>

      </div>
     </div>


      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("message") }} *</label>
          <v-textarea
              v-model.trim="form.message"
              @blur="$v.form.message.$touch()"
              @change="emitFormData"
              rows="2"
          ></v-textarea>
        <div v-if="$v.form.message.$error" class="form-error">
          <span v-if="!$v.form.message.required" class="help is-danger">{{
            $t("message is required")
          }}</span>
          <span v-if="!$v.form.message.minLength" class="help is-danger">{{
            $t("message minimum length is 6 characters")
          }}</span>
        </div>
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("photo") }}</label>


        <section class="section">
          <div class="container">
            <div class="">
              <!-- CARD-ITEM -->
              <!--    <img  width="800" height="800" src="/images/OG-image.jpg" alt=""/>
                CARD-ITEM-END -->
                <div
                id="my-strictly-unique-vue-upload-multiple-image"
                style="display: flex; justify-content: center"
              >
              <client-only>
                <vue-upload-multiple-image
                  :dragText="mytext"
                  :dropText="mytext"
                  :popupText="popupText"
                  :primaryText="primaryText"
                  :browseText="browseText"
                  :markIsPrimaryText="markIsPrimaryText"
                  @upload-success="uploadImageSuccess"
                  @before-remove="beforeRemove"
                  @edit-image="editImage"
                  :data-images="images"
                  idUpload="myIdUpload"
                  editUpload="myIdEdit"
                  :maxImage="1"
                  :maxHeightImage="50"
                  :maxWidthImage="50"
                  :maxSizeImage="1000000"
                  :multiple="true"
                  :showEdit="false"
                ></vue-upload-multiple-image>
              </client-only>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
      </div>
            <button 
                    type="button" 
                    class="btn btn-primary" 
                    @click="addSlider"
                    :disabled="!this.isValid">
                    Submit
            </button>
  </form>
  </div>
</template>

<script>

import {
  required,
  email,
  minLength,
  url,
  sameAs,
  between,
} from "vuelidate/lib/validators";
/************************************************************* */
import ToolsImageMixin from "~/mixins/ToolsImageMixin";
/************************************************************* */
export default {
  mixins: [ToolsImageMixin],
  data(){
    return {
    categories:[],
    /**************************************** */
    originalImg: "",
    resizedImg: "",
    mytext: "Click here",
    popupText: "important to upload images",
    primaryText: "upload image here",
    browseText: "Browse your images here",
    markIsPrimaryText: "need to upload images",
    images: [],
    imagedis: null,
    imagesNames: [],
    /*************************************** */
    form:{
      title : null, 
      message : null,
      captures: [],
    },
    }
  },
  validations: {
    form: {
      title: {
        required,
      },
      message: {
        required,
      },
    },
  },
  computed: {
    isValid() {
      return !this.$v.$invalid && this.form.captures.length === 1;
    },
  },
  created(){
  },

  methods : {
 
    addSlider : async function() {
      if(this.isValid){
      this.form.captures=JSON.stringify(this.form.captures),
      this.$store
        .dispatch("product/createSlider",this.form)
        .then((result) => {   
          this.$router.push("/ManageProduct/Slider");
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
      }
    },


    emitFormData() {
     // this.stepsValidation[4] = this.isValid;
     // this.$emit("stepUpdated", { data: this.form, isValid: this.isValid });
    },

    uploadImageSuccess(formData, index, fileList) {
      this.imageExists(index, fileList);
      this.images = fileList;
      this.imagesNames = [];
      this.imagesNames.push(fileList[index].name);
      this.readURL(fileList[index].path, 250).then((finalImg) => {
        this.form.captures.push(finalImg);
      });

      this.emitFormData();
    },
    beforeRemove(index, done, fileList) {
      var r = confirm("remove image");
      if (r == true) {
        this.form.captures.splice(index, 1);
        this.imagesNames.splice(index, 1);
        done();
      } else {
      }
      this.emitFormData();
    },
    editImage(formData, index, fileList) {
      this.imageExists(index, fileList);

      this.images = fileList;
      this.form.captures = [];

      for (var i = 0; i < fileList.length; i++) {
        // if (!this.imagesNames.includes(fileList[i].name)) {
        this.imagesNames.push(fileList[i].name);
        this.readURL(fileList[i].path);
        // }
      }
      this.emitFormData();
    },
    imageExists(index, fileList) {
      let exits = false;
      let name = fileList[index].name;
      for (var i = 0; i < fileList.length; i++) {
        if (i !== index) {
          if (name === fileList[i].name) exits = true;
        }
      }
      if (exits) {
        fileList.splice(index, 1);
      }
    },
  }
}
</script>