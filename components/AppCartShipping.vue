<template>
  <div>
    <div class="tab-content" id="main_form">

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
                  $t("Name is required")
                }}</span>
                <span v-if="!$v.form.name.minLength" class="help is-danger">{{
                  $t("Name minimum length is 6 characters")
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Email") }} *</label>
              <input
                v-model.trim="form.email"
                @change="emitFormData"
                @blur="$v.form.email.$touch()"
                class="form-control"
                type="email"
                placeholder=""
              />
              <div v-if="$v.form.email.$error" class="form-error">
                <span v-if="!$v.form.email.required" class="help is-danger">{{
                  $t("Email is required")
                }}</span>
                <span v-if="!$v.form.email.emailValidator" class="help is-danger">{{
                  $t("Email address is not valid")
                }}</span>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Address") }} *</label>
              <input
                v-model.trim="form.address"
                @blur="$v.form.address.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder="Address Line One"
              />
              <div v-if="$v.form.address.$error" class="form-error">
                <span v-if="!$v.form.address.required" class="help is-danger">{{
                  $t("addressLineOne is required")
                }}</span>
                <span v-if="!$v.form.address.minLength" class="help is-danger">{{
                  $t("addressLineOne minimum length is 248 characters")
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("City/Town") }} *</label>
              <input
                v-model.trim="form.city"
                @blur="$v.form.city.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder="City"
              />
              <div v-if="$v.form.city.$error" class="form-error">
                <span v-if="!$v.form.city.required" class="help is-danger">{{
                  $t("City is required")
                }}</span>
                <span v-if="!$v.form.city.minLength" class="help is-danger">{{
                  $t("City minimum length is 18 characters")
                }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Postal Code") }} *</label>
              <input
                v-model.trim="form.cp"
                @blur="$v.form.cp.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                v-mask="{ mask: ['A9A 9A9'], placeholder: '_' }"
              />
              <div v-if="$v.form.cp.$error" class="form-error">
                <span v-if="!$v.form.cp.required" class="help is-danger">{{
                  $t("Postal Code is required")
                }}</span>
                <span v-if="!$v.form.cp.postalCode" class="help is-danger">{{
                  $t("Postal Code minimum length is 8 characters")
                }}</span>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Province") }}</label><br />
              <div class="">
                <select
                  class="form-control minimal"
                v-model.trim="form.provaince"
                @blur="$v.form.provaince.$touch()"
                  @change="emitFormData"
                >
                  <option value="default">{{ $t("Province") }}</option>
                  <option
                    v-for="prov in provinces"
                    :key="prov.code"
                    :value="prov.code"
                  >
                    {{ prov.name }}
                  </option>
                </select>
              </div>
              <!-- TODO: -->
              <!-- Consider to create custom validator to check if country is provided and has value of "default" -->
              <div v-if="$v.form.provaince.$dirty && !isValidCountry" class="form-error">
                <span class="help is-danger">{{ $t("State is required") }}!</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Select Country") }} *</label><br />
              <div class="">
                <select
                  class="form-control minimal"
                  v-model.trim="form.country"
                  @blur="$v.form.country.$touch()"
                  @change="emitFormData"
                >
                  <option value="default">{{ $t("Select Country") }}</option>
                  <option
                    v-for="country in countries"
                    :key="country.code"
                    :value="country.code"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
              <!-- TODO: -->
              <!-- Consider to create custom validator to check if country is provided and has value of "default" -->
              <div v-if="$v.form.country.$dirty && !isValidCountry" class="form-error">
                <span class="help is-danger">{{ $t("Country is required") }}!</span>
              </div>
            </div>
          </div>
                
        </div>
        
      </div>
      <button class="pay-with-stripe" @click="goToDisplayCartStep">{{ $t("Previous") }}</button>
      <button class="pay-with-stripe shipping_next " @click="goTototalByProvinceStep"  :disabled="!canbeactive">{{ $t("Next") }}</button>
      <div class="clearfix"></div>
    </div>
</template>

<script>
import { COUNTRIES,PROVINCES } from "@/helpers/export";
import { required,email,minLength} from "vuelidate/lib/validators";
import { mapState, mapGetters } from "vuex";

const postalCode = (value, vm) => {
  /*if (vm.country == "United States") {
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(value);
  } else if (vm.country == "Canada") {  */
  return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value);
  /* }*/
  return true;
};

export default {
  data() {
    return {
      countries: COUNTRIES,
      provinces:PROVINCES,
      form: {
        clientid:null,
        name:null,
        email:null,
        city: null,
        address: null,
        cp: null,
        provaince: "default",
        country: "default",
      },
      canbeactive:false,
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        emailValidator: email,
      },
      address: {
        required,
      },
      city: {
        required,
      },
      provaince: {
        required,
      },
      cp: {
        required,
        postalCode,
      },
      country: {
        required,
      },
    },
  },
  computed: {
    isValid() {
      return !this.$v.$invalid && this.form.category !== "default"&& this.form.provaince !== "default";
    },
    isValidCountry() {
      return this.form.country !== "default";
    },
    isValidProvaince() {
      return this.form.provaince !== "default";
    },
    ...mapGetters({ 
              cartCount: 'cartstore/cartCount',
              cartTotal: 'cartstore/cartTotal',
              user: "auth/authUser",
              isAuth: "auth/isAuthenticated",
              isAdmin: "auth/isAdmin",
              userAuthority: "auth/userAuthority",
          }),
  },

  methods: {
    emitFormData() {
      if (this.$v.form.cp.postalCode && this.isValidCountry && this.isValid) {
          this.canbeactive = true;
      } else{
          this.canbeactive = false;     
      }
    },
  async  goToDisplayCartStep() {
         this.$store.commit("cartstore/updateCartUI", "idle");
    },
  async  goTototalByProvinceStep() {
        this.form.clientid  = this.user.id
        return await  this.$store
            .dispatch("orderstore/createshipping",this.form)
            .then((result) => {
              this.$store.dispatch("orderstore/saveshippingprovince",this.form.provaince);
              this.$store.commit("cartstore/updateCartUI", "totalbyprovince");
            })
            .catch((error) => { this.$toasted.error(error, { duration: 3000 })});
    },



  async  getshippingAddressByClientId() {
        return await  this.$store
            .dispatch("orderstore/fetchShippingAddressByClientId",this.user.id)
            .then((result) => {
              console.log("orderstore/fetchShippingAddressByClientId   ", result)
               return result;
            })
            .catch((error) => { this.$toasted.error(error, { duration: 3000 })});
    },
  },
  mounted() {
            this.getshippingAddressByClientId()
               .then((result) => {
                                    this.form.clientid = result.userId;
                                    this.form.name = result.name;
                                    this.form.email = result.email;
                                    this.form.city = result.city;
                                    this.form.address = result.address;
                                    this.form.cp = result.cp;
                                    this.form.provaince = result.provaince;
                                    this.form.country = result.country;
                                    this.canbeactive = true;
                                    this.$store
                  this.$store.dispatch("orderstore/saveshippingprovince",result.provaince);
            })
            .catch((error) => { console.log(error, { duration: 3000 })});
  },
};
</script>
<style scoped lang="scss">
.shipping_next{
float:right;
}
.help.is-danger {
  text-align: left;
}
.box {
  margin-top: 5rem;
}
</style>
