import React from 'react'

import func from '../Components/FunctionalComp'

export default function ClickEvent() {

    function apple(){
        alert('Button Clciked');
        // <func/>
    }

  return (
    <>
    <h1>Click Event</h1>
    {/* <button onClick={apple}>Click Me</button>  */}
    {/* apple() esenhe likehenge esse vo func automatic call ho jata he */}
    {/* <button onClick={()=>{alert('Heey')}}>Click Me</button>  */}

    <button onClick={apple}>Click Me</button> 
    </>
  )
}
