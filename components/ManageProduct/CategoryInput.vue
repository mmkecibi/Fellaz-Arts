<template>
    <div >
      <!--  Find <input type="search" class="input" v-model="search" @input="searchCategory"> -->
        <category-list @emitcheckedcategoriestoinput="checkedCategorieslist" @emitdeleteCat="deletecat" :items="categories"/>
       <transition name="fade">
           <div v-show="button">
               <p>
                   <label>{{ $t("NEW CATEGORY") }}</label>
                   <label>{{ $t("name") }} *</label>
                   <input type="text" class="input" v-model="category.name">
                   <label>{{ $t("name_fr") }} *</label>
                   <input type="text" class="input" v-model="category.name_fr">
                   <label>{{ $t("name_ar") }} *</label>
                   <input type="text" class="input" v-model="category.name_ar">
               </p>
               <p>
                   <label>{{ $t("Parent category") }}</label>
                   <select v-model="category.parent" id="" class="select">
                       <option disabled selected>--{{ $t("Select parent category") }} --</option>
                       <option v-for="category of categories" :key="category.id" :value="category.id">{{($i18n.locale === 'en'?category['name']:category['name_'+$i18n.locale])}}</option>
                   </select>
               </p>




      <div class="col-md-6">
      <div class="form-group">
        <label>{{$t("ImageURL")}}</label>

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
       </transition>
       <div class="flex justify-content-between">
             <button v-if="button" class="button bg-success algn-self-start addnewcategory" @click="storeCategory">{{ $t("Save") }}</button>
             <button v-else class="button bg-primary algn-self-start addnewcategory" @click="createCategory">{{ $t("Add new category") }}</button>
             <button class="button bg-secondary algn-self-end done" @click="setcloseCategory">{{ $t("Done") }}</button>
       </div>
     </div>
</template>
<script>
/************************************************************* */
import ToolsImageMixin from "~/mixins/ToolsImageMixin";
/************************************************************* */
    import CategoryList from './CategoryList.vue'
      export default {
          mixins: [ToolsImageMixin],
          name:'CategoryInput',
          data() {
            return {
              all:[],
              search:'',
              button:false,
              close:false,
              category:{
                  name:'',
                  name_fr:'',
                  name_ar:'',
                  parent:'',
                  captures: [],
              },
              checkedCategories:[],
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
            };
          },
        components:{
          CategoryList
        },
          props: ['modelValue','datalist'],
          computed: {
          categories(){
              if(this.search == ''){
                  this.all = this.datalist   
              }
              return this.all
          }
          },
          methods: {
            searchCategory(){
                      this.all = this.datalist
                      if(this.search.length >= 1){
                          this.all = this.all.filter(item => {
                              return item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
                          })   
                      }
            },
            
            createCategory(){
                this.button = true
            },
            storeCategory(){
              this.button = false
              const categoryObj = {
                  name: this.category.name,
                  name_fr: this.category.name_fr,
                  name_ar: this.category.name_ar,
                  slug: this.category.name,
                  description: this.category.name,
                  description_fr: this.category.name_fr,
                  description_ar: this.category.name_ar,
                  parent: ((this.category.parent !== "" )? this.category.parent : 0)
              }
              categoryObj.captures=JSON.stringify(this.category.captures),
              this.$emit('stepUpdated', {categoryObj})
              this.category.name = ''
              this.category.parent = ''
            },
            setcloseCategory(){
                  this.button = false
                  this.$emit('setCloseCategories', false);  
            },
            checkedCategorieslist (checkedCategories){
              this.$emit('setcheckedcategories', checkedCategories)
            },
            deletecat (id){
              this.$emit('setdeletecat', id)
            },

            // ******************************* Image capture ************************
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
                this.category.captures.push(finalImg);
              });

              this.emitFormData();
            },
            beforeRemove(index, done, fileList) {
              var r = confirm("remove image");
              if (r == true) {
                this.category.captures.splice(index, 1);
                this.imagesNames.splice(index, 1);
                done();
              } else {
              }
              this.emitFormData();
            },
            editImage(formData, index, fileList) {
              this.imageExists(index, fileList);

              this.images = fileList;
              this.category.captures = [];

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
            /****************** Image Capture *********************/
          },
      }
</script>
