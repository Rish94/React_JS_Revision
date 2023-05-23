import React from 'react'

export default function Child(props) {

    // function func(){
    //     console.log(props.name)
        
    // }

  return (
    <div>
        <h5>{props.name}</h5>
        <h5>{props.class}</h5>
        <h5>{props.RollNo}</h5>
    </div>
  )
}
