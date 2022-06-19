'use strict';
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));
const securityConfig  = require('../keys');
module.exports = (Bookshelf) => {
var modeles = {}

//**********************  User ********************************* */

var User = Bookshelf.Model.extend({
  tableName: 'users',
  users_roles: function () {
     return this.hasMany(UserRole, 'user_id');
  }, 
  address: function () {
    return this.hasMany(Address, 'user_id');
  },
  carts: function () {
    return this.hasMany(Cart, 'user_id');
  }, 
  orders: function () {
    return this.hasMany(Order, 'user_id');
  },
  shippings: function () {
    return this.hasMany(Shipping, 'user_id');
  },    
  roles() {
      return this.belongsToMany(Role, 'users_roles');
  },
  validPassword(password) {
   
      return bcrypt.compareAsync(password, this.attributes.password);
  },
  initialize() { 
      this.on('saving', model => {
          //if (!model.hasChanged('password')) return;
          return Promise.coroutine(function* () {
              const salt = yield bcrypt.genSaltAsync(securityConfig.saltRounds);
              const hashedPassword = yield bcrypt.hashAsync(model.attributes.password, salt);
              model.set('password', hashedPassword);
          })();
      });
  }
},{dependents: ['users_roles','address','roles','orders','cart','shippings']});

User.Users = Bookshelf.Collection.extend({
model: User
});
//**********************  Role ********************************* */


var Role = Bookshelf.Model.extend({
  tableName: 'roles',
  users() {
      return this.belongsToMany(User, 'users_roles');
  }
},{dependents: ['users_roles']});

Role.Roles = Bookshelf.Collection.extend({
model: Role
});


//**********************  Order lines  ********************************* */

var UserRole = Bookshelf.Model.extend({
  tableName: 'users_roles',
  users: function () {
      return this.belongsToMany(User);
  },
  roles: function () {
      return this.belongsToMany(Role);
  }
});

UserRole.UserRoles = Bookshelf.Collection.extend({
model: UserRole
});

var Photo = Bookshelf.Model.extend({
tableName: 'photos',
user: function () {
  return this.belongsTo(User, 'user_id');
}
});
Photo.Photos = Bookshelf.Collection.extend({
model: Photo
});

var Eductionexperience = Bookshelf.Model.extend({
tableName: 'eductionexperiences',
user: function () {
  return this.belongsTo(User, 'user_id');
}
});
Eductionexperience.Eductionexperiences = Bookshelf.Collection.extend({
model: Eductionexperience
});

var Citizenship = Bookshelf.Model.extend({
  tableName: 'citizenships',
  user: function () {
    return this.belongsTo(User, 'user_id');
  }
});
Citizenship.Citizenships = Bookshelf.Collection.extend({
model: Citizenship
});

var Cart = Bookshelf.Model.extend({
  tableName: 'cart',
  user: function () {
    return this.belongsTo(User, 'user_id');
  }
});
Cart.Carts = Bookshelf.Collection.extend({
model: Cart
});

var Availabilitie = Bookshelf.Model.extend({
  tableName: 'availabilities',
  user: function () {
    return this.belongsTo(User, 'user_id');
  }
});
Availabilitie.Availabilities = Bookshelf.Collection.extend({
model: Availabilitie
});

var Agentservice = Bookshelf.Model.extend({
  tableName: 'agentservices',
  user: function () {
    return this.belongsTo(User, 'user_id');
  }
});
Agentservice.Agentservices = Bookshelf.Collection.extend({
model: Agentservice
});

var Address = Bookshelf.Model.extend({
  tableName: 'address',
  user: function () {
    return this.belongsTo(User, 'user_id');
  }
});
Address.Address = Bookshelf.Collection.extend({
model: Address
});

var Taxe = Bookshelf.Model.extend({
  tableName: 'taxes',
});
Taxe.Taxes = Bookshelf.Collection.extend({
model: Taxe
});

//**********************  Categories ********************************* */
var Category = Bookshelf.Model.extend({
  tableName: 'categories'
});
Category.Categories = Bookshelf.Collection.extend({
model: Category
});

//**********************  Product ********************************* */
var Product = Bookshelf.Model.extend({
  tableName: 'products',
  productcolorphotos: function () {
    return this.hasMany(ProductColorPhoto, 'productid');
  },
  category: function () {
     return this.belongsTo(Category, 'category_id');
  },
});
Product.Products = Bookshelf.Collection.extend({
model: Product
});


var ProductColorPhoto = Bookshelf.Model.extend({
  tableName: 'productcolorphotos',
});
ProductColorPhoto.ProductColorPhotos = Bookshelf.Collection.extend({
model: ProductColorPhoto
});

//**********************  Sliders ********************************* */
var Slider = Bookshelf.Model.extend({
  tableName: 'sliders'
});
Slider.Sliders = Bookshelf.Collection.extend({
model: Slider
});

//**********************  Shippings ********************************* */
var Shipping = Bookshelf.Model.extend({
  tableName: 'shippings',

  user: function () {
    return this.belongsTo(User, 'user_id');
  }
});
Shipping.Shippings = Bookshelf.Collection.extend({
model: Shipping
});

//**********************  Shippings ********************************* */
var Order = Bookshelf.Model.extend({
  tableName: 'orders',

  user: function () {
    return this.belongsTo(User, 'user_id');
  },
  orders: function () {
    return this.hasMany(OrderDetail, 'order_id');
  },

},{dependents: ['order_details']});
Order.Orders = Bookshelf.Collection.extend({
model: Order
});

//**********************  Shippings ********************************* */
var OrderDetail = Bookshelf.Model.extend({
  tableName: 'order_details',

  order: function () {
    return this.belongsTo(Order, 'order_id');
  },


});
OrderDetail.OrderDetails = Bookshelf.Collection.extend({
model: OrderDetail
});


//**********************  Calevent ********************************* */
var Calevent = Bookshelf.Model.extend({
  tableName: 'Calevent',

  /*day: function () {
    return this.belongsTo(Calday, 'CaldayID');
  },
  client: function () {
    return this.belongsTo(Calclient, 'CalclientID');
  },
  Calorderlines: function () {
    return this.hasMany(Calorderline, 'caleventID');
 },*/
});
Calevent.Calevents = Bookshelf.Collection.extend({
model: Calevent
});

//**********************  User ********************************* */

    modeles.User  = User
    modeles.Role  = Role
    modeles.UserRole  = UserRole
    modeles.Photo  = Photo
    modeles.Eductionexperience  = Eductionexperience
    modeles.Citizenship  = Citizenship
    modeles.Cart  = Cart
    modeles.Availabilitie  = Availabilitie
    modeles.Agentservice  = Agentservice
    modeles.Address  = Address
    modeles.Category  = Category 
    modeles.Product  = Product 
    modeles.Cart  = Cart 
    modeles.Taxe  = Taxe 
    modeles.Slider  = Slider
    modeles.Shipping = Shipping
    modeles.Order = Order
    modeles.OrderDetail = OrderDetail
    modeles.ProductColorPhoto = ProductColorPhoto  
    modeles.Calevent = Calevent
  return modeles;
};