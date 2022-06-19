<template>
  <section>
    <div class="shopping">
      <h2 :class="{ active: cartUIStatus === 'idle' }">01</h2>
      <h4 class="steptitle">{{$t("Shopping Cart")}}</h4>
    </div>
    <div class="Shipping">
      <h2 :class="{ active: cartUIStatus === 'shipping' && cartCount > 0 }">02</h2>
      <h4 class="steptitle">{{$t("Shipping")}}</h4>
    </div>
    <div class="payementtype  center">
      <h2 :class="{ active: cartUIStatus === 'payementtype' && cartCount > 0 }">03</h2>
      <h4 class="steptitle">{{$t("Payment Type")}}</h4>
    </div>
    <div class="checkout">
      <h2 :class="{ active: cartUIStatus === 'checkout' && cartCount > 0 }">04</h2>
      <h4 class="steptitle">{{$t("Check out")}}</h4>
    </div>
    <div class="order">
      <h2 :class="{ active: cartUIStatus === 'success' }">05</h2>
      <h4 class="steptitle">{{$t("Order Complete")}}</h4>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    cartUIStatus() {
      return this.$store.state.cartstore.cartUIStatus;
    },
    ...mapGetters({ cartCount: 'cartstore/cartCount' })
  }
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
  text-align: center;
  width: 80%;
  margin: 10px auto 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

h2 {
  width: 60px;
  height: 60px;
  border-radius: 10000px;
  border: 1px solid #4e28d9;
  padding-top: 15px;
  color: #4e28d9;
  &.active {
    background: #4e28d9;
    border: 1px solid #4e28d9;
    color: white;
  }
}
.steptitle{
    color: #4e28d9;
}
.h2, h2 {
    font-size: 1.4rem !important;
}
h4 {
  margin-top: 20px;
  color: #555;
}
.h4, h4 {
    font-size: 0.8rem !important;
}

@media screen and (max-width: 600px) {
  section {
    grid-column-gap: 30px !important;
  }
}
</style>