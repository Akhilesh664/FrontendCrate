import axios from 'axios';
import React, { Component } from 'react';


export default class Contactus extends Component {
  constructor(props)
  {
        super(props);
        this.state={
          f_name:'',
          l_name:'',
          email_id:'',
          subject:'',
          desc:'',
          msg:''
      }  
  }

  firstName=(event)=>{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);

    this.setState({f_name:event.target.value})
  }

  lastName=(e)=>{
    this.setState({l_name:e.target.value})
  }
  emailId=(e)=>{
    this.setState({email_id:e.target.value})
  }
  subject=(e)=>{
    this.setState({subject:e.target.value})
  }
  mobNum=(e)=>{
    this.setState({mob_num:e.target.value})
  }
  textDesc=(e)=>{
    this.setState({desc:e.target.value})
  }
  saveData=(e)=>{
    e.preventDefault();
    // console.log(this.state);
    axios.post("http://localhost:3004/contacts",this.state)
    .then((res)=>{
      // console.log(res);
      this.setState({msg:"Request Send Successfully !"});
    })
    .then((err)=>{console.log(err);})

  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27996.257725728487!2d77.1092107837522!3d28.703636622929032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d5b0619f3f%3A0x2208402cf282fb02!2sPitam%20Pura%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680503860925!5m2!1sen!2sin"  style={{border:"0px",width:"100%",height:"350px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="head">
              Get In touch
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-4">
              <img src="img/banner01.jpg" alt="" style={{width:"100%",height:"350px"}} />
            </div>
            <div className="col-md-8">
            {/* {this.state.msg} */}
            { this.state.msg?
            <div className='alert alert-success'>{this.state.msg}</div>
                
            :''}
          
                  <form action="" onSubmit={this.saveData}>
                      <div className="row">
                            <div className="col">
                              <input type="text" name='f_name' className="form-control" onChange={this.firstName} placeholder="Enter a first name ?" />
                            </div>
                            <div className="col">
                              <input type="text" name='l_name' onChange={this.lastName} className="form-control" placeholder="Enter a Last name ?" />
                            </div>
                      </div>
                      <div className="row" style={{marginTop:"3.5%"}}>
                            <div className="col">
                              <input type="text" name='email_id' onChange={this.emailId} className="form-control" placeholder="Enter a email _id ?" />
                            </div>
                            <div className="col">
                              <input type="text" name='mob_num' onChange={this.mobNum} className="form-control" placeholder="Enter a Mobile Number ?" />
                            </div>
                      </div>
                      <div className="row" style={{marginTop:"3.5%"}}>
                            <div className="col">
                              <input type="text" name='subject' onChange={this.subjectSet} className="form-control" placeholder="Enter a subject ?" />
                            </div>
                      </div>
                      <div className="row" style={{marginTop:"3.5%"}}>
                            <div className="col">
                              <textarea name="desc" className='form-control' onChange={this.textDesc} id=""  placeholder="Enter a Message  ?" style={{height:"80px"}}></textarea>
                            </div>
                      </div>
                      <div className="row" style={{marginTop:"3.5%"}}>
                            <div className="col">
                              <input type="submit" value="Send Message" className='btn btn-primary' />
                            </div>
                      </div>
                      
                  </form>
            </div>
          </div>
      </div>
    )
  }
}
