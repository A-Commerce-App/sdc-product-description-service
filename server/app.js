const express = require('express');
const app = express();
const port = 3002;

const Product = require('../server/database').Product;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static('public'));

app.get('/api/products/:id', (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      console.log('Error: ', err);
      res.send(404);
    } else {
      res.send(product);
    }
  })
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})