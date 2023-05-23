import React from 'react'
import File2 from './Func2';
export default function Func1() {

    function getData(){
        alert("Hello from Func 1");
    }

  return (
    <>
    <div>Func1</div>
    <File2 data={getData}/>
    </>
  )
}
