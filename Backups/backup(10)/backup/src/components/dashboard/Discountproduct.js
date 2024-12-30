import React, { Component } from 'react'

export default class Discountproduct extends Component {
    constructor(props)
    {
        super(props);
        console.log("constucter");
        this.state=[
            {
                titlt:"Shirt",
                price:"200",
                my_img:"img/banner01.jpg"
            },
            {
                titlt:"Tshirt",
                price:"200",
                my_img:"img/banner02.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner03.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner04.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner05.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner06.jpg"
            },
            {
                titlt:"Shirt",
                price:"200",
                my_img:"img/banner01.jpg"
            },
            {
                titlt:"Tshirt",
                price:"200",
                my_img:"img/banner02.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner03.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner04.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner05.jpg"
            },
            {
                titlt:"Shou",
                price:"200",
                my_img:"img/banner06.jpg"
            }
        ]
       
    }
    // changeName=()=>{
    //     // alert("Hallo")
    //     this.setState({brand:"Reebok"})

    // }

  render() {
    console.log("render");
    return (
        
            <>
                {/* <div>Hi</div>
                <div>Discountproduct</div>
        {this.state.brand}
        <br />
        <input type="submit" value="Chnage Brande name" onClick={this.changeName} /> */}

        <div className="container">
            <div className="row">
                {
                    this.state.map((item,index)=>
                    <div className="col-md-4" key={index}>
                    <div class="card" style={{width:"100%"}}>
                        <img src={item.my_img} class="card-img-top" alt="..." style={{height:"250px"}} />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.desc}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                    )
                }
            </div>
        </div>
            </>
        
     
    )
  }
}
