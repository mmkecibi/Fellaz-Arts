<template>
    <div class="addProduct container">
        <span class="title">{{ $t("Edit Taxe") }}</span>
  
    <form>
      <div class="row">
  
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
            $t("code is required")
          }}</span>
          <span v-if="!$v.form.name.minLength" class="help is-danger">{{
            $t("code minimum length is 6 characters")
          }}</span>
        </div>

      </div>
     </div>
      
      <div class="col-md-6">
      <div class="form-group">

        <label>{{ $t("value") }} *</label>
        <input
          v-model.trim="form.value"
          @blur="$v.form.value.$touch()"
          @change="emitFormData"
          class="form-control"
          type="text"
          placeholder=""
        />
        <div v-if="$v.form.value.$error" class="form-error">
          <span v-if="!$v.form.value.required" class="help is-danger">{{
            $t("code is required")
          }}</span>
          <span v-if="!$v.form.value.minLength" class="help is-danger">{{
            $t("code minimum length is 6 characters")
          }}</span>
        </div>

      </div>
     </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("province") }}</label>
              <input
                v-model.trim="form.provaince"
                @blur="$v.form.provaince.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder="provaince"
              />
              <div v-if="$v.form.provaince.$error" class="form-error">
                <span v-if="!$v.form.provaince.required" class="help is-danger">{{
                  $t("State is required")
                }}</span>
                <span v-if="!$v.form.provaince.minLength" class="help is-danger">{{
                  $t("State minimum length is 18 characters")
                }}</span>
              </div>
            </div>
          </div>



            </div>

          <button type="button" class="btn btn-primary" @click="editTaxe">{{ $t("update") }}</button>
      </form>

    </div>    
</template>
<script>
  import {
      required,
    } from "vuelidate/lib/validators";

export default {
    async fetch({ store, params }) {
          await store.dispatch("orderstore/fetchTaxeById", params.id);
        },
        data(){
      return {
              form:{
                      id : null,
                      name : null, 
                      value : null,
                      provaince : null,
                  },
       }
    },
  
    validations: {
      form: {
              name: {
                required,
              },
              value: {
                required,
              },
              provaince: {
                required,
              },
      },
    },

    created(){
                this.form.id = this.formtaxe.id;
                this.form.name = this.formtaxe.name;
                this.form.value = this.formtaxe.value; 
                this.form.provaince = this.formtaxe.provaince; 
    },

    computed: {
      isValid() {
        return !this.$v.$invalid;
      },
    formtaxe: {
        get: function () {
          let taxe = {...this.$store.state.orderstore.taxe};
          console.log(taxe.id)
          return taxe;
        },
      },
    },
  
  methods : {

  async  editTaxe () {
      this.$store
        .dispatch("orderstore/updateTaxe",this.form)
        .then((result) => {   
          this.$router.push("/ManageProduct/Taxe");
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
    },
  
  
    emitFormData() {
     // this.stepsValidation[4] = this.isValid;
     // this.$emit("stepUpdated", { data: this.form, isValid: this.isValid });
    },
  },
  mounted() {
  },
};
</script>