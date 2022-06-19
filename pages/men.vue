<template>
  <div>
    <app-store-grid />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppStoreGrid from "~/components/AppStoreGrid.vue";

export default {

  components: {
    AppStoreGrid
  },
  computed: {

  }
};
</script>

<style lang="scss" scoped>
</style>