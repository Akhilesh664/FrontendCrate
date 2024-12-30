import React, { Component } from 'react'
import Latestproduct from './Latestproduct'

export default class Dashboard extends Component {
  render() {
    return (
        <>
            <div className='head'>Home Page</div>
            <Latestproduct title="my title" price="200" size="40"/>
        </>
    )
  }
}
