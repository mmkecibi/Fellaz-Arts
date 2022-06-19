<template>
  <div class="products-box container">
    <span class="title">{{ $t("Order Detail")}}</span>
<!-- <img v-if="displayloadingall" src="/img/loader_block.gif" /> -->
    <div>
      <section >
       
        <table>
          <tr>
            <th>{{ $t("Product")}}</th>  
            <th></th>
            <th>{{ $t("Price")}}</th>
            <th>{{ $t("Discount")}}</th>
            <th>{{ $t("Quantity")}}</th>
            <th></th>
          
          </tr>
          <tr v-for="item in orderdetail" :key="item.id">
            <td>
              <img  v-if=" item.product_photo "  :src="`${item.product_photo[0]}`" :alt="item.product_order_name" class="product-img" />
              <img v-else src="/products/avatar_product.png" class="product-img" />
              <h3 class="product-name"><span class="circle" :style="{color: item.product_color}"></span>{{($i18n.locale === 'en'?item['product_order_name']:item['product_order_name_'+$i18n.locale])}}</h3>

                  <div class="div-size-weight">          
                            <div v-if="item.size !== undefined && item.size !== null " class="size-weight">
                              <strong v-if="item.size" >{{ $t("Size")}}: {{ item.size.size }}</strong>
                            </div>
                            <div v-if="item.weight !== undefined && item.weight !== null " class="size-weight">
                              <strong v-if="item.weight" >{{ $t("Weight")}}: {{ item.weight.weight }}</strong>
                            </div>
                  </div> 


            </td>
            <td>

            </td>
            <td>
              <h4 class="price">{{ item.product_order_price | dollar }}</h4>
            </td>
            <td>
              <strong> {{ item.product_order_discount }}</strong>
            </td>
            <td>
              <strong> {{ item.product_order_quantity }}</strong>
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
  name: 'OrderDetail',
  data() {
    return {
    };
  },

  async fetch({ store, params }) {
    await store.dispatch("orderstore/fetchorderDetailslistbyorderid", params.id);
  },
  computed: {
                orderdetail: {
                    get: function () {
                    let orderdetail = [...this.$store.state.orderstore.orderdetail];
                    return orderdetail;
                    },
                },
            },
  methods: {
          
    },
    created(){
    },
}
</script>
<style>
.circle:before {
    content: " ●";
    font-size: 48px;
    cursor: pointer;
}
</style>