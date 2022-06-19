<template>
  <div class="addCategory container">
    <span class="cat_title">{{ $t("Create new Category") }}</span>
    <form>
      <div class="form-group">
        <label>{{ $t("Category Name") }}</label>
        <input type="text" class="form-control" v-model="categoryName" required>
      </div>
      <div class="form-group">
        <label>{{ $t("name_fr") }} *</label>
        <input type="text" class="form-control" v-model="categoryName_fr" required>
      </div>
      <div class="form-group">
        <label>{{ $t("name_ar") }} *</label>
        <input type="text" class="form-control" v-model="categoryName_ar" required>
      </div>
      <div class="form-group">
        <label>{{ $t("Description") }}</label>
        <input type="text" class="form-control" v-model="description" required>
      </div>
      <div class="form-group">
        <label>{{ $t("description_fr") }} *</label>
        <input type="text" class="form-control" v-model="description_fr" required>
      </div>
      <div class="form-group">
        <label>{{ $t("description_ar") }} *</label>
        <input type="text" class="form-control" v-model="description_ar" required>
      </div>
      <div class="form-group">
        <label>{{ $t("ImageURL") }}</label>
        <input type="url" class="form-control" v-model="imageURL" required>
      </div>
      <button type="button" class="btn btn-primary" @click="addCategory">{{ $t("Submit") }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      categoryName : null,
      categoryName_fr : null,
      categoryName_ar : null,
      description : null,
      description_fr : null,
      description_ar : null,
      imageURL : null, 
    }
  },
  props : ["baseURL", "categories"],
  methods : {
    addCategory : async function() {
      const newCategory = {
        categoryName : this.categoryName,
        categoryName_fr : this.categoryName_fr,
        categoryName_ar : this.categoryName_ar, 
        description : this.description,
        description_fr : this.description_fr,
        description_ar : this.description_ar,
        imageUrl : this.imageURL,
      }
      await fetch(this.baseURL+"category/create", {
          method : "POST",
          body : JSON.stringify(newCategory),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then((res) => {
          if(!res.ok){
            throw Error("Status code error!!");
          }
          //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.replace("/category");
      })
      .catch((err) => console.log(err));
    }
  }
}
</script>

<style>
.cat_title {
  width:80%;
  margin-left: 50%;
  font-size: 28px;
  color:#4e28d9;
}
.addCategory h2 {
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}
</style>