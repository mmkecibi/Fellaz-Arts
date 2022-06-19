const express = require('express');
const router = express.Router();

const ProductCtrl = require('../controllers/product');


router.post('/createcategory', ProductCtrl.createCategory);
router.post('/createslider', ProductCtrl.createSlider);
router.get('/getCategoryById/:catid',  ProductCtrl.getCategoryById);
router.get('/getSliderById/:sliderid',  ProductCtrl.getSliderById);
router.get('/deletecategory/:catid',  ProductCtrl.deleteCategory);
router.get('/deleteslider/:sliderid',  ProductCtrl.deleteSlider);
router.get('/getallcategories',  ProductCtrl.getAllCategories);
router.get('/getallsliders',  ProductCtrl.getAllSliders);
router.get('/getallparentcategories',  ProductCtrl.getallparentcategories); 


router.get('/getTaxes',  ProductCtrl.getTaxes);
router.get('/deleteTaxe/:id',  ProductCtrl.deleteTaxe);
router.get('/getTaxeById/:id',  ProductCtrl.getTaxeById);
router.post('/createTaxe', ProductCtrl.createTaxe);
router.post('/updateTaxe', ProductCtrl.updateTaxe);

router.post('/addItemToCart', ProductCtrl.addItemToCart);
router.get('/cartbyclient/:clientid',  ProductCtrl.cartbyclient); 

router.get('/searchproductcreatedate/:createat',  ProductCtrl.searchproductcreatedate);
router.get('/searchproductbyname/:name',  ProductCtrl.searchproductbyname);
router.get('/searchproductbycode/:code',  ProductCtrl.searchproductbycode);

router.get('/get-all-hot-products',  ProductCtrl.getAllHotProducts); 
router.get('/get-all-new-arrival-products',  ProductCtrl.getAllNewArrivalProducts); 
router.get('/get-products-by-category/:catid',  ProductCtrl.getProductsByCategory); 

router.get('/getAllProductsByCategory/:catid',  ProductCtrl.getAllProductsByCategory);    
router.get('/getallcategoriesbyparent/:parentid',  ProductCtrl.getAllCategoriesByParent);  
router.get('/getProductPhotosById/:productphotoid',  ProductCtrl.getProductPhotosById);  
router.post('/createProduct', ProductCtrl.createProduct);
router.get('/getAllProducts',  ProductCtrl.getAllProducts);   
router.get('/getProductById/:prodid',  ProductCtrl.getProductById);
router.get('/deleteProduct/:prodid',  ProductCtrl.deleteProduct);
router.get('/deleteProductColorPhoto/:prodcolphotoid',  ProductCtrl.deleteProductColorPhoto);

router.post('/getProductByPageIds', ProductCtrl.getProductByPageIds);
router.post('/getProductByPage', ProductCtrl.getProductByPage);
router.post('/updateProduct', ProductCtrl.updateProduct);
router.post('/updateProductPhoto', ProductCtrl.updateProductPhoto);
router.post('/updateProductPhotoToDisplay', ProductCtrl.updateProductPhotoToDisplay);
router.post('/updateCategory', ProductCtrl.updateCategory);
router.post('/updateSlider', ProductCtrl.updateSlider);
router.post('/createProductPhotos', ProductCtrl.createProductPhotos);  
module.exports = router;