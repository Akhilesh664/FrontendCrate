import React, { Component } from 'react'

export default class Latestproduct extends Component {
    constructor(props)
    {
        super(props)
        console.log(this.props);
    }
  render() {
    return (
        <div>
            <div className='head'>Latestproduct</div>
            <div>{this.props.title}</div>
            <div>{this.props.price}</div>
            <div>{this.props.size}</div>
        </div>
      
    )
  }
}
