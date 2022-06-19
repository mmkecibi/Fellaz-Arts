<template>
  <div class="addProduct container">
    <span class="title">Add Product</span>

      <div class="credit-card">

      <div class="form-header">
        <h4 class="title">Image detail</h4>
      </div>

      <div class="form-group form-body">

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



 <div v-if="isdisplaycolor" class="col-md-8">
  <div class="col-md-6">
 <div class="clolorcontaner">
   <label>{{ $t("color") }}</label>
     <i id="info-icon-color" class="info-icon"></i>
  </div>
  <div id="color-picker" 
       class="clolorcontanerprice" >
            <color-picker-select :color-options="colors" label="Select Color..." empty-option="None" input-id="color" v-model="selectedColorHex"></color-picker-select>
        </div>
        
        <div class="clolorcontanerprice">

            <input
            v-model.trim="color_extraprice"
            class="form-control-extra-color1"
            type="number"
            placeholder="extra price"
            />
            <p></p>
            <button 
                    type="button" 
                    class="btn btn-primary" 
                    @click="addselectedattr('color')"
                    >
                    Add
            </button>
        </div>
 </div>

    </div>

                        <div v-if="isdisplaypic">
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
                                        :maxImage="2"
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
          </div>
       
        </section>
      </div>
            <button v-if="isdisplaypicconfirm"
                    type="button" 
                    class="btn btn-primary" 
                    @click="addProductPhotosByColor"
                    :disabled="!isconfirm">
                    Confirm
            </button>
    </div>

          <div class="attributresultContainer">
              <ul>
                <li class="attributresult"
                  v-for="(color, index) in selectedcolors">
                  <div class="extraprops"  >
                        <span class="circle" :style="{color: color.color}"></span>
                        <p class="close" @click="deletecolor(index)"> X </p>
                        <p  style="font-size: 12px;">{{ color.name }}</p> <span >{{ color.extraprice  | dollar }} </span>

                        <ul>
                                <div v-if="color.captures !== undefined">
                                <li class="attributresultpic"
                                          v-for="(pic, index) in color.captures"  >
                                                <img :src="pic" width="48" length="48" />
                                </li>
                                </div>                 
                        </ul> </div>
                </li>
              </ul>
            </div> 

            <button 
                    type="button" 
                    class="btn btn-primary  donebtn" 
                    @click="DoneAddProd">
                    Done
            </button>
  </div>

</template>

<script>
import ColorPickerSelect from '~/components/ColorPickerSelect';
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
import ToolsjqueryMixin from "~/mixins/ToolsjqueryMixin";
export default {
  mixins: [ToolsjqueryMixin, ToolsImageMixin],

  data(){
    return {
    isdisplaypic:false,
    isdisplaycolor:true,
    isdisplaypicconfirm:false,
    isconfirm:false,
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
    color_extraprice:null,
    currentselectedcolors:0,
    selectedcolors:[],
   // productphotosbycolor:[],
  //  productphotosbycolorid: 0,
    form:{
            id:0,
            captures: [],
            name:"", 
            color: "", 
            productid : 0,
            extraprice : 0.0, 
         },
    selectedColorHex: '',

colors:[

	{
	  "hex": "#FFFFFF",
	  "name": "White"
	},
	{
	  "hex": "#000000",
	  "name": "Black"
	},
	{
	  "hex": "#FF0000",
	  "name": "Red"
	},
	{
	  "hex": "#00FF00",
	  "name": "Lime"
	},
	{
	  "hex": "#0000FF",
	  "name": "Blue"
	},
	{
	  "hex": "#FFFF00",
	  "name": "Yellow"
	},
	{
	  "hex": "#00FFFF",
	  "name": "Cyan/Aqua"
	},
	{
	  "hex": "#FF00FF",
	  "name": "Magenta/Fuchsia"
   },
   {
	  "hex": "#C0C0C0",
	  "name": "Silver"
   },
   {
	  "hex": "#808080",
	  "name": "Gray"
   },
   {
	  "hex": "#800000",
	  "name": "Maroon"
   },
   {
	  "hex": "#808000",
	  "name": "OLive"
   },
   {
	  "hex": "#008000",
	  "name": "Green"
   },
   {
	  "hex": "#800080",
	  "name": "Purple"
   },
   {
	  "hex": "#008080",
	  "name": "Teal"
   },
   {
	  "hex": "#000080",
	  "name": "Navy"
   },
  {
	  "hex": "#FFA07A",
	  "name": "Light Salmon"
  },
	{
		"hex": "#CD5C5C",
	  "name": "Indian Red"
  },
	{
		"hex": "#DC143C",
	  "name": "Crimson"
  },
	{
		"hex": "#20B2AA",
	  "name": "Light Sea Green"
  },
	{
		"hex": "#008B8B",
		"name": "Dark Cyan"
	},
	{
	 "hex": "#4682B4",
	  "name": "Steel Blue"
	}
],
    }
  },
 validations: {
    form: {
      name: {
        required,
      },
      description: {
        required,
      },
      review: {
        required,
      },
      code: {
        required,
      },
      price : {
        required,
      },
      code: {
        required,
      },
      prixdachat:{
        required,
      }, 
      specialprix: {
        required,
      }, 
      isspecialprix: {
        required,
      }, 
      stock: {
        required,
      },


    },
  },
  components : {ColorPickerSelect}, 
  computed: {
    isValid() {
      return !this.$v.$invalid && this.form.captures.length === 2;
    },
    realPrice(){
      // this.price = this.price - this.specialprix;
     // return this.price
    },
    createdproductid() {
          return  this.$store.state.product.createdproductid;
        }
  },
    created(){
    },

  methods : {
     DoneAddProd(){
           this.$router.push("/ManageProduct/Product");
    },
    addProductPhotosByColor : async function() {

        try{

            if(JSON.stringify(this.form.captures).length > 2){

                this.form.captures = JSON.stringify(this.form.captures)

                this.form.name = this.currentselectedcolors.name 
                this.form.color = this.currentselectedcolors.color 
                this.form.productid = this.createdproductid
                this.form.extraprice = this.currentselectedcolors.color_extraprice 

                var trouve = false;
                this.selectedcolors.forEach(el => {
                    if(el.color === this.selectedColorHex){
                        trouve = true;
                    }
                });
                if(!trouve && this.createdproductid > 0){
                        this.$store 
                            .dispatch("product/createProductPhotos",this.form)
                            .then((id) => {   
                         //   this.productphotosbycolorid = id;
                            this.form.id = id 
                            var prodphoto = {};
                            prodphoto = {...this.form }
                           // this.productphotosbycolor.push(prodphoto)
                            this.selectedcolors.forEach(el => {
                                if(el.color === prodphoto.color){
                                    el.captures = JSON.parse(prodphoto.captures)
                                    el.id = id;
                                }
                            });
                                this.initprodphoo();
                            //this.$router.push("/ManageProduct/Product");
                            })
                              .catch((error) => console.log(error));  
                           // .catch((error) => this.$toasted.error(error, { duration: 3000 }));  
                }            }
       } catch (error) {
                   alert(" Please add a pictures for the selected color ")
        }
    },

    initprodphoo(){
                    this.color_extraprice=null
                    this.currentselectedcolors={}
                    this.images= []
                    this.imagedis= null
                    this.imagesNames= []
                    this.form.id=0
                    this.form.captures= []
                    this.form.name="" 
                    this.form.color=""
                    this.form.productid = 0
                    this.form.extraprice = 0.0
                    this.isdisplaypic = false
                    this.isdisplaycolor = true
                    this.isconfirm = false;
                    this.isdisplaypicconfirm = false
    },

    isNumeric: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },


    emitFormData() {
        if(this.images.length > 1)
            this.isconfirm = true;
            else                   
            this.isconfirm = false;
    },

    uploadImageSuccess(formData, index, fileList) {
      this.imageExists(index, fileList);
      this.images = fileList;
      this.imagesNames = [];
      this.imagesNames.push(fileList[index].name);
      this.readURL(fileList[index].path, 250).then((finalImg) => {
      this.form.captures.push(finalImg);

      if(this.form.captures.length >= 2){
            this.isdisplaypicconfirm = true
      }
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
    addselectedattr(attrtype) {
      try {
        let attrobj = {};
        if(attrtype == 'color' &&  this.createdproductid > 0){
            var trouve = false;
            this.selectedcolors.forEach(el => {
                if(el.color === this.selectedColorHex){
                    trouve = true;
                }
            });

             if(!trouve){
                if( this.selectedColorHex !== "" &&  this.color_extraprice >= 0){
                        this.colors.forEach(el => {
                            if(el.hex === this.selectedColorHex){
                                attrobj.name = el.name
                                attrobj.color = el.hex 
                                attrobj.extraprice = this.form.extraprice 
                                attrobj.productid = this.form.productid                             }
                        });
                        attrobj.color_extraprice = Number(this.color_extraprice) 
                        this.currentselectedcolors = attrobj;
                        this.selectedcolors.push(attrobj);
                        this.selectedColorHex = ""
                        this.color_extraprice = 0
                        this.isdisplaypic = true
                        this.isdisplaycolor = false
                }
             }else{
                        this.isdisplaypic = false
                        this.isdisplaypicconfirm = false
                        this.isdisplaycolor = true
             }
        }
      } catch (error) {
        console.error(error);
      }
    },

   deletecolor(index) {

    let productphotosbycolorid = this.selectedcolors[index].id ;
           if(productphotosbycolorid > 0 ){
                    this.$store 
                                .dispatch("product/deleteProductColorPhoto",productphotosbycolorid )
                                .then((result) => {   
                                })
                                .catch((error) => this.$toasted.error(error, { duration: 3000 }));  
                }
      this.selectedcolors.splice(index, 1); 
      if(this.selectedcolors.length > 0){
        
          var  prodpicupdatedata = {} 
               prodpicupdatedata.productid = this.selectedcolors[0].productid;
               prodpicupdatedata.id =  this.selectedcolors[0].id;
          this.$store 
                      .dispatch("product/updateProductPhotoToDisplay",prodpicupdatedata )
                      .then((result) => {   
                        this.isdisplaypic = false
                        this.isdisplaypicconfirm = false
                        this.isdisplaycolor = true
                      })
                      .catch((error) => this.$toasted.error(error, { duration: 3000 }));  
      }
      this.isdisplaypic = false;
    },
  },
  mounted() {
                $("#info-icon-color").click(function () {
                    $("#info-content-color").show();
                    $("#info-content-weight").hide();
                    $("#info-content-size").hide();
                })

                $("#info-close-color").click(function () {
                    $("#info-content-color").hide();
                })
  },
}
</script>

<style lang="scss" scoped>
input,
button {
  width: 100%;
}

button {
  width: 48%!important;
  margin-left: 100px!important;
}
.donebtn {
  width: 18%!important;
  margin-left: 68%!important;
}
.payment {
  margin-top: 20px;
}

.stripe-card {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
}

.stripe-card.complete {
  border-color: green;
}

/* Global */

* {
  box-sizing : border-box;
}

body,
html {
  height     : 100%;
  min-height : 100%;
}

body {
  margin           : 0;
  background-color : #e7e7e7;
  font-family      : 'Roboto',
                     sans-serif;
}

/* Credit Card */

.credit-card {
  width            : 588px;
  height           : 500px;
  margin           : 60px auto 0;
  border           : 1px solid #ddd;
  border-radius    : 6px;
  background-color : #fff;
  box-shadow       : 1px 2px 3px 0px rgba(0,0,0,0.10);
}

.form-header {
  height        : 60px;
  padding       : 20px 30px 0;
  border-bottom : 1px solid #E1E8EE;
}

.form-body {
  height  : 340px;
  padding : 30px 30px 20px;
}

/* Title */


.title {
  margin    : 0;
  color: #88B04B;
  font-size : 28px;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
}

/* Common */

.card-number,
.cvv-input input,
.month select,
.paypal-btn,
.proceed-btn,
.year select {
  height : 42px;
}

.card-number,
.month select,
.year select {
  font-size   : 14px;
  font-weight : 100;
  line-height : 14px;
}

.card-number,
.cvv-details,
.cvv-input input,
.month select,
.year select {
  color   : #86939e;
  opacity : .7;
}

/* Card Number */

.card-number {
  width         : 100%;
  margin-bottom : 20px;
  padding-left  : 20px;
  border        : 2px solid #e1e8ee;
  border-radius : 6px;
}

/* Date Field */

.month select,
.year select {
  -moz-appearance     : none;
  -webkit-appearance  : none;
  width               : 145px;
  margin-bottom       : 20px;
  padding-left        : 20px;
  border              : 2px solid #e1e8ee;
  border-radius       : 6px;

  background-position : 85% 50%;
}

.month select {
  float : left;
}

.year select {
  float : right;
}

/* Card Verification Field */

.cvv-input input {
  width         : 145px;
  float         : left;
  padding-left  : 20px;
  border        : 2px solid #e1e8ee;
  border-radius : 6px;
  background    : #fff;
}

.cvv-details {
  float         : right;
  margin-bottom : 20px;
  font-size     : 12px;
  font-weight   : 300;
  line-height   : 16px;
}

.cvv-details p {
  margin-top : 6px;
}

/* Buttons Section */

.paypal-btn,
.proceed-btn {
  cursor: pointer;
  width         : 100%;
  border-color  : transparent;
  border-radius : 6px;
  font-size     : 16px;
}

.proceed-btn {
  margin-bottom : 10px;
  background    : #7dc855;
}


.circle:before {
    content: " ●";
    font-size: 88px;
    cursor: pointer;
}

.circle:before {
    content: " ●";
    font-size: 48px;
}
.circle:before {
    content: " ●";
    font-size: 18px;
}
/*********************************************/
</style> 
