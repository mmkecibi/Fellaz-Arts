<template>
  <div class="adminPanel container">
      <router-link to="/ManageProduct/Product">
        <button type="button" class="btn btn-primary btn-lg">Admin Products</button>
      </router-link>
      <router-link to="/ManageProduct/Category">
        <button type="button" class="btn btn-primary btn-lg">Admin Categories</button>
      </router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push('Signin');
    }
  }
}
</script>

<style>
.adminPanel{
    display : flex;
    flex-direction: column;
    align-items: center;
}
.adminPanel button{
    font-size: 30px;
    width: fit-content;
    margin: 55px 0;
}
</style>