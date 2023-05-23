import React from 'react'

import Child from '../ClassWork/Child'

export default function Class() {
    const arr = [{name:'Rishabh',class:"Sec B",RollNo:"35"},{name:'Ashish',class:"Sec A",RollNo:"14"},{name:'Manvendra',class:"Sec A",RollNo:"35"},{name:'Shvang',class:"Sec B",RollNo:"45"}];
  return (

    arr.map((arr)=>{
        return <Child arr name={arr.name} class={arr.class} RollNo={arr.RollNo}/>
    })
    
  );
}
