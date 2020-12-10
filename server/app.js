const express = require('express');
const app = express();
const port = 3002;
const newRelic = require('newrelic');

const db = require('../database/mysql/sql.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('public'));

app.get('/api/products/:id', (req, res) => {
  const id = [req.params.id];
  const sql = "SELECT * FROM products WHERE id=?"

  db.con.query(sql, id, (err, product) => {
    if (err) {
      console.log('Error: ', err);
      res.send(404);
    } else {
      res.send(product);
    }
  })
});

app.put('/api/products/edit/:id', (req, res) => {
  const { _id, about } = req.body;
  const params = [_id, about];
  const sql = 'UPDATE products SET about = ? WHERE id = ?';

  db.con.query(sql, params, (err, results) => {
    if (err) { return res.sendStatus(500); }
    return res.status(200).send(results);
  });
})

app.post('/api/products/delete/:id', (req, res) => {
  const id = req.params.id;
  const queryString = 'DELETE FROM products WHERE id = ?';

  db.con.query(queryString, [id], (err, results) => {
    if (err) { return res.sendStatus(500); }
    return res.status(200).send(results);
  });
})

app.post('/api/products/add/:id', (req, res) => {
  const {name, price, prime, returnable, ingredients, flavor, sensitivity, brand, ingredient_info, about, ratings_avg } = req.body;

  const params = [
    name, price, prime, returnable, ingredients, flavor, sensitivity, brand, ingredient_info, about, ratings_avg
  ];
  const sql = `
    INSERT INTO products(name, price, prime, returnable, ingredients, flavor, sensitivity, brand, ingredient_info, about, ratings_avg)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

  db.con.query(sql, params, (err, results) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.status(200).send(results);
  });
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
