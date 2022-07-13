<template>
  <section>
    <h2>
      <span class="section-title">{{$t("Featured Products")}}</span>
    </h2>
    <div class="featureditems">
      <div class="item" v-for="product in featuredProducts" :key="product.id">
        <img :src="`/products/${product.img}`" />
        <h3>{{($i18n.locale === 'en'?product['name']:product['name_'+$i18n.locale])}}</h3>
        <h4>{{ product.price | dollar }}</h4>
        <NuxtLink :to="`/product/${product.id}`">
          <button class="multi-item">{{$t("View Item")}} ></button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
 img{
  width:200px !important;
}
section {
  margin-top: 60px;
}
.section-title {
    font-size: 32px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 8%;

    position: relative;
    color: #181c46 !important;
        font-size: 32px !important;
    font-weight: 600 !important;
    text-transform: capitalize !important;
    margin-bottom: 8% !important;

}
.featureditems {
  width: 100%;
  margin: 20px 0 70px;
  .item {
  /*  border: 1px solid #eee2dc;
    box-shadow: 0 3px 10px 0px #eee;*/
    border-radius: 40px;
    padding: 10px 20px 30px;
    min-height: 150px;
    justify-self: center;
    align-self: center;
    text-align: center;
   /* background:#2f2d4a;*/
  }
}

h4 {
  color: #ffff;
  margin: 10px 0;
}

h2 {
  color: #2f2d4a!important;
  text-align: center;
  overflow: hidden;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    color: #212856;
}

.multi-item {
    color: #edeaf5 !important;
}
h2 span {
  display: inline-block;
  position: relative;
}
h2 span:after,
h2 span:before {
  content: " ";
  display: block;
  height: 1px;
  width: 1000px;
  background: #f6f7f8;
  position: absolute;
  top: 50%;
}
h2 span:before {
  left: -1010px;
}
h2 span:after {
  right: -1010px;
}
img{
      border: 1px solid #eee2dc;
    box-shadow: 0 3px 10px 0px #eee;
  /*  border-radius: 40px;*/
}
@media screen and (max-width: 699px) {
  .featureditems {
    width: 83vw;
    margin-left: 5vw;
    div {
      padding: 10px 20px;
      margin-bottom: 10px;
    }
  }

  img {
    width: initial;
  }
}

@media screen and (min-width: 700px) {
  .featureditems {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    div {
      padding: 40px 50px;
    }
  }

  img {
    width: 100%;

  }
}
</style>
