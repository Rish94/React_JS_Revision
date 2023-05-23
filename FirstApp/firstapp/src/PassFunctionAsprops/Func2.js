import React from 'react'

export default function Func2(props) {
  return (
    <>
    <div>Func_2</div>
    <button onClick={()=>{
        props.data(); 
    }}>Call Func 1</button>
    </>
  )
}
