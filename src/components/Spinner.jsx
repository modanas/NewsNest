import React, { Component } from 'react'
import loader from "./Ajax-loader.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loader} alt="loader" />
      </div>
    )
  }
}

export default Spinner
