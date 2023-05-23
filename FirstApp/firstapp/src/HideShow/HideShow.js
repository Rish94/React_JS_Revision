import React from 'react'

export default function HideShow() {
    const [status,setStatus] = React.useState(true); //by deault true
  return (
    <>
    {/* Use Conditional Operator in h5 */}
    <h5>{status? <h5>I am Showing !!</h5> :null}</h5>
    {/* <button onClick={()=>setStatus(false)}>Hide Me</button>
    <button onClick={()=>setStatus(true)}>Show Me</button> */}

    <button onClick={()=>setStatus(!status)}>Hide Show</button>
    </>
  )
}
