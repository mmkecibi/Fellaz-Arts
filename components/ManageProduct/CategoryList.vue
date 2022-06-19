<script>

export default {
    name:'CategoryList',
    data() {
      return {
                checkedCategories:[],
      };
    },
    props: {
        modelValue: Array,
        items: Array
    },
    render(){
        return this.renderList(this.items);
    },
    computed: {
     categories(){
         if(this.search == ''){
             this.all = this.datalist   
         }
         return this.all
     }
    },
    methods: {
        setcategorieslist(){
        this.$emit('setcategorieslist', this.setcategorieslist)
      },
      renderList(items){
        var h = this.$createElement
        let vm = this;

        return h('ul', {class: 'list-unstyled'}, items.map(function(item){
 
            return h('li',[
                h('div', {class: 'check'}, [
                    h('input',{
                                    attrs: {
                                             type: 'checkbox',
                                             id:item.id,
                                            },
                                    on: {
                                            click: (e) =>  vm.checkList(item.id)
                                        },
                                    ref: 'selectAllCheckbox',
                                    class:"check-input",
                              }),
                    h('label', {for: item.id},(vm.$i18n.locale === 'en'?item['name']:item['name_'+vm.$i18n.locale])),
                    h('span', {class: 'deletecat', on: {click: (e) =>  vm.deleteCat(item.id)}},[
                        h('i', {class: 'fa fa-trash'})
                    ]),
                    h('span', {class: 'deletecat', on: {click: (e) =>  vm.editCat(item.id)}},[
                        h('i', {class: 'fa fa-edit'})
                    ]),
                ]),
                (Array.isArray(item.child) === true && item.child.length >=1) ? vm.renderList(item.child) : ''
            ])
        }))
      },
      checkList(item){
            if(this.checkedCategories.includes(item)) {
                const removeItem = this.checkedCategories.map(word =>{
                    if(word != item){
                        return word;
                    }else{
                        return 0;
                    }
                })
                this.checkedCategories = removeItem.filter(word => word >= 1)
                this.setcheckedcategories()
            } else{
                this.checkedCategories.push(item)
                this.setcheckedcategories()
            }
      },
      setcheckedcategories(){
        this.$emit('emitcheckedcategoriestoinput', this.checkedCategories)
      },
      deleteCat(id){
        this.$emit('emitdeleteCat', id);
      },
      editCat(id){
            this.$router.push(`/ManageProduct/Category/${id}`);
      }
    },
}
</script>

<style>
    .deletecat{
        color:red;
        margin-left: 8px;
        cursor:pointer;
    }
</style>