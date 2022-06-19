<template>
  <div class="products-box  container">
    <span class="title">{{ $t("All Categories") }}</span>
    <div class="picker">
          <div class="select" @click="openPicker"><span style="  color:#4e28d9;">{{ $t("Create  a Category") }} </span></div>
          <div class="picker-box" v-show="picker">
            <category-input @stepUpdated="mergecategoryData"  @setcheckedcategories="checkedCategorieslist" @setCloseCategories="openPicker" @setdeletecat="deletecat" :datalist="categories" ></category-input>
          </div>
    </div>
  </div>
</template>

<script>
import CategoryInput from '~/components/ManageProduct/CategoryInput';
export default {
  name: 'Category',
  data() {
    return {
      allcategories:[],
      categories:[],
      category: {},
      catexist:false,
      checkedCategories:[],
      categoriesbyparent:[],
      categoriestest:[],
      picker:false,
    };
  },
  components : {
    CategoryInput,
    joinCategories(){
            if(this.checkedCategorieslist.length >= 1){
                return this.checkedCategorieslist.join(', ')
            }else{
              return '-- Select category --'
            }
    }
  }, 
  created(){
    this.nestedCategories();
  },
 methods: {
 
  async getAllCategories(){
   return await  this.$store
        .dispatch("product/fetchallcategories")
        .then((result) => {
          return result;
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
    },

  async getAllCategoriesByParent(parentid){
    return await  this.$store
        .dispatch("product/fetchAllCategoriesByParent", parentid)
        .then((result) => {
         return result;
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
    },

    nestedCategories(){ 
                        this.getAllCategories().then(res => {
                                                                this.categories = this.mergeCategories(res.data)
                                                            })
    },
    mergeCategories(data){
      const Arr = [];
        if(data !== null && data !== undefined && data.length > 0){
            data.forEach(item => { 
              if(item.parent === 0) { 
                const Obj = { id:item.id,name:item.name,name_fr:item.name_fr,name_ar:item.name_ar,slug:item.slug,description:item.description, child:[]}
                if(item.id != 0){ 

                  this.getAllCategoriesByParent(item.id).then( res2 => 
                                                                      {  
                                                                        if(res2.length >= 1){ 
                                                                          Obj.child = res2 
                                                                        } 
                                                                      }) 
                }
                Arr.push(Obj)
              }
            });
      }
      return Arr
    },
    mergecategoryData({ categoryObj }) {
      this.catexist = false;
      this.categories.filter(item => {
                        if(item.name.toLowerCase().indexOf(categoryObj.name.toLowerCase()) !== -1) 
                        {
                          this.catexist = true;
                        }
                    })   
      if(!this.catexist)
       {
        categoryObj.id =68;
        categoryObj.slug = categoryObj.name;
        this.categories.push(categoryObj)

        this.$store
        .dispatch("product/createCategory",categoryObj)
        .then((result) => {
          this.nestedCategories()
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
       }
    },

    checkedCategorieslist(checkedCategories){
          this.checkedCategories = checkedCategories;
    },
    openPicker(ispoen){
      this.picker = ispoen;
    },
    deletecat(id){
      this.$store
        .dispatch("product/deleteCategory",id )
        .then((result) => {
          if(result){
            this.nestedCategories()
          }
        })
        .catch((error) => this.$toasted.error(error, { duration: 3000 }));
    }
  },
}
</script>