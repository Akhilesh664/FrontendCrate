import React, { Component } from 'react'
import "./dashboard.css";
import Mycard from './Mycard';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className='style_change'>Welcome to Abc.com</div>
        <img src="sliders/Aarambh-cf.webp" alt="" srcset="" style={{width:"100%"}} />
        <Mycard title="Shirt" price="2200" color="pink"/>
        <Mycard title="Shirt" price="2200" color="pink"/>
        <Mycard title="Shirt" price="2200" color="pink"/>
        <Mycard title="Shirt" price="2200" color="pink"/>
        <Mycard title="Shirt" price="2200" color="pink"/>

      </>
    )
  }
}
