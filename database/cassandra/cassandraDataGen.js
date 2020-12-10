const fs = require('fs');
const faker = require('faker');
const csvPath = `${__dirname}/data/products.csv`;
const now = new Date();

const randomBool = () => {
  let bools = ['true', 'false'];
  return bools[Math.floor(Math.random() * (bools.length))]
}

const randomRating = () => {
  return Math.floor(Math.random() * (5 - 1) + 1);
}

const makeProducts = () => {
  console.log('Data generation start ', now.toUTCString());
  let products = [];
  for (var i = 0; i < 10000000; i++) {
    var product = {};
    product.id = i;
    product.name = faker.commerce.product();
    product.price = Number.parseInt(faker.commerce.price());
    product.prime = randomBool();
    product.returnable = randomBool();
    product.ingredients = faker.commerce.productMaterial();
    product.flavor = faker.commerce.color();
    product.sensitivity = faker.commerce.productMaterial();
    product.brand = faker.company.companyName(),
    product.ingredient_info = faker.commerce.productDescription();
    product.about = faker.commerce.productDescription();
    product.ratings_avg = randomRating();
    products.push(product);
  }
  return products;
}

let products = makeProducts();
console.log('records generated for products: ', products.length);

const writeProductHeader = () => {
  const productStream = fs.createWriteStream(csvPath);
  productStream.write('id#name#price#prime#returnable#ingredients#flavor#sensitivity#brand#ingredient_info#about#ratings_avg\n');
};

const writeProducts = () => {
  const productStream = fs.createWriteStream(csvPath, {flags: 'a'});
  for (let product of products) {
    productStream.write(`${product.id}#${product.name}#${product.price}#${product.prime}#${product.returnable}#${product.ingredients}#${product.flavor}#${product.sensitivity}#${product.brand}#${product.ingredient_info}#${product.about}#${product.ratings_avg}\n`);
  }
}

const makeProductCSV = () => {
  writeProductHeader();
  writeProducts();
}

makeProductCSV();
console.log('File complete!', now.toUTCString());


module.exports = makeProductCSV;





