import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from './style.css';

class MainTile extends React.Component {
  constructor(props) {
    super(props);

    this.selected = this.selected.bind(this);
  }

  selected() {
    this.props.productSelection(this.props.product);
  }

  render () {
    let product = this.props.product;

    return (
      <div className={styles.item} onClick={this.selected}>
        <h3>{product.name}</h3>
        <p style={{ color: 'red' }}>${Number(product.price).toFixed(2)}</p>
        <h4>{product.prime ? <img alt="prime" src={`https://fec-pics.s3.us-east-2.amazonaws.com/primeLogo_621x260.png`} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</h4>
      </div>
    )
  }
}

export default MainTile;