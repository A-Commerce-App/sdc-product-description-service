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
    const randomId = Math.floor(Math.random() * 1000000) + 9000000;
    const url = window.location.href.split('/');
    const end = url[url.length -1];
    const id = (isNaN(end) || end === '') ? randomId : end;
    axios.get(`/api/products/${id}`)
      .then(res => {
        const product = res.data[0];
        this.setState({
          product: product
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
        <h4>{product.prime === 'true' ? <img alt="prime" src={`https://fec-pics.s3.us-east-2.amazonaws.com/primeLogo_621x260.png`} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</h4>
      </div>
    )
  }
}

export default Tile;