<template>
  <div class="product-display">
    <div class="row">
      <div class="col-6">
        <img :src="product.imageURL" :alt="product.name" class="img-fluid">
      </div>
      <div class="col-4">
        <h1>{{product.name}}</h1>
        <h6 class="category">{{category.categoryName}}</h6>
        <h5>{{ $t("Price")}}: <span>$ {{product.price}}</span></h5>
        <h5>{{product.description}}</h5>
        <div class="features">
          <h5><strong>{{ $t("Features")}}</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> 
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li> 
          </ul>
        </div>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success btn-lg">
          {{ $t("Buy Now")}} 
          <ion-icon name="card-outline" v-pre></ion-icon>
        </button>
        <button type="button" class="btn btn-primary btn-lg">
          {{ $t("Add to Cart")}}    
          <ion-icon name="cart-outline" v-pre></ion-icon>
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  data(){
    return {
      product : {},
      category : {},
      id : null
    }
  },
  props : ["products", "categories"],
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(product => product.id == this.id);
    this.category = this.categories.find(category => category.id == this.product.categoryId);
  }
}
</script>