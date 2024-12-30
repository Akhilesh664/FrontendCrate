import axios from 'axios';
import React, { Component } from 'react';

import "./contact.css"
class Contact extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            full_name:'',
            email_id:'',
            subject:'',
            mob_num:'',
            desc:'',
            msg:''

        }
    }

    fullName=(event)=>{
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        this.setState({full_name:event.target.value});

    }
    subject=(e)=>{
        //   console.log(e.target.value);
        this.setState({subject:e.target.value})
    }

    emailId=(e)=>{
        // console.log(e.target.value);
      this.setState({email_id:e.target.value})
    }

    mobNum=(e)=>{
        //  console.log(e.target.value);
    this.setState({mob_num:e.target.value})
    }

    description=(e)=>{
        // console.log(e.target.value);
    this.setState({desc:e.target.value})
    }

    saveData=(e)=>{
        e.preventDefault();
        // console.log(this.state);
        axios.post("http://localhost:3004/contact",this.state)
        .then((res)=>{
            // console.log(res);
            this.setState({msg:'Contact Data send successfully !'})
        })
        .then((err)=>{
            console.log(err);
        })

    }


    render() {
        return (
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27996.257725728487!2d77.1092107837522!3d28.703636622929032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d5b0619f3f%3A0x2208402cf282fb02!2sPitam%20Pura%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1679293099916!5m2!1sen!2sin"  style={{border:"0px",width:"100%",height:"350px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <br />
            <div className="container" >
            <div className="row">
                <div className="col-md-12">
                    <div className="head">
                        get in touch
                    </div>
                </div>
            </div>
                <div className="row" style={{marginTop:"3%"}}>
                    <div className="col-md-4">
                        <img src="gallery/contact.jpg" alt="" style={{width:"100%",height:"300px"}} />
                    </div>
                    <div className="col-md-8">
                    { this.state.msg?
                        <div className='alert alert-success'>{this.state.msg}</div>
                    :''}
                     <form action="" onSubmit={this.saveData}>
                        <div className="row mar_man" >
                            <div className="col">
                                <input type="text" name='full_name' onChange={this.fullName} className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="col">
                                <input type="text" name='subject' onChange={this.subject} className="form-control" placeholder="Subbject"  />
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"4%"}}>
                            <div className="col">
                                <input type="text" name='email_id' onChange={this.emailId} className="form-control" placeholder="Email Id" />
                            </div>
                            <div className="col">
                            <input type="text" name='mob_num' onChange={this.mobNum} className="form-control" placeholder="Mobile Number" />
                                
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"4%"}}>
                            <div className="col">
                                <textarea name="desc" id="" onChange={this.description} placeholder='Enter a Message ' style={{width:"100%",height:"80px"}}></textarea>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"4%"}}>
                            <div className="col">
                                <input type="submit" value="Send Message" placeholder='Enter a message' className='btn btn-success' />
                            </div>
                        </div>
                        </form>

                    </div>
                </div>
                <div className="row" style={{marginTop:"3%"}}>
                    <div className="col-md-12">
                        <div className="head">
                           Our Branch
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:"3%"}}>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:"3%"}}>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:"3%"}}>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:"3%"}}>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Contact;
