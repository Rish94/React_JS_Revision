import React from 'react'

export default function Student(props) {
    
    
    //console.log(name);

  return (
    <>
    <div>Student {props.name}</div>
    <h2>{props.email}</h2>
    <h3>{props.ram}</h3>

    <h6>{props.other.nan}</h6>
    <h5>{props.other.tru}</h5>
    </>
  );
}
