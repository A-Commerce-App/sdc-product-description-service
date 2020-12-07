const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connect to MongoDB');
});
// Set schema
const productSchema = new mongoose.Schema({
  _id: Number,
  name:  String,
  price: Number,
  prime: Boolean,
  returnable: Boolean,
  flavor: String,
  ingredients: String,
  brand: String,
  sensitivity: String,
  ingredient_info: String,
  about: String,
  ratings_avg: Number
})
// compile schema to a model
const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
