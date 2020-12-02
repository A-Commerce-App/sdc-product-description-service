import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

import GlobalFonts from './fonts/fonts.js';

import Tile from './Tile.jsx';
import Stars from './Stars.jsx';
import Table from './Table.jsx';
import MainTile from './MainTile.jsx';

const Product = ({product}) => {
  const [selectedProduct, setProduct] = useState({});

  const productSelection = (selProduct) => {
    setProduct(selProduct);
  }

  let ratingsNum = Math.floor(Math.random() * 1000) + 1;
  let mainTileProduct = product;
  if (selectedProduct.name) {
    product = selectedProduct;
  }

  return (
    <section className={styles.wrapper}>
      <h1>{product.name}</h1>
      <Stars rating={product.ratings_avg} ratingsNum={ratingsNum} />
      <hr></hr>
      <p>Price: <span style={{ color: 'red' }}>${Number(product.price).toFixed(2)}</span><span>{product.prime ? <img alt="prime" src={`https://fec-pics.s3.us-east-2.amazonaws.com/primeLogo_621x260.png`} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</span></p>
      <p>This item is {product.returnable ? 'returnable' : 'non-returnable'} </p>
      <p>Flavor: <b>{product.flavor}</b></p>
      <div className={styles.tilewrapper}>
        <MainTile product={mainTileProduct} productSelection={productSelection} />
        {[...Array(3)].map((item, index) => {
          return <Tile productSelection={productSelection}/>
        })}
      </div>
      <Table product={product} />
      <hr></hr>
      <p><b>About this item</b></p>
      <p>{product.about}</p>
    </section>
  )
}

export default Product;