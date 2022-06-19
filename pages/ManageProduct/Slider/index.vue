<template>
  <div class="products-box container">
    <h2>Our Sliders</h2>
<img v-if="displayloadingall" src="/img/loader_block.gif" />
      <aside>
          <router-link to="/ManageProduct/Slider/AddSlider">
              <button type="button" class="btn btn-success add-btn btn-lg">Add a new Slider</button>
          </router-link>
      </aside>  

    <div>
      <section >

        <table v-if="sliders != null" >
          <tr>
            <th>Title</th>
            <th>message</th>
            <th>photo</th>
            <th></th>
            <th></th>
          </tr>
          <tr v-for="item in sliders" :key="item.id">
            <td >
              <img :src="`${item.photo[0]}`" :alt="item.title" class="product-img" />
              <h6 class="product-name">{{ item.title }}</h6>
            </td>
            <td>
                <v-textarea
                    v-model.trim="item.message "
                    rows="2"
                ></v-textarea>
            </td>
            <td>
              <button  class="delete-product">
                <NuxtLink :to="`/ManageProduct/slider/${item.id}`">
                  <i class="fa fa-edit  editicon"></i>  
                </NuxtLink>
              </button>
            </td>
            <td>
              <button @click="removeslider(item.id)" class="delete-product">
                <i class="fa fa-trash  editicon"></i>
              </button>
            </td>
          </tr>
        </table>
      </section>

    </div>

  </div>
</template>

<script>

import { mapState, mapGetters } from "vuex";
export default {
  name: 'Slider',
  data() {
    return {
      sliders:[],
      displayloadingall:true,
    };
  },

  computed: {
            },

  methods: {
 
      async fetchAllSliders(){
              return await  this.$store
                  .dispatch("product/fetchallsliders")
                  .then((result) => {
                      this.sliders = result; 
                  })
                  .catch((error) => { this.$toasted.error(error, { duration: 3000 })});
              },

       async removeslider(id){
                  this.$store
                  .dispatch("product/deleteslider",id )
                  .then((result) => {
                  if(result){
                    this.fetchAllSliders();
                    this.$router.push("/ManageProduct/Slider");
                }
              })
              .catch((error) => this.$toasted.error(error, { duration: 3000 }));
              },

        async  editslider(id){
                    this.$store
                      .dispatch("product/editSlider",id )
                      .then((result) => {
                      if(result){
                        this.fetchAllSliders();
                    }
                })
                .catch((error) => this.$toasted.error(error, { duration: 3000 }));
                },                  
    },
    created(){
      this.fetchAllSliders();
  },


}
</script>