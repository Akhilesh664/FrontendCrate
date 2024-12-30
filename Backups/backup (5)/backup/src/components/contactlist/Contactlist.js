import axios from 'axios';
import React, { Component } from 'react';


export default class Contactlist extends Component {
    constructor(props)
    {
        super(props)
        // console.log("i am from constructer");
        this.state={cdata:[]}
    }

    componentDidMount()
    {
        // console.log("I am did mount");
        axios.get("http://localhost:3004/contact")
        .then((res)=>{
            // console.log(res);
            // console.log(res.data);
            this.setState({cdata:res.data})
        })
    }
  render() {
    return (
    //   <div>Contactlist</div>
    <>
        {/* <ul>
            { this.state.cdata.map((item,index)=>
                <li>{item.full_name+" "+item.email_id+" "+item.subject+" "+item.mob_num+" "+item.desc}</li>
            )}
        </ul> */}
        <table border="1" align='center' width="50%">
            <tr>
                <th>Full Name</th>
                <th>Subject</th>
                <th>Email Id</th>
                <th>Mobile Number</th>
                <th>Message</th>
            </tr>
            {
                this.state.cdata.map((item,index)=>
                    <tr>
                        <td>{item.full_name}</td>
                        <td>{item.subject}</td>
                        <td>{item.email_id}</td>
                        <td>{item.mob_num}</td>
                        <td>{item.desc}</td>
                    </tr>
                )
            }
        </table>
    </>
    )
  }
}
