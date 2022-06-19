<template>
  <div class="addProduct container">
    <span class="title">{{$t('Add a new Product')}}</span>

    <form>      
    <div class="row">
      <div class="col-md-6">
      <div class="form-group">
        <label>{{$t('Category')}}</label>
        <select class="form-control" v-model="form.categoryId">
          <option disabled selected>--{{$t('Select parent category')}}--</option>
          <option v-for="category of categories" :key="category.id" :value="category.id">{{($i18n.locale === 'en'?category['name']:category['name_'+$i18n.locale])}}</option>
        </select>
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("code") }} *</label>
        <input
          v-model.trim="form.code"
          @blur="$v.form.code.$touch()"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
        <div v-if="$v.form.code.$error" class="form-error">
          <span v-if="!$v.form.code.required" class="help is-danger">{{
            $t("code is required")
          }}</span>
          <span v-if="!$v.form.code.minLength" class="help is-danger">{{
            $t("code minimum length is 6 characters")
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
          @change="emitFormData"
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
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("description") }} *</label>
          <v-textarea
              v-model.trim="form.description"
              @blur="$v.form.description.$touch()"
              @change="emitFormData"
          ></v-textarea>
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
          <v-textarea
              v-model.trim="form.description_fr"
              @change="emitFormData"
          ></v-textarea>
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("description_ar") }} *</label>
          <v-textarea
              v-model.trim="form.description_ar"
              @change="emitFormData"
          ></v-textarea>
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("starrating") }} *</label>
        <input
          v-model.trim="form.starrating"
          @change="emitFormData"
          class="form-control"
          type="number"
          placeholder=""
        />

      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("prixd achat") }} *</label>
        <input
          v-model.trim="form.prixdachat"
          @change="emitFormData"
          class="form-control"
          type="number"
          placeholder=""
        />

      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("price") }} *</label>
        <input
          v-model.trim="form.price"
          @change="emitFormData"
          class="form-control"
          type="number"
          placeholder=""
        />
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("discount") }} *</label>
        <input
          v-model.trim="form.discount"
          @change="emitFormData"
          class="form-control"
          type="number"
          placeholder=""
        />

      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("stock") }} *</label>
        <input
          v-model.trim="form.stock"
          @change="emitFormData"
          class="form-control"
          type="number"
          placeholder=""
        />

      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("is instock") }} *</label>
        <input
          v-model.trim="form.isinstock"
          @change="emitFormData"
          class="form-control-checkbox"
          type="checkbox"
          placeholder=""
        />

      </div>
    </div>


 <div class="col-md-6">
  <div class="col-md-3">
  <label>{{ $t("size") }}</label>
         <i id="info-icon-size" class="info-icon"></i>
  </div>
        <input
          v-model.trim="size"
          class="form-control-extra"
          type="text"
          :placeholder= 'this.$t("size")' 
        />
        <input
          v-model.trim="size_extraprice"
          class="form-control-extra"
          type="number"
          :placeholder= 'this.$t("extra price")' 
        />
        <button 
                type="button" 
                class="btn btn-primary" 
                @click="addselectedattr('size')"
                >
                {{ $t("Add") }}
        </button>

            <div >
              <ul>
                <li
                  v-for="(size, index) in form.selectedsizes"
                  
                >
                <span class="close" @click="deletesize(index)"> X </span>
                <span class="extraprops">{{ size.size }}</span> <span class="extraprops">{{ size.size_extraprice  | dollar }} </span>   
              
                </li>
              </ul>
            </div>


    </div>

   <div class="col-md-6">
  <div class="col-md-3">
  <label>{{ $t("weight") }}</label>
       <i id="info-icon-weight" class="info-icon"></i>
  </div>
        <input
          v-model.trim="weight"
          class="form-control-extra"
          type="text"
          :placeholder= 'this.$t("weight")' 
        />
        <input
          v-model.trim="weight_extraprice"
          class="form-control-extra"
          type="number"
          :placeholder= 'this.$t("extra price")' 
        />
        <button 
                type="button" 
                class="btn btn-primary" 
                @click="addselectedattr('weight')"
                >
                   {{ $t("Add") }}
        </button>

            <div >
              <ul>
                <li
                  v-for="(weight, index) in form.selectedweights"
                  
                >
                <span class="close" @click="deleteweight(index)"> X </span>
                <span class="extraprops">{{ weight.weight }}</span> <span class="extraprops">{{ weight.weight_extraprice  | dollar }} </span>   
              
                </li>
              </ul>
            </div>
    </div>
<div id="info-content-weight" class=" info-content info-content-top-lawyer" style="display: none;"> Add weight eith an extra price if exists <div id="info-close-weight">x</div></div>
<div id="info-content-size" class=" info-content info-content-top-lawyer" style="display: none;"> Add size eith an extra price if exists <div id="info-close-size">x</div></div>


      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("manufacturer") }} *</label>
        <input
          v-model.trim="form.manufacturer"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />

      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("manuf code") }} *</label>
        <input
          v-model.trim="form.manufcode"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">
        <label>{{ $t("vendor code") }} *</label>
        <input
          v-model.trim="form.vendorcode"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("New Arrival Product") }} *</label>
        <input
          v-model.trim="form.isnewarrivalproduct"
          @change="emitFormData"
          class="form-control-checkbox"
          type="checkbox"
          placeholder=""
        />

      </div>
    </div>

      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("Hot Product") }} *</label>
        <input
          v-model.trim="form.ishotproduct"
          @change="emitFormData"
          class="form-control-checkbox"
          type="checkbox"
          placeholder=""
        />

      </div>
    </div>
    </div>
            <button 
                    type="button" 
                    class="btn btn-primary" 
                    @click="addProduct"
                    :disabled="!this.isValid">
                                    {{ $t("Next") }}
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
import ToolsjqueryMixin from "~/mixins/ToolsjqueryMixin";
export default {
  mixins: [ToolsjqueryMixin],

  data(){
    return {
    categories:[],
    size_extraprice:null,
    size:null,
    weight_extraprice:null,
    weight:null,
    form:{
      categoryId : null,
      name : null,
      name_fr : null, 
      name_ar : null, 
      description : null,
      description_fr : null,
      description_ar : null,
      price : 0,
      code: null, 
      prixdachat: 0, 
      discount: 0, 
      isnewarrivalproduct: null, 
      ishotproduct: null,  
      stock: 0, 
      isinstock: null, 
      size: 0, 
      weight: 0,  
      manufacturer: null, 
      manufcode: null, 
      vendorcode: null,
      review:null,
      starrating:0,
      selectedweights:[],   
      selectedsizes:[],
    },

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
      discount: {
        required,
      }, 
      stock: {
        required,
      },
    },
  },
  components : {}, 
  computed: {
    isValid() {
      return !this.$v.$invalid;
    },
    realPrice(){
       this.price = this.price - this.discount;
      return this.price
    }
  },
  created(){
    this.getAllCategories();
  },

  methods : {
 
 async getAllCategories(){

       return await  this.$store
           .dispatch("product/fetchallcategories")
           .then((result) => {
             this.categories = result.data;
           })
           .catch((error) => this.$toasted.error(error, { duration: 3000 }));
       },
    addProduct : async function() {
      if(this.isValid){
       // this.form.captures = JSON.stringify(this.form.captures),
       // this.form.selectedcolors = JSON.stringify(this.form.selectedcolors),
        this.form.selectedweights = JSON.stringify(this.form.selectedweights),
        this.form.selectedsizes = JSON.stringify(this.form.selectedsizes),

        this.form.price = (this.isNumeric(this.form.price ) ? this.form.price : 0.0),
        this.form.prixdachat = (this.isNumeric(this.form.prixdachat ) ? this.form.prixdachat : 0.0), 
        /*  this.form.size = (this.isNumeric(this.form.size ) ? this.form.size : 0.0), 
        this.form.weight = (this.isNumeric(this.form.weight ) ? this.form.weight : 0.0),*/

      this.$store
        .dispatch("product/createProduct",this.form)
        .then((id) => {   
            this.$store.commit("product/setcreatedproductid",id);
            this.$store.commit("product/setaddstep", 'addcolorandphotos');
         // this.$router.push("/ManageProduct/Product");
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
      }

    },

    isNumeric: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    emitFormData() {
     // this.stepsValidation[4] = this.isValid;
     // this.$emit("stepUpdated", { data: this.form, isValid: this.isValid });
    },

    addselectedattr(attrtype) {
      try {
        let attrobj = {};
         if(attrtype == 'size'){
            var trouve = false;
            this.form.selectedsizes.forEach(el => {
                if(el.size === this.size){
                    trouve = true;
                }
            });
             if(!trouve){
                if( this.size.trim !== "" &&  this.size_extraprice >= 0){
                        attrobj.size = this.size
                        attrobj.size_extraprice =  Number(this.size_extraprice)
                        this.form.selectedsizes.push(attrobj);
                        this.size = ""
                        this.size_extraprice = 0
                }
             }
        }
        if(attrtype == 'weight'){

            var trouve = false;
            this.form.selectedweights.forEach(el => {
                if(el.weight === this.weight){
                    trouve = true;
                }
            });
             if(!trouve){

                if( this.weight.trim !== "" &&  this.weight_extraprice >= 0){
                        attrobj.weight = this.weight
                        attrobj.weight_extraprice =  Number(this.weight_extraprice)
                        this.form.selectedweights.push(attrobj);
                        this.weight = ""
                        this.weight_extraprice = 0
                }
             }
        }
      } catch (error) {
        console.error(error);
      }
    },
   deletesize(index) {
      this.form.selectedsizes.splice(index, 1); 
    },
   deleteweight(index) {
      this.form.selectedweights.splice(index, 1); 
    },
  },
  mounted() {
                $("#info-icon-weight").click(function () {
                    $("#info-content-weight").show();
                    $("#info-content-size").hide();
                })

                $("#info-close-weight").click(function () {
                    $("#info-content-weight").hide();
                })
                $("#info-icon-size").click(function () {
                    $("#info-content-size").show();
                    $("#info-content-weight").hide();
                })

                $("#info-close-size").click(function () {
                    $("#info-content-size").hide();
                })
  },
}
</script>
<style>

.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #ffffff;
    border-color: #ffffff;
}

@media (max-width: 600px) {
    label{
         color:#4e28d9;
         font-weight: bold;
    }
    label.labeltext{
         color:#4e28d9;
    }
}
</style>