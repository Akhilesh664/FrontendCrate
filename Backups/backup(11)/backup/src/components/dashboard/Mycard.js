import React, { Component } from 'react'

export default class Mycard extends Component {
    constructor(props)
    {
        super(props);
         console.log(props);
    }
  render() {
    const {title,price,desc,my_img}=this.props;  // object destructing 
    return (
      <>
      {/* <div style={{textAlign:"center"}}>
        <div>Mycard</div>
        <div>{"This is my title "+this.props.title }</div>
        <div>{ `This is my shirt price ${this.props.price}`}</div>
        <div>{ `This is my shirt price ${this.props.color}`}</div>
        <br />
        <br />
        <div>{"This is my title "+title }</div>
        <div>{ `This is my shirt price ${price}`}</div>
        <div>{ `This is my shirt price ${color}`}</div>
    </div> */}
    <div className="card my_card" >
      <img src={my_img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </>
    )
  }
}
