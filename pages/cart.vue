<template>
  <div>
    <app-cart-steps />
    <hr />
    <section v-if="cartUIStatus === 'idle'">
      <h1 class="center ">{{ $t("Your Cart") }}</h1>
      <app-cart-display />
    </section>
    <section v-else-if="cartUIStatus === 'shipping'" >
      <h1 class="center">{{ $t("Shipping") }}</h1>
      <app-cart-shipping />
    </section>
    <section v-else-if="cartUIStatus === 'payementtype'" class="loader">
      <app-cart-payement-type />
    </section>
    <section v-else-if="cartUIStatus === 'checkout'" class="loader">
      <app-cart-check-out />
    </section>
    <section v-else-if="cartUIStatus === 'success'" class="success">
      <h1 class="center">{{ $t("Order Complete") }}</h1>
      <app-cart-complete/>
    </section>

    <section v-else-if="cartUIStatus === 'failure'">
      <p>{{ $t("Oops, something went wrong. Redirecting you to your cart to try again.") }}</p>
    </section>

    <app-sales-boxes />
  </div>
</template>

<script>
import AppLoader from "~/components/AppLoader.vue";
import AppCartSteps from "~/components/AppCartSteps.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppCartDisplay from "~/components/AppCartDisplay.vue";
import AppCartShipping from "~/components/AppCartShipping.vue";
import AppCartPayementType from "~/components/AppCartPayementType.vue";
import AppCartCheckOut from "~/components/AppCartCheckOut.vue";
import AppCartComplete from "~/components/AppCartComplete.vue";

export default {
  components: {
    AppCartDisplay,
    AppCartShipping,
    AppSalesBoxes,
    AppCartSteps,
    AppLoader,
    AppCartPayementType,
    AppCartCheckOut,
    AppCartComplete
},
  computed: {
    cartUIStatus() {
      return this.$store.state.cartstore.cartUIStatus;
    },
  },
  mounted() {
       this.$store.commit("cartstore/updateCartUI", "idle");
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}

.success {
  text-align: center;
}
.center{
  color:#4e28d9;
}
section.success {
    color: white;
    color: var(--text-color, white);
    background-color: rgb(241, 248, 245)!important;
    background-color: white!important;
    border-color: white!important;
    border-color: white!important;
}
</style>