<template>
  <div>
    <app-store-grid />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppStoreGrid from "~/components/AppStoreGrid.vue";

export default {
  components: {
    AppStoreGrid
  },
  computed: {
  }
};
</script>