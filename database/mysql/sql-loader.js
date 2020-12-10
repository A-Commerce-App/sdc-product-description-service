const db = require('./sql');
const csvPath = `${__dirname}/data/products.csv`;
const now = new Date();


const saveAll = (records) => {

  const sql =
  `LOAD DATA LOCAL INFILE '${records}'
    INTO TABLE products
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (name,price,prime,returnable,ingredients,flavor,sensitivity,brand,ingredient_info,about,ratings_avg)`;

  db.con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  db.con.end();
}

console.log('Insertion started ', now.toUTCString());
saveAll(csvPath);
console.log('Database populated ', now.toUTCString())
module.exports.saveAll = saveAll;