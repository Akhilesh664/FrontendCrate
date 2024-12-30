import React, { Component } from 'react'

export default class Latestproduct extends Component {
    constructor(props)
    {
        super(props)
        console.log(this.props);
        this.state=[
          {
            name:"shirt",
            desc:"Very Good",
            img:"gallery/banner01.jpg"
          },
          {
            name:"Mobile",
            desc:"Very Good",
            img:"gallery/banner02.jpg"
          },
          {
            name:"Pen",
            desc:"Very Good",
            img:"gallery/banner03.jpg"
          },
          {
            name:"shirt",
            desc:"Very Good",
            img:"gallery/banner04.jpg"
          },
          {
            name:"Mobile",
            desc:"Very Good",
            img:"gallery/banner05.jpg"
          },
          {
            name:"Laptop",
            desc:"Very Good",
            img:"gallery/banner06.jpg"
          }
        ]
    }
  render() {
    const {title,price,size}=this.props;
    return (
        // <div>
        //     <div className='head'>Latestproduct</div>
        //     <div>{this.props.title}</div>
        //     <div>{this.props.price}</div>
        //     <div>{this.props.size}</div>
        //     <br />
        //     <div>{title}</div>
        //     <div>{price}</div>
        //     <div>{size}</div>
        // </div>
        <div className="container" style={{marginTop:"5%"}}>
          <div className="row">
            {
              this.state.map((item,index)=>
                  <div className="col-md-4" key={index} style={{padding:"10px"}}>
                  <div className="card" style={{width:"100%"}}>
                    <img src={item.img} className="card-img-top" alt="..." style={{height:"280px"}}/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.desc}</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        
      
    )
  }
}
