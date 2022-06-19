<template>
  <div class="addProduct container">
    <h2>{{ $t("Edit a Category") }}</h2>
    <form>

      <div class="form-group">
        <span class="title">{{ $t("Parent Category") }}</span>
        <select class="form-control" v-model="formcat.parent" required>
          <option v-for="category of categories" :key="category.id" :value="category.id">{{($i18n.locale === 'en'?category['name']:category['name_'+$i18n.locale])}}</option>
        </select>
      </div>

    <div class="row">
      <div class="col-md-6">
          <div class="form-group">

            <label>{{ $t("slug") }} *</label>
            <input
              v-model.trim="form.slug"
              @blur="$v.form.slug.$touch()"
              @change="emitFormData"
              class="form-control"
              type="text"
              placeholder=""
            />
            <div v-if="$v.form.slug.$error" class="form-error">
              <span v-if="!$v.form.slug.required" class="help is-danger">{{
                $t("slug is required")
              }}</span>
              <span v-if="!$v.form.slug.minLength" class="help is-danger">{{
                $t("slug minimum length is 6 characters")
              }}</span>
            </div>

          </div>
     </div>

     <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("name") }} *</label>
        <input
          v-model.trim="form.name"
          @blur="$v.form.name.$touch()"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
        <div v-if="$v.form.name.$error" class="form-error">
          <span v-if="!$v.form.name.required" class="help is-danger">{{
            $t("name is required")
          }}</span>
          <span v-if="!$v.form.name.minLength" class="help is-danger">{{
            $t("name minimum length is 6 characters")
          }}</span>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("name_fr") }} *</label>
        <input
          v-model.trim="form.name_fr"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>

     <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("name_ar") }} *</label>
        <input
          v-model.trim="form.name_ar"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>


      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("description") }} *</label>
        <input
          v-model.trim="form.description"
          @blur="$v.form.description.$touch()"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
        <div v-if="$v.form.description.$error" class="form-error">
          <span v-if="!$v.form.description.required" class="help is-danger">{{
            $t("description is required")
          }}</span>
          <span v-if="!$v.form.description.minLength" class="help is-danger">{{
            $t("description minimum length is 6 characters")
          }}</span>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("description_fr") }} *</label>
        <input
          v-model.trim="form.description_fr"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("description_ar") }} *</label>
        <input
          v-model.trim="form.description_ar"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>
            <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("ImageURL")}}</label>
      
      
              <section class="section">
                <div class="container">
                  <div class="">
                    <!-- CARD-ITEM -->
                    <!--    <img  width="800" height="800" src="/images/OG-image.jpg" alt=""/>
                      CARD-ITEM-END -->
                    <div 
                      id="multiple-image"
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

            <img id="imagelo" src=""  />

      </div>
      <button 
              type="button" 
              class="btn btn-primary" 
              @click="editCategory"
              :disabled="!this.isValid">
              {{ $t("Submit")}}</button>
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
    async fetch({ store, params }) {
          await store.dispatch("product/fetchgetCategoryById", params.id);
        },
        data(){
      return {
              categories:[],
              form:{
                      id : null,
                      parent : null,
                      name: null,
                      name_fr:'',
                      name_ar:'',
                      description: null,
                      description_fr: null,
                      description_ar: null,
                      captures: [],
                      slug:null
                  },
                  /**************************************** */
                    originalImg: "",
                    resizedImg: "",
                    mytext: "Click here",
                    popupText: "important to upload images",
                    primaryText: "upload image here",
                    browseText: "Browse your images here",
                    markIsPrimaryText: "need to upload images",
                    images: [],
                    imageslocal: [],

                    _setDataUrlFunc : null, 
                    _dataUrl : null, 
                    _blob : null
                /**************************************** */
      }
    },
  
    validations: {
      form: {
        slug: {
          required,
        },
        name: {
          required,
        },
        description: {
          required,
        },
      },
    },

    created(){
                this.getAllParentCategories();
                this.form.id = this.formcat.id;
                this.form.parent = this.formcat.parent;
                this.form.name = this.formcat.name; 
                this.form.name_fr = this.formcat.name_fr; 
                this.form.name_ar = this.formcat.name_ar; 
                this.form.description = this.formcat.description;
                this.form.description_fr = this.formcat.description_fr;
                this.form.description_ar = this.formcat.description_ar;
                this.form.slug = this.formcat.slug;  
                
       /*    if(this.formcat.photos[0] !== undefined && this.formcat.photos[0] !== null){
            if(this.formcat.photos[0] !== undefined && this.formcat.photos[1] !== null){
                this.form.captures = [this.formcat.photos[0], this.formcat.photos[1]];
            }else{
                this.form.captures = [this.formcat.photos[0]];
            }    
          }      */        

                this.form.captures = JSON.parse(this.formcat.photo);

    },

    computed: {
      isValid() {
        return !this.$v.$invalid;
      },
    formcat: {
        get: function () {
          return {...this.$store.state.product.category};
        },
      },
    },
  
  methods : {

  async getAllParentCategories(){
       return await  this.$store
           .dispatch("product/fetchallparentcategories")
           .then((result) => {
             if(result !== null && result !== undefined){
                if(result.data !== null && result.data !== undefined){
                    this.categories = result.data;
                    this.categories.push({"id":0,"name":"No parent"})
                }
             }
           })
         //  .catch((error) => this.$toasted.error(error, { duration: 3000 }));
       },

  async  editCategory () {
              this.form.captures = JSON.stringify(this.form.captures),
      this.$store
        .dispatch("product/updateCategory",this.form)
        .then((result) => {   
          this.$router.push("/ManageProduct/Category");
        })
       // .catch((error) => this.$toasted.error(error, { duration: 3000 }));
    },
  
 
    emitFormData() {
     // this.stepsValidation[4] = this.isValid;
     // this.$emit("stepUpdated", { data: this.form, isValid: this.isValid });
    },
    uploadImageSuccess(formData, index, fileList) {
      this.form.captures = [];
      //if (!this.imageExists(index, fileList)) {
        this.readURL(fileList[index].path,300).then((finalImg) => { this.form.captures.push(finalImg);})
     // }

      this.images = fileList;
    },
    beforeRemove(index, done, fileList) {
      var r = confirm("remove image");
      if (r == true) {
        this.imageslocal.splice(index, 1);
        this.form.captures = [];
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      this.imageExists(index, fileList);
      this.images = fileList;
      this.form.captures = [];
      for (var i = 0; i < fileList.length; i++) {
        this.readURL(fileList[i].path);
      }
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
        exits = true;
      }
      return exits;
    },
  
    emitFormData() {
     // this.stepsValidation[4] = this.isValid;
     // this.$emit("stepUpdated", { data: this.form, isValid: this.isValid });
    },
   
  },
  mounted() {

      if(this.form.captures !== null){
                this.imageslocal = [...this.form.captures];  

                for (var i = 0; i < this.imageslocal.length; i++) {
                  if (i === 0) {
                    this.images.push({
                      name: "image_" + i + ".JPG",
                      path: this.imageslocal[i],
                      highlight: 1,
                      default: 1,
                    });
                  } else {
                    this.images.push({
                      name: "image_" + i + ".JPG",
                      path: this.imageslocal[i],
                    });
                  }
                }
      }
  },
};
</script>