import React, { Component } from 'react'

export class Constructor extends Component {

    constructor(){
        super();
        this.state={
            data:"Rishabh"
        }
    }



  render() {
    return (
      <div>{this.state.data}</div>
    )
  }
}

export default Constructor