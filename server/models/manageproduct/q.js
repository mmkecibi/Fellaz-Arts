"use strict";
const db = require('../../config/db.js'); 
const utilsf = require( "../utils" );

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const moment = require('moment');
const modelUtils = utilsf.modelUtils.getInstance();

class Categoryquery {
    static getInstance() {
        return new Categoryquery();
    }
    constructor() {
        this.pool = null;
    }

    async getProductByPage(catid,limitpage,lastid){

        var params = {catid:catid,limitpage:limitpage,lastid:lastid};
        let qry = "";
        if(catid === 0){
                    qry = " select DISTINCT   p.id,  p.category_id,p.name,p.name_fr,p.name_ar, pp.photo,p.description,p.unitprice,p.discount,p.code,p.prixdachat,p.specialprix,p.stock,"
                    qry += " p.size,p.weight,pp.color,p.manufacturer,p.manufcode,p.vendorcode,p.isinstock,p.isspecialprix,p.review,p.starrating"
                    qry += " from products p "
                    qry += " left join (select productid,photo,color from productcolorphotos where isdisplay = 1 ) pp on pp.productid = p.id "
                    qry += " where  p.id > :lastid"
                    qry += " order by p.id"
                    qry += " Limit  :limitpage"
        }else{
                    qry = " select DISTINCT   p.id,  p.category_id,p.name,p.name_fr,p.name_ar, pp.photo,p.description,p.unitprice,p.discount,p.code,p.prixdachat,p.specialprix,p.stock,"
                    qry += " p.size,p.weight,pp.color,p.manufacturer,p.manufcode,p.vendorcode,p.isinstock,p.isspecialprix,p.review,p.starrating"
                    qry += " from products p "
                    qry += " left join (select productid,photo,color from productcolorphotos where isdisplay = 1 ) pp on pp.productid = p.id "
                    qry += " where  p.category_id = :catid and p.id > :lastid"
                    qry += " order by p.id"
                    qry += " Limit  :limitpage"
             }

            return  await   db.knex.raw(qry,params).then(function (prod) {
                            if (prod) {
                                return  prod[0];
                            }
                            })
                            .catch(function (err) {
                                return err;
                            })
     }


     async getProductByPageIds(catid,limitpage,lastid){

        var params = {catid:catid,limitpage:limitpage,lastid:lastid};
        let qry = "";
        if(catid === 0){
                qry = " select DISTINCT  p.id"
                qry += " from products p"
                qry += " where  p.id > :lastid"
                qry += " order by p.id"
                qry += " Limit  :limitpage"
        }
        else{
                qry = " select DISTINCT  p.id"
                qry += " from products p"
                qry += " where  p.category_id = :catid and p.id > :lastid"
                qry += " order by p.id"
                qry += " Limit  :limitpage"
        }

            return  await   db.knex.raw(qry,params).then(function (prod) {
                            if (prod) {
                                return  prod[0];
                            }
                            })
                            .catch(function (err) {
                                return err;
                            })
     }


     insertSlider  = async sliderdata => {

        await  db.knex('sliders')
        .insert({
                    title:sliderdata.title,
                    message:sliderdata.message,
                    photo: sliderdata.captures,
                 }).then(function (slider) {
                    return  true;
                 }) .catch(function (err) {
                    return false;
                })              
    };
    

    updateSlider = async sliderdata => {
    
        await db.knex('sliders').where({id: sliderdata.id })
        .update({
                    title:sliderdata.title,
                    message:sliderdata.message,
                    photo: sliderdata.captures,
            }).catch(function (err) {
                console.log(err);
            }); 
    }
    
     deleteSlider = async sliderid => {
    
        await  db.knex('sliders')
        .where({ id:sliderid })
        .del().then(function (slider) {
               return  true;
        })
        .catch(function (err) {
            console.log(" error  : ", err )
            return err;
        })
    }


    inserttCategory  = async catdata => {

        await  db.knex('categories')
        .insert({
                    name:catdata.name,
                    name_fr:catdata.name_fr,
                    name_ar:catdata.name_ar,
                    description:catdata.description,
                    description_fr:catdata.description_fr,
                    description_ar:catdata.description_ar,
                    slug:catdata.slug,
                    parent:catdata.parent,
                    photo: catdata.captures,
                 }).then(function (cat) {
                    return  true;
                 }) .catch(function (err) {
                    console.log('tag catdata err ', err)
                    return false;
                })              
    };

    updateCategory = async catdata => {

        await db.knex('categories').where({id: catdata.id })
        .update({
                    name:catdata.name,
                    name_fr:catdata.name_fr,
                    name_ar:catdata.name_ar,
                    description:catdata.description,
                    description_fr:catdata.description_fr,
                    description_ar:catdata.description_ar,
                    slug:catdata.slug,
                    parent:catdata.parent,
                    photo: catdata.captures,
                   // ModifiedBy: agentData.username
            }).catch(function (err) {
                console.log(err);
            }); 

    }

     deleteCategory = async catid => {

        await  db.knex('categories')
        .where({ parent:catid })
        .del().then(function (cat) {
               return  true;
        })
        .catch(function (err) {
            console.log(" error  : ", err )
            return err;
        })

        await  db.knex('products')
        .where({ category_id:catid })
        .del().then(function (prods) {
               return  true;
        })
        .catch(function (err) {
            console.log(" error  : ", err )
            return err;
        })

        await  db.knex('categories')
        .where({ id:catid })
        .del().then(function (cat) {
               return  true;
        })
        .catch(function (err) {
            return err;
        })
     };

     getAllCategories = async () => {
        return await  db.Category.Categories.forge()
        .fetch()
        .then(function (categories) {
            if (categories) {
               
                return  categories.toJSON();
            }
            return  null;
        })
        .catch(function (err) {
            return err;
        })
     };

     getallparentcategories = async () => {
        return await  db.Category.Categories.forge().query({where: {parent: 0}})
        .fetch()
        .then(function (categories) {
            if (categories) {
               
                return  categories.toJSON();
            }
            return  null;
        })
        .catch(function (err) {
            return err;
        })
     };
     getAllCategoriesByParent = async parentid => {

        return await db.Category.Categories.forge().query({where: {parent: parentid}})
        .fetch()
        .then(function (cat) {
        if (cat) {
            return  cat.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
     };

     getProductPhotosById = async productphotoid => {

        return await db.ProductColorPhoto.forge().query({where: {id: productphotoid}})
        .fetch()
        .then(function (prodphot) {
        if (prodphot) {
            return  prodphot.toJSON();
        }
        })
        .catch(function (err) {
            return err;
        })
     };

     getAllProductsByCategory = async catid => {

        if(catid > 0){
                        return await db.Product.Products.forge().query({where: {category_id: catid}})
                        .fetch({withRelated: ['productcolorphotos']})
                        .then(function (products) {
                        if (products) {
                            return  products.toJSON();
                        }
                        })
                        .catch(function (err) {
                            return err;
                        })
        }
        else{
                        return await db.Product.Products.forge()
                        .fetch({withRelated: ['productcolorphotos']})
                        .then(function (products) {
                        if (products) {
                            return  products.toJSON();
                        }
                        })
                        .catch(function (err) {
                            return err;
                        })
        }
     };



     inserttProduct = async proddata => {

             return  await  db.knex('products')
               .insert({
                           category_id : proddata.categoryId,
                           name : proddata.name, 
                           name_fr : proddata.name_fr, 
                           name_ar : proddata.name_ar, 
                           description : proddata.description,
                           description_fr : proddata.description_fr,
                           description_ar : proddata.description_ar,
                           unitprice : proddata.price,
                           discount : proddata.discount,
                           code: proddata.code, 
                           prixdachat: proddata.prixdachat, 
                           specialprix: proddata.specialprix, 
                           stock: proddata.stock, 
                           size: proddata.selectedsizes, 
                           weight: proddata.selectedweights,  
                           manufacturer: proddata.manufacturer, 
                           manufcode: proddata.manufcode, 
                           vendorcode: proddata.vendorcode,
                           isinstock: proddata.isinstock, 
                           isspecialprix: proddata.isspecialprix, 
                           review: proddata.review, 
                           starrating: proddata.starrating,
                           is_new_arrival: proddata.isnewarrivalproduct, 
                           is_hot_product: proddata.ishotproduct,  
                        }).returning('id') .then(([id]) => { return id }).catch(function (err) { console.log(err); });
        };

        updateProductPhoto = async prodphotodata => {
            await db.knex('products').where({id: prodphotodata.productid })
                .update({
                          photo: prodphotodata.captures,
                       }).then(function () {
                        return  true;
                 })
                 .catch(function (err) {
                     return err;
                 })
       };

    insertProductPhotos = async photoproductdata => {


            return  await  db.knex('productcolorphotos')
              .insert({
                          productid : photoproductdata.productid,
                          color : photoproductdata.color,
                          extraprice : photoproductdata.extraprice, 
                          photo: photoproductdata.captures,
                          name: photoproductdata.name,
                          isdisplay:photoproductdata.isdisplay
                       }).returning('id') .then(async ([id]) =>  {
                        var  prodpicupdatedata = {} 
                        prodpicupdatedata.productid = photoproductdata.productid;
                        prodpicupdatedata.id = id;
                        await this.updateProductPhotoToDisplay(prodpicupdatedata)  
                        return id }).catch(function (err) { console.log(err); });

                      

       };
 
       updateProductPhotoToDisplay = async prodpicupdatedata => {

        await db.knex('productcolorphotos').where({productid: prodpicupdatedata.productid })
        .update({
                    isdisplay:0
            }).catch(function (err) {
                console.log(err);
            }); 

        await db.knex('productcolorphotos').where({id: prodpicupdatedata.id })
            .update({
                        isdisplay:1
                }).catch(function (err) {
                    console.log(err);
                }); 

    }



       deleteProductColorPhoto = async prodcolphotoid => {
        await  db.knex('productcolorphotos')
        .where({ id:prodcolphotoid })
        .del().then(function (prod) {
               return  true;
        })
        .catch(function (err) {
            return err;
        })
     };

    updateProduct = async proddata => {

        await db.knex('products').where({id: proddata.id })
        .update({
                    category_id : proddata.categoryId,
                    name : proddata.name, 
                    name_fr : proddata.name_fr, 
                    name_ar : proddata.name_ar, 
                    description : proddata.description,
                    description_fr : proddata.description_fr,
                    description_ar : proddata.description_ar,
                    unitprice : proddata.price,
                    discount : proddata.discount,
                    code: proddata.code, 
                    prixdachat: proddata.prixdachat, 
                    specialprix: proddata.specialprix, 
                    stock: proddata.stock, 
                    size: proddata.selectedsizes, 
                    weight: proddata.selectedweights,  
                    manufacturer: proddata.manufacturer, 
                    manufcode: proddata.manufcode, 
                    vendorcode: proddata.vendorcode,
                    isinstock: proddata.isinstock, 
                    isspecialprix: proddata.isspecialprix, 
                    review: proddata.review, 
                    starrating: proddata.starrating, 
                    is_new_arrival: proddata.isnewarrivalproduct, 
                    is_hot_product: proddata.ishotproduct, 
                   // ModifiedBy: agentData.username
            }).catch(function (err) {
                console.log(err);
            }); 

    }

        deleteProduct= async prodid => {
           await  db.knex('products')
           .where({ id:prodid })
           .del().then(function (prod) {
                  return  true;
           })
           .catch(function (err) {
               return err;
           })
        };
   
        getAllProducts = async () => {
           return await  db.Product.Products.forge()
           .fetch({withRelated: ['productcolorphotos']})
           .then(function (products) {
               if (products) {
                  
                   return  products.toJSON();
               }
               return  null;
           })
           .catch(function (err) {
               return err;
           })
        };
        
        getProductById = async prodid => {
   
           return await db.Product.forge({id: prodid}) 
           .fetch({withRelated: ['productcolorphotos']})
           .then(function (prod) {
           if (prod) {
               return  prod.toJSON();
           }
           })
           .catch(function (err) {
               return err;
           })
        };

        getAllHotProducts = async () => {
   
            return await db.Product.Products.forge({is_hot_product: 1}) 
            .fetch({withRelated: ['productcolorphotos']})
            .then(function (prod) {
            if (prod) {
                return  prod.toJSON();
            }
            })
            .catch(function (err) {
                return err;
            })
         };


         getAllNewArrivalProducts = async () => {
   
            return await db.Product.Products.forge({is_new_arrival: 1}) 
            .fetch({withRelated: ['productcolorphotos']})
            .then(function (prod) {
            if (prod) {
                return  prod.toJSON();
            }
            })
            .catch(function (err) {
                return err;
            })
         };


        getCategoryById = async catid => {
   
            return await db.Category.forge({id: catid}) 
            .fetch()
            .then(function (cat) {
            if (cat) {
                return  cat.toJSON();
            }
            })
            .catch(function (err) {
                return err;
            })
         };

         getSliderById = async sliderid => {
   
            return await db.Slider.forge({id: sliderid}) 
            .fetch()
            .then(function (slider) {
            if (slider) {
                return  slider.toJSON();
            }
            })
            .catch(function (err) {
                return err;
            })
         };

         getAllSliders = async () => {
           return await  db.Slider.Sliders.forge()
            .fetch()
            .then(function (sliders) {
                if (sliders) {
                    return  sliders.toJSON();
                }
                return  null;
            })
            .catch(function (err) {
                return err;
            })
         };

         searchproductcreatedate = async createat => {
            return await this.search("date",createat)
          }
         searchproductbyname = async name => {
            return await this.search("name",name)
         }
         searchproductbycode = async code => {
            return await this.search("code",code)
         }
         search = async(searchtype,searchcriteria) => {
    
              var qrycondition = "";
             switch (searchtype) {
                 case "name":
                     qrycondition = "  where name like '%"+searchcriteria+"%'";
                   break;
                 case "code":
                     qrycondition = "  where code like '%"+searchcriteria+"%'";
                   break;
                 case "date":
                     qrycondition = "  where  DATE_FORMAT(created_at,'\%Y-\%m-\%d')  ='"+searchcriteria+"'";
                   break;
               }
    
             var params = {searchcriteria};
             let qry = " SELECT * "
                          qry += " FROM   products  "
                          qry += qrycondition
     
             return  await   db.knex.raw(qry).then(function (products) {
                         if (products) {

                             return  products[0];
                         }
                         })
                         .catch(function (err) {
                             console.log(" err   : ", err)
                             return err;
                         })
          }
      
 }
exports.Categoryquery = Categoryquery;