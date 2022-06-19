<template>
    <div class="addProduct container">
        <span class="title">{{ $t("Aprouve Order")}}</span>
  
        <form>
          <div class="row">
      
           <div class="col-md-6">
            <div class="form-group">
            <img width="148"  :src="form.photo" />
            </div>
          </div>

          <div class="col-md-6 ">
            <div class="form-group"> <br /><br /><br />
              <label class="labeltext">{{ form.lastname }} {{ form.firstname }}</label> <br /><br /><br />
              <label class="labeltext">{{ $t("Order Ref") }}</label><br/>
              <label class="labeltext">{{ form.order_id }}</label><br/>
              <label class="labeltext">{{ $t("Total Amount") }}</label><br/>
              <label class="labeltext">{{ form.total_amount | dollar }}</label><br/>
              <label class="labeltext">{{ $t("Creation Date") }}</label><br/>
              <label class="labeltext">{{ form.order_date  }}</label><br/>
              <label class="labeltext">{{ $t("Payment Type") }}</label><br/>
              <label class="labeltext">{{ form.payment_type}}</label><br/>
              <label class="labeltext">{{ $t("Payment Status") }}</label><br/>
              <label class="labeltext">{{ form.payment_status}}</label><br/>
              <label class="labeltext">{{ $t("Status") }}</label><br/>
              <label class="labeltext">{{ form.status}}
              </label>

                <button v-if="form.isapptoved" type="button" class="btn btn-primary" @click="ApproveOrder(form.id,form.isapptoved,0)" ><img v-if="form.isapptoved" width="28" length="28" src="/img/on.jpg" /></button>
                <button v-if="!form.isapptoved" type="button" class="btn btn-primary" @click="ApproveOrder(form.id,form.isapptoved,1)" ><img v-if="!form.isapptoved"  width="28" length="28"  src="/img/off.jpg" /></button>

            </div>
          </div>

         </div>
      </form>

    </div>    
</template>
<script>

/************************************************************* */
import ToolsImageMixin from "~/mixins/ToolsImageMixin";
/************************************************************* */
export default {
    mixins: [ToolsImageMixin],
    async fetch({ store, params }) {
          await store.dispatch("orderstore/fetchOrderById", params.id);
        },
        data(){
      return {
              form:{
                      id : null,
                      order_date: null,
                      user_id: null,
                      lastname : null,
                      firstname : null,
                      photo : null,
                      order_id: null,
                      payment_type: null,
                      total_amount: null,
                      payment_status: null,
                      status: null,
                      isapptoved:0
                  },
      }
    },
  
    created(){
                this.form.id = this.formorder.id;
                this.form.order_date = this.formorder.order_date;
                this.form.lastname = this.formorder.lastname; 
                this.form.firstname = this.formorder.firstname;
                this.form.photo = this.formorder.photo;
                this.form.order_id = this.formorder.order_id;
                this.form.payment_type = this.formorder.payment_type;
                this.form.total_amount = this.formorder.total_amount;
                this.form.payment_status = this.formorder.payment_status; 
                this.form.status = this.formorder.status; 
                this.form.isapptoved = this.formorder.isapptoved; 
    },

    computed: {
      isValid() {
        return !this.$v.$invalid;
      },
    formorder: {
        get: function () {
          let order = {...this.$store.state.orderstore.order};
          return order;
        },
      },
    },
  
  methods : {
    isNumeric: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    async  ApproveOrder (orderid,isapptoved,approuved) {
      this.form.isapptoved = (isapptoved == 1 ? 0 : 1);
      this.form.status =  (approuved == 0 ? "Not Approved" : "Approved");
      var formdata = {};
      formdata.id = orderid
      formdata.isapptoved = (isapptoved == 1 ? 0 : 1);
      formdata.status =  (approuved == 0 ? "Not Approved" : "Approved");
        this.$store
          .dispatch("orderstore/approuveOrder",formdata)
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

<style>
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #4e28d9;
    background-color: #ffffff;
    border-color: #ffffff;
}

.btn-primary {
    color: #4e28d9;
    background-color: #ffffff;
    border-color: #4e28d9;
}

.btn-primary:hover {
    color: #4e28d9;
    background-color: #ffff;
    border-color: #4e28d9;
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

    label.labeltext{
         color:#4e28d9;
         font-weight: bold;
    }
</style>