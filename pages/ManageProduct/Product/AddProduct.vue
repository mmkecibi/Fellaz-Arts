<template>
  <div>
     <div v-if="step == 'addinfo'"><ProductInfo /></div> 
     <div v-if="step == 'addcolorandphotos'"><ProductImageColor /> </div>
  </div>
</template>

<script>
import ProductInfo from '~/components/ManageProduct/Product/ProductInfo';
import ProductImageColor from '~/components/ManageProduct/Product/ProductImageColor';
export default {
  data(){
          return {

          }
  },
  components : {ProductInfo,ProductImageColor}, 
  computed: {
        step() {
          return  this.$store.state.product.addstep;
        }
  },
  created(){
   
  },

  methods : {
 
   },
  mounted() {
                
  },
}
</script>
<style>
.btn-primary.disabled, .btn-primary:disabled {
  color: #fff;
  background-color: #4e28d9;
  border-color: #4e28d9;
}
</style>