const mysql = require('mysql');
const fs = require('fs');
const faker = require('faker');
const csvPath = `${__dirname}/mysql/data/products.csv`;
const now = new Date();

const makeProducts = () => {

  console.log('Data generation start ', now.toUTCString());
  let products = [];
  for (var i = 0; i < 10000000; i++) {
    var product = {};
    product.name = faker.commerce.product();
    product.price = Number.parseInt(faker.commerce.price());
    product.prime = faker.random.boolean();
    product.returnable = faker.random.boolean();
    product.ingredients = faker.commerce.productMaterial();
    product.flavor = faker.commerce.color();
    product.sensitivity = faker.commerce.productMaterial();
    product.brand = faker.company.companyName(),
    product.ingredient_info = faker.commerce.productDescription();
    product.about = faker.commerce.productDescription();
    product.ratings_avg = faker.random.number({'min': 1, 'max': 5});
    products.push(product);
  }
  return products;
}

let products = makeProducts();
console.log('records generated for products: ', products.length);

const writeProductHeader = () => {
  const productStream = fs.createWriteStream(csvPath);
  productStream.write('name,price,prime,returnable,ingredients,flavor,sensitivity,brand,ingredient_info,about,ratings_avg\n');
};

const writeProducts = () => {
  const productStream = fs.createWriteStream(csvPath, {flags: 'a'});
  for (let product of products) {
    productStream.write(`${product.name},${product.price},${product.prime},${product.returnable},${product.ingredients},${product.flavor},${product.sensitivity}, ${product.brand},${product.ingredient_info},${product.about},${product.ratings_avg}\n`);
  }
}

const makeProductCSV = () => {
  writeProductHeader();
  writeProducts();
}

makeProductCSV();
console.log('File complete!', now.toUTCString());


module.exports = makeProductCSV;