<template>
<div>
    <div class="tab-content" id="main_form">
      <div class="tab-pane active" role="tabpanel" id="step1">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("First Name") }} *</label>
              <input
                v-model.trim="form.firstname"
                @blur="$v.form.firstname.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder=""
              />
              <div v-if="$v.form.firstname.$error" class="form-error">
                <span v-if="!$v.form.firstname.required" class="help is-danger">{{
                  $t("First Name is required")
                }}</span>
                <span v-if="!$v.form.firstname.minLength" class="help is-danger">{{
                  $t("First Name minimum length is 6 characters")
                }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Last Name") }} *</label>
              <input
                v-model.trim="form.lastname"
                @blur="$v.form.lastname.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder=""
              />
              <div v-if="$v.form.lastname.$error" class="form-error">
                <span v-if="!$v.form.lastname.required" class="help is-danger">{{
                  $t("Last Name is required")
                }}</span>
                <span v-if="!$v.form.lastname.minLength" class="help is-danger">{{
                  $t("Last Name minimum length is 6 characters")
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
            <div v-if="emailexistsv" class="form-error">
              <span class="help is-danger">{{ $t("Email already exists") }}</span>
            </div>
            <div v-else class="form-error">
              <span class="help is-danger"></span>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Username") }} *</label>
              <input
                v-model.trim="form.username"
                @blur="$v.form.username.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder=""
              />
              <div v-if="$v.form.username.$error" class="form-error">
                <span v-if="!$v.form.username.required" class="help is-danger">{{
                  $t("Username is required")
                }}</span>
                <span v-if="!$v.form.username.minLength" class="help is-danger">{{
                  $t("Username minimum length is 6 characters")
                }}</span>
              </div>

              <div v-if="usernameexistsv" class="form-error">
                <span class="help is-danger">{{ $t("Username already exists") }}</span>
              </div>
              <div v-else class="form-error">
                <span class="help is-danger"></span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Select Gender") }} *</label><br />
              <div class="">
                <select
                  class="form-control minimal"
                  v-model.trim="form.gender"
                  @blur="$v.form.gender.$touch()"
                  @change="emitFormData"
                >
                  <option value="default">{{ $t("Select Gender") }}</option>
                  <option
                    v-for="gender in genders"
                    :key="gender.code"
                    :value="gender.code"
                  >
                    {{ gender.name }}
                  </option>
                </select>
              </div>
              <!-- TODO: -->
              <!-- Consider to create custom validator to check if country is provided and has value of "default" -->
              <div v-if="$v.form.gender.$dirty && !isValidGender" class="form-error">
                <span class="help is-danger">{{ $t("SGender is required!") }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Brith date") }} *</label>
              <input
                v-model.trim="form.dob"
                @blur="$v.form.dob.$touch()"
                @change="emitFormData"
                @input="
                  ($event) => {
                    ValidateDOBinsert('dob'), this.emitFormData(), (menubod = false);
                  }
                "
                class="form-control"
                type="date"
                placeholder=""
              />
              <div v-if="$v.form.dob.$error" class="form-error">
                <span v-if="!$v.form.dob.required" class="help is-danger">{{
                  $t("Brith date is required")
                }}</span>
                <span v-if="!$v.form.lastname.minLength" class="help is-danger">{{
                  $t("Brith date minimum length is 6 characters")
                }}</span>
              </div>
              <div v-if="!isDateTimeValid" class="form-error">
                <span class="help is-danger">{{
                  $t("Please enter a valid BirthDate")
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Password") }} *</label>
              <input
                v-model.trim="form.password"
                @blur="$v.form.password.$touch()"
                @change="emitFormData"
                class="form-control"
                type="password"
                placeholder=""
                autocomplete="new-password"
              />
              <div v-if="$v.form.password.$error" class="form-error">
                <span v-if="!$v.form.password.required" class="help is-danger">{{
                  $t("Password is required")
                }}</span>
                <span v-if="!$v.form.password.minLength" class="help is-danger">{{
                  $t("Password minimum length is 6 characters")
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Re-password") }} *</label>
              <input
                v-model.trim="form.passwordConfirmation"
                @blur="$v.form.passwordConfirmation.$touch()"
                @change="emitFormData"
                class="form-control"
                type="password"
                placeholder=""
                autocomplete="off"
              />
              <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
                <span
                  v-if="!$v.form.passwordConfirmation.required"
                  class="help is-danger"
                  >{{ $t("Password Confirmation is required") }}</span
                >
                <span v-if="!$v.form.passwordConfirmation.sameAs" class="help is-danger"
                  >{{ $t("Password Confirmation should be the same as Password") }}!</span
                >
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Phone Number") }} *</label>
              <input
                v-model.trim="form.phone"
                @blur="$v.form.phone.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder=""
              />
              <div v-if="$v.form.phone.$error" class="form-error">
                <span v-if="!$v.form.phone.required" class="help is-danger">{{
                  $t("Phone is required")
                }}</span>
                <span v-if="!$v.form.phone.phone" class="help is-danger">{{
                  $t("Phone number is not valid")
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Address") }} *</label>
              <input
                v-model.trim="form.addressLineOne"
                @blur="$v.form.addressLineOne.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder="Address Line One"
              />
              <div v-if="$v.form.addressLineOne.$error" class="form-error">
                <span v-if="!$v.form.addressLineOne.required" class="help is-danger">{{
                  $t("addressLineOne is required")
                }}</span>
                <span v-if="!$v.form.addressLineOne.minLength" class="help is-danger">{{
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
                v-model.trim="form.postcode"
                @blur="$v.form.postcode.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder="Postal Code"
              />
              <div v-if="$v.form.postcode.$error" class="form-error">
                <span v-if="!$v.form.postcode.required" class="help is-danger">{{
                  $t("Postal Code is required")
                }}</span>
                <span v-if="!$v.form.postcode.postalCode" class="help is-danger">{{
                  $t("Postal Code minimum length is 8 characters")
                }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t("Province") }}</label>
              <input
                v-model.trim="form.state"
                @blur="$v.form.state.$touch()"
                @change="emitFormData"
                class="form-control"
                type="text"
                placeholder="State"
              />
              <div v-if="$v.form.state.$error" class="form-error">
                <span v-if="!$v.form.state.required" class="help is-danger">{{
                  $t("State is required")
                }}</span>
                <span v-if="!$v.form.state.minLength" class="help is-danger">{{
                  $t("State minimum length is 18 characters")
                }}</span>
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
        <button 
        type="submit" 
        :disabled="!canProceed"
        @click="createUser"
        class="btn btn-primary">{{$t("Sing up")}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { GENDERS } from "@/helpers/export";
import { COUNTRIES } from "@/helpers/export";
import {
  required,
  email,
  minLength,
  url,
  sameAs,
  between,
} from "vuelidate/lib/validators";
const phone = (value) => {
  //if (["United States", "Canada"].includes(vm.country)) {
  return /^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(value);
  //}
  return true;
};
const postalCode = (value, vm) => {
  /*if (vm.country == "United States") {
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(value);
  } else if (vm.country == "Canada") {  */
  return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value);
  /* }*/
  return true;
};
/************************************************************* */
import MultiComponentMixin from "~/mixins/MultiComponentMixin";
/************************************************************* */
export default {
  mixins: [MultiComponentMixin],
  name: 'Signup',
  props : [ "baseURL"],
  data() {
      return {
                genders: GENDERS,
                countries: COUNTRIES,
                emailexistsold: "",
                usernameexistsold: "",
                form: {
                        username: null,
                        firstname: null,
                        lastname: null,
                        dob: new Date().toISOString().substr(0, 10),
                        gender: "default",
                        email: null,
                        phone: null,
                        password: null,
                        passwordConfirmation: null,
                        city: null,
                        addressLineOne: null,
                        postcode: null,
                        country: "default",
                        role_name:"user"
                      },
                canProceed: false,
      }
  },
  methods : {
    createUser() {
      this.form.usertype = "agent";
      this.$store
        .dispatch("user/userclient/createUser", this.form)
        .then((result) => {
          this.$router.push("/Signin");
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
    },
    signup : async function(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm) {
        const user = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password
        }
        await fetch(this.baseURL + "user/signup", {
            method : "POST",
            body : JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
          if (res.ok) {
            this.$router.replace("/");
            alert("User signup successful. Please Login");
          } else {
            alert("Error occurred while signup");
          }
        })
        .catch((err) => {
          alert(err);
        });
      } else {
        alert("Error! Passwords are not matching.")
      }
    },
        ValidateDOBinsert(field) {
      //Get the date from the TextBox.
      var dateString = this.form[field];
      var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

      let date = new Date(dateString);
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2, "0");

      dateString = day + "/" + month + "/" + year;
      //Check whether valid dd/MM/yyyy Date Format.
      if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
          this.isvalidDateTimePicker = false;
          return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
          //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
          if (dtCurrent.getMonth() < dtDOB.getMonth()) {
            this.isvalidDateTimePicker = false;
            return false;
          }
          if (dtCurrent.getMonth() == dtDOB.getMonth()) {
            //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
            if (dtCurrent.getDate() < dtDOB.getDate()) {
              this.isvalidDateTimePicker = false;
              return false;
            }
          }
        }
        this.isvalidDateTimePicker = true;
        return true;
      } else {
        this.isvalidDateTimePicker = true;
        return true;
      }
    },

    emitFormData() {

                      if (this.$v.form.postcode.postalCode) {
                        let lat;
                        let lng;
                        this.$axios
                          .$get(
                            `https://maps.googleapis.com/maps/api/geocode/json?address=${this.form.postcode}&key=AIzaSyCQFKwVLvTw3-ovzOWm1UUAHeIVyDkW2t4`
                          )
                          .then((agent) => {
                            if (agent.results[0]) {
                              lat = agent.results[0]["geometry"]["location"].lat;
                              lng = agent.results[0]["geometry"]["location"].lng;
                              this.form.lat = agent.results[0]["geometry"]["location"].lat;
                              this.form.lng = agent.results[0]["geometry"]["location"].lng;
                            } else {
                              this.form.lat = 0.0;
                              this.form.lng = 0.0;
                            }
                            console.log(this.form.lat);
                            console.log(this.form.lng);
                            this.$v.form.$touch();
                          });
                      }

    /*  this.stepsValidation[0] = this.isValid;
      this.$emit("stepUpdated", {
        data: this.form,
        isValid:
          this.isValid &&
          this.isValidGender &&
          this.ValidateDOBinsert("dob") &&
          !this.usernameexistsv &&
          !this.emailexistsv,
      });*/

      this.canProceed = this.isValid && this.isValidGender && this.ValidateDOBinsert("dob") &&  !this.usernameexistsv && !this.emailexistsv

    },
  },
    validations: {
                    form: {
                            username: {
                              required,
                            },
                            firstname: {
                              required,
                            },
                            lastname: {
                              required,
                            },
                            email: {
                              required,
                              emailValidator: email,
                            },
                            dob: {
                              required,
                            },
                            gender: {
                              required,
                            },
                            phone: {
                              required,
                              phone,
                            },
                            password: {
                              required,
                              minLength: minLength(6),
                            },
                            passwordConfirmation: {
                              required,
                              sameAs: sameAs("password"),
                            },
                                  addressLineOne: {
                              required,
                            },
                            city: {
                              required,
                            },
                            state: {
                              required,
                            },
                            postcode: {
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
      return !this.$v.$invalid;
    },
    isValidGender() {
      return this.form.gender !== "default";
    },
    isValidCountry() {
      return this.form.country !== "default";
    },
  },

}
</script>

<style scoped>
.signup h2{
  text-align : center;
  font-size : 60px;
  margin : 30px 0;
}
</style>