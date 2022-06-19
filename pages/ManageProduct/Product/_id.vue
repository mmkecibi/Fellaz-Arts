<template>
  <div>

    <div class="profil-manage">
      <div >
        <div class="profile-main">
          <div class="profile-left">
            <!-- <aside class="menu is-hidden-mobile"> -->
            <aside class="menu">
              <p class="menu-label"></p>
              <ul class="menu-list">
                <li>
                  <!-- display Personal Information -->
                  <a
                    @click.prevent="
                      navigateTo(1);
                      navigatetopos();
                    "
                    :class="activeComponentClass(1)"
                    class="subtitlehover"
                  >
                    {{ $t("Product Info") }}
                  </a>
                </li>
                <li>
                  <!-- display Address -->
                  <a
                    @click.prevent="
                      navigateTo(2);
                      navigatetopos();
                    "
                    :class="activeComponentClass(2)"
                    class="subtitlehover"
                  >
                    {{ $t("Product Images") }}
                  </a>
                </li>
                <li>
                  <!-- display Address -->
                  <a href="/ManageProduct/Product"  class="subtitlehover">
                      <span class="menu-text" style="color:white; font-size: 18px; color:grey;">{{ $t("Exit") }}</span>
                  </a>
                </li>
                
              </ul>
              <br />
            </aside>
          </div>
          <div class="navigatetopos profile-center">
            <keep-alive>
              <component
                @agentclientValueUpdate="handleAgentUpdate"
                :is="activeComponent"
                :formproduct="formproduct"
              />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ToolsImageMixin from "~/mixins/ToolsImageMixin";
import MultiComponentMixin from "~/mixins/MultiComponentMixin";

import UpdateProductInfo from '~/components/ManageProduct/Product/UpdateProductInfo';
import UpdateProductImageColor from '~/components/ManageProduct/Product/UpdateProductImageColor';

export default {
  // middleware: 'agent',
  layout: "default",
  components: {
    UpdateProductInfo,
    UpdateProductImageColor,
  },
  mixins: [ToolsImageMixin,MultiComponentMixin],
      async fetch({ store, params }) {
          await store.dispatch("product/fetchProductById", params.id);
        },
  data() {
    return {
      steps: [
        "UpdateProductInfo",
        "UpdateProductImageColor",
      ],
      activeStep: 1,
    };
  },

  computed: {
    ...mapState({
      canUpdateAgent: true,
    }),
    activeComponent() {
      return this.steps[this.activeStep - 1];
    },
  formproduct: {
        get: function () {
          let arryproducts = {...this.$store.state.product.products};
          return arryproducts;
        },
      },
  },
  methods: {
    handleAgentUpdate({ value, field, isValid }) {
    },

    navigatetopos() {
      $(".navigatetopos")[0].scrollIntoView();
    },
  },
};
</script>

<style>
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #ffffff;
    border-color: #ffffff;
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
</style>