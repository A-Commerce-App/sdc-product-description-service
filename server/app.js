const express = require('express');
const app = express();
const port = 3002;

const Product = require('../database/mongo/mongo.js').Product;

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

app.put('/api/products/edit/:id', (req, res) => {
  Product.updateOne({_id: req.params.id}, {about: req.body.about})
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})

app.post('/api/products/delete/:id', (req, res) => {
  Product.remove({_id: req.params.id})
  .then(result => res.status(200).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})

app.post('/api/products/add/:id', (req, res) => {
  const added = new Product(req.body)
  added.save((err, product) => {
    if (err) {
      console.log('Error: ', err);
      res.send(404);
    } else {
      res.send(product);
    }
  })
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
