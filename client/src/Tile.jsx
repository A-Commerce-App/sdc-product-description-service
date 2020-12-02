import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//import styled from 'styled-components';
import styles from './style.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    }
    this.selected = this.selected.bind(this);
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/products/${randomNum}`)
      .then(res => {
        const product = res.data;
        this.setState({
          product: res.data
        })
      })
  }

  selected() {
    this.props.productSelection(this.state.product);
  }

  render () {
    let product = this.state.product;

    return (
      <div className={styles.item} onClick={this.selected}>
        <h3>{product.name}</h3>
        <p style={{ color: 'red' }}>${Number(product.price).toFixed(2)}</p>
        <h4>{product.prime ? <img alt="prime" src={`https://fec-pics.s3.us-east-2.amazonaws.com/primeLogo_621x260.png`} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</h4>
      </div>
    )
  }
}

export default Tile;