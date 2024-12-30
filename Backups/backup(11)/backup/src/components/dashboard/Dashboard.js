import React, { Component } from 'react'
import "./dashboard.css";
import Mycard from './Mycard';
import Discountproduct from './Discountproduct';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className='style_change'>Welcome to Abc.com</div>
        <img src="sliders/Aarambh-cf.webp" alt="" srcset="" style={{width:"100%"}} />
        <div className='style_change'>Our Products</div>
        <div className="my_container">
          <Mycard title="Shirt" price="2200" desc="Nince One" my_img="img/banner01.jpg"/>
          <Mycard title="Paint" price="1500" desc="Nince One" my_img="img/banner02.jpg"/>
          <Mycard title="Shou" price="1000" desc="Nince One" my_img="img/banner03.jpg"/>
          <Mycard title="Shou" price="1000" desc="Nince One" my_img="img/banner03.jpg"/>
        </div>
        <br />
        <Discountproduct/>

      </>
    )
  }
}
