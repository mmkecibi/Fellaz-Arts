const db = require('../config/db.js'); 
const passport = require('passport');
const manageproductQuery = require('../models/manageproduct/q');
const manageproductq = manageproductQuery.Categoryquery.getInstance();

const cartQuery = require('../models/carts/q');
const cartq = cartQuery.Cartquery.getInstance();


exports.getAllCategories =  async (req, res, next) => {

        return await manageproductq.getAllCategories() 
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      }
exports.getAllSliders =  async (req, res, next) => {

        return await manageproductq.getAllSliders() 
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      }
exports.getCategoryById =  async (req, res, next) => {
        const catid = req.params.catid;
        return await manageproductq.getCategoryById(catid)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.getSliderById =  async (req, res, next) => {
        const sliderid = req.params.sliderid;
        return await manageproductq.getSliderById(sliderid)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.getTaxeById =  async (req, res, next) => {
        const id = req.params.id;
        return await manageproductq.getTaxeById(id)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.getallparentcategories =  async (req, res, next) => {

        return await manageproductq.getallparentcategories() 
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      }
exports.getAllCategoriesByParent =  async (req, res, next) => {
        const parentid = req.params.parentid;
        return await manageproductq.getAllCategoriesByParent(parentid)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.getProductPhotosById =  async (req, res, next) => {
        const productphotoid = req.params.productphotoid;
        return await manageproductq.getProductPhotosById(productphotoid)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.createCategory = async (req, res, next) => {
        const catdata = req.body;

        return await manageproductq.inserttCategory(catdata)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      };

exports.createSlider = async (req, res, next) => {
        const sliderdata = req.body;

        return await manageproductq.insertSlider(sliderdata)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      };
exports.createProduct = async (req, res, next) => {
        const proddata = req.body;
        return await manageproductq.inserttProduct(proddata)
        .then((id) => {return res.json(id)})
        .catch(error =>   { return  res.status(422).send(error) })
      };
exports.createProductPhotos = async (req, res, next) => {
        const photoproductdata = req.body;

        return await manageproductq.insertProductPhotos(photoproductdata)
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      };
exports.deleteCategory = async (req, res) => {
        const catid = req.params.catid;
         await manageproductq.deleteCategory(catid)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      }    
exports.deleteSlider = async (req, res) => {
        const sliderid = req.params.sliderid;
         await manageproductq.deleteSlider(sliderid)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      }   
exports.deleteProductColorPhoto  = async (req, res) => {
        const prodcolphotoid = req.params.prodcolphotoid;
         await manageproductq.deleteProductColorPhoto(prodcolphotoid)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      }   
exports.getAllProducts =  async (req, res, next) => {

        return await manageproductq.getAllProducts() 
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      }
exports.getProductById =  async (req, res, next) => {
        const prodid = req.params.prodid;
        return await manageproductq.getProductById(prodid)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.getAllProductsByCategory =  async (req, res, next) => {
        const catid = req.params.catid;
        return await manageproductq.getAllProductsByCategory(catid)
        .then((result) => {return res.json(result)})
        .catch(error =>   {   return  res.status(422).send(error) })
      }

exports.getAllHotProducts =  async (req, res, next) => {
        return await manageproductq.getAllHotProducts()
        .then((result) => {return res.json(result)})
        .catch(error =>   {   return  res.status(422).send(error) })
      }

exports.getAllNewArrivalProducts =  async (req, res, next) => {
        return await manageproductq.getAllNewArrivalProducts()
        .then((result) => {return res.json(result)})
        .catch(error =>   {   return  res.status(422).send(error) })
      }


exports.getProductsByCategory =  async (req, res, next) => {
        const catid = req.params.catid;
        return await manageproductq.getAllProductsByCategory(catid)
        .then((result) => {return res.json(result)})
        .catch(error =>   {   return  res.status(422).send(error) })
      }

exports.searchproductcreatedate =  async (req, res, next) => {
        const createat = req.params.createat;
        return await manageproductq.searchproductcreatedate(createat)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.searchproductbyname =  async (req, res, next) => {
        const name = req.params.name;
        return await manageproductq.searchproductbyname(name)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }
exports.searchproductbycode =  async (req, res, next) => {
        const code = req.params.code;
        return await manageproductq.searchproductbycode(code)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }


exports.deleteProduct = async (req, res) => {
        const prodid = req.params.prodid;
         await manageproductq.deleteProduct(prodid)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      } 

exports.getTaxes = async (req, res) => {
         await manageproductq.getTaxes()
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      }      

exports.deleteTaxe = async (req, res) => {
        const id = req.params.id;
         await manageproductq.deleteTaxe(id)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      } 
exports.createTaxe = async (req, res, next) => {
        const taxedata = req.body;
        return await manageproductq.insertTaxe(taxedata)
        .then((result) => {return res.json("true")})
        .catch(error =>   { return  res.status(422).send(error) })
      };
exports.updateTaxe = async (req, res, next) => {
        const taxedata = req.body;
        return await manageproductq.insertTaxe(taxedata)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      };

exports.addItemToCart = async (req, res, next) => {
          const cartdata = req.body;

          return await cartq.inserttCart(cartdata)
          .then((result) => {return result;})
          .catch(error =>   {return  res.status(422).send(error) })
      };
exports.cartbyclient = async (req, res) => {
        const id = req.params.clientid;
         await cartq.getclientcart(id)
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      } 

exports.updateCategory = async (req, res, next) => {
        const catdata = req.body;
        return await manageproductq.updateCategory(catdata)
        .then((result) => {return res.json("true")})
        .catch(error =>   { return  res.status(422).send(error) })
      };
exports.updateSlider = async (req, res, next) => {

        const sliderdata = req.body;

        return await manageproductq.updateSlider(sliderdata)
        .then((result) => {return res.json("true")})
        .catch(error =>   { return  res.status(422).send(error) })
      };
exports.updateProduct = async (req, res, next) => {
        const proddata = req.body;
        return await manageproductq.updateProduct(proddata)
        .then((result) => {return res.json("true")})
        .catch(error =>   { return  res.status(422).send(error) })
      };

exports.updateProductPhoto  = async (req, res, next) => {
        const prodphotodata = req.body;
        return await manageproductq.updateProductPhoto(prodphotodata)
        .then((result) => {return res.json("true")})
        .catch(error =>   { return  res.status(422).send(error) })
      };

exports.updateProductPhotoToDisplay  = async (req, res, next) => {
        const prodpicupdatedata = req.body;
        return await manageproductq.updateProductPhotoToDisplay(prodpicupdatedata)
        .then((result) => {return res.json("true")})
        .catch(error =>   { return  res.status(422).send(error) })
      };   
 /*******Paginations **********************************/ 
 
exports.getProductByPage  = async (req, res) => 
{
  const findProd = req.body;

      return  await manageproductq.getProductByPage(findProd.catid,findProd.limitpage,findProd.lastid) 
                                          .then((result) => { return  res.json(result)})
                                          .catch(error =>   { return  res.status(422).send(error) })
}      
exports.getProductByPageIds  = async (req, res) => 
{
  const findProd = req.body;
      return  await manageproductq.getProductByPageIds(findProd.catid,findProd.limitpage,findProd.lastid) 
                                            .then((result) => { return  res.json(result)})
                                            .catch(error =>   {return  res.status(422).send(error) })
}      