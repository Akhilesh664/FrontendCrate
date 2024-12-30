import React, { Component } from 'react'

export default class Mycard extends Component {
    constructor(props)
    {
        super(props);
         console.log(props);
    }
  render() {
    const {title,price,color}=this.props;  // object destructing 
    return (
      <>
      <div style={{textAlign:"center"}}>
        <div>Mycard</div>
        <div>{"This is my title "+this.props.title }</div>
        <div>{ `This is my shirt price ${this.props.price}`}</div>
        <div>{ `This is my shirt price ${this.props.color}`}</div>
        <br />
        <br />
        <div>{"This is my title "+title }</div>
        <div>{ `This is my shirt price ${price}`}</div>
        <div>{ `This is my shirt price ${color}`}</div>
    </div>
      </>
    )
  }
}
