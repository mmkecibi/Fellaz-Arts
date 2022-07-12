<template>
  <div class="signin container"  :style="  { backgroundImage: 'url(img/arts/sliders/header.jpeg)' }">
    
    <form @submit="signin">
      <div class="form-group">
              <input
                v-model="form.email"
                @blur="$v.form.email.$touch()"
                class="form-control"
                placeholder="Enter Email"
                autofocus=""
                autocomplete="email"
                type="email"
              />
              <div v-if="$v.form.email.$error" class="form-error">
                <span v-if="!$v.form.email.required" class="error-disply help is-danger"
                  >{{ $t("Email is required") }}
                </span>
                <span
                  v-if="!$v.form.email.emailValidator"
                  class="error-disply help is-danger"
                  >{{ $t("Email address is not valid") }}</span
                >
              </div>
      </div>
      <div class="form-group">
              <input
                v-model="form.password"
                class="form-control"
                @blur="$v.form.password.$touch()"
                type="password"
                placeholder="Enter Password"
                autocomplete="current-password"
              />
              <div v-if="$v.form.password.$error" class="form-error">
                <span
                  v-if="!$v.form.password.required"
                  class="error-disply help is-danger"
                  >{{ $t("Password is required") }}</span
                >
              </div>
      </div>
              <button
                @click.prevent="signin"
                :disabled="$v.form.$invalid"
                class="button-login"
              >
                {{ $t("Login") }}
              </button>
              <label class="rememberme">
                <input type="checkbox" checked="checked" name="remember" />
                {{ $t("Remember me") }}
              </label>
              
  </form>
  <br/>
 <span class="spansignup">{{ $t("Don't have an account?") }}&nbsp;&nbsp;<nuxt-link :to="localePath('/Signup')">{{ $t("Signup Here") }} </nuxt-link></span> 
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: 'Signin',
  props : [ "baseURL"],
  data() {
      return {
              form: {
                        email: null,
                        password: null,
                        loading: null
                    },
             }
        },
  validations: {
    form: {
      email: {
        emailValidator: email,
        required,
      },
      password: {
        required,
      },
    },
  },
  
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    },
  },
  methods : {
    signin() {
      this.$v.form.$touch();
      if (this.isFormValid) {
        this.$store
          .dispatch("auth/login", this.form)
          .then(() => {
             this.$router.push("/");
          })
      }
    },

  },
  mounted() {
    this.loading = false;
  }
}
</script>

<style scoped>

form {
    max-width: 800px;
    width: 78%;
    margin-left: 12%;
    margin-top: 6%;
}

.rememberme {
    width: 80%;
    margin-left: 5%!important;
    margin-bottom: 15%!important;
    font-size: 18px;
    color: rgb(146, 152, 146)!important;
}
.spansignup {
    width: 80%;
    margin-left: 5%!important;
    margin-bottom: 15%!important;
    font-size: 18px;
    color: rgb(146, 152, 146)!important;
}
span.title {
    width: 80%;
    margin-left: 5%!important;
    margin-bottom: 15%!important;
    font-size: 8px;
    color: rgb(234 237 244)!important;
}

.signin h2{
    text-align : center;
    font-size : 60px;
    margin : 30px 0;
}
.spinner-border {
  margin-left: 10px;
}

.error-disply {
  color: red;
}
.logintitlecontainer {
  text-align: center;
  font-size: 18px;
  padding-top: 8px;
  color: #ffffff;
  font-weight: 500;
}

.login {
  width: 28%;
  margin-left: 38%;
  background-color: #38308b;
  margin-top: 6%;
}

label {
  color: #984fa7;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #020000;
  background-color: #ffffff;
}

button {
  background-color: #5487f9;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #a8a8ad;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 15%;
  border-radius: 50%;
}

.container {
  padding: 16px;
  margin-top: 10%;
}
.container {
    max-width: 31% !important;
    margin-left: 35% ;
    background-color: #e8e8fd;

  border: 3px solid rgb(40, 58, 22);
}
span.psw {
  float: right;
  padding-top: 16px;
  color: rgb(40, 58, 22);
}

@media screen and (max-width: 1400px) {
  .login {
    width: 45%;
    margin-left: 36%;
    background-color: #38308b;
  }
  span.psw {
    float: right;
    padding-top: 16px;
    font-size: 11px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    max-width: 80% !important;
    margin-left: 15% ;
    background-color: #e8e8fd;
}
  .login {
    width: 65%;
    margin-left: 17%;
    background-color: #38308b;
  }
  span.psw {
    float: right;
    padding-top: 16px;
    font-size: 11px;
  }
  .login-form-control {
    font-size: 11px;
  }
  .error-disply {
    font-size: 11px;
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
    font-size: 8px;
  }
  .cancelbtn {
    width: 100%;
  }
  .login {
    width: 60%;
    margin-left: 24%;
    background-color: #38308b;
  }
  .login-form-control {
    font-size: 11px;
  }
  .error-disply {
    font-size: 11px;
  }
}

</style>