import React, { Component } from 'react'

export default class Contactlist extends Component {
    constructor(props)
    {
        super(props);
        this.state={mydata:[]};
    }

    showData=()=>{
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(
            data => this.setState({mydata:data})
        )
    }
  render() {
    return (
      <>
        <input type="submit" value="Fetch Data" onClick={this.showData} />
        <br />
        <ul>
            {
                this.state.mydata.map((item,index)=>
                <li>{item.id+" "+item.title+" "+item.body}</li>
                )
            }
        </ul>
      </>
    )
  }
}
