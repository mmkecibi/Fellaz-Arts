<template>
  <div class="products-box container">
    <span class="title">{{ $t("Taxe") }} </span>   
    <router-link to="/ManageProduct/Taxe/AddTaxe">
        <button type="button" class="btn btn-success add-btn btn-lg">{{ $t("Add new Taxe") }}</button>
    </router-link>

       <table class="table-area">
          <tr>
            <th>{{$t("name")}}</th>
            <th>{{$t("value")}}</th>
            <th>{{$t("province")}}</th>
            <th></th>
            <th></th>
          </tr>
          <tr v-for="item in taxes" :key="item.id">
            <td>
              <strong> {{ item.name }}</strong>
            </td>
            <td>
              <strong> {{ item.value }}</strong>
            </td>
            <td>
              <strong> {{ item.provaince }}</strong>
            </td>
            <td>
              <button  class="delete-product">
                <NuxtLink :to="`/ManageProduct/Taxe/${item.id}`">
                  <i class="fa fa-edit"></i>  
                </NuxtLink>
              </button>
            </td>
            <td>
              <button @click="removetaxe(item.id)" class="delete-product">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
        async fetch({ store }) {
          await store.dispatch("orderstore/fetchgetTaxes");
        },
  name: 'Taxes',
  data() {
    return {
    };
  },

  computed: {
          taxes: {
        get: function () {
          let taxes = {...this.$store.state.orderstore.taxes};
          return taxes;
        },
      },
  },

  methods: {

             async fetchgetTaxes(){
                        return await  this.$store
                            .dispatch("orderstore/fetchgetTaxes")
                            .then((result) => {
                            })
                            .catch((error) => { this.$toasted.error(error, { duration: 3000 })});
                    },

              async removetaxe(id){
                  this.$store
                  .dispatch("orderstore/deleteTaxe",id )
                  .then((result) => {
                  if(result){
                    this.fetchgetTaxes();
                    this.$router.push("/ManageProduct/Taxe");
                }
              })
              .catch((error) => this.$toasted.error(error, { duration: 3000 }));
              },
  },
  created(){

  },

}
</script>