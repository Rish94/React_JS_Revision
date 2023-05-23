import React from 'react'

export default function NotUpdateVarLikeThis() {

    let data = "Rishabh Agarwal"
    function apple(){
        alert('Button Clciked');
        // <func/>
        data = "Peter";
        alert(data);
    }


  return (
    <>

    {/* Yha data change nhe hoga upar ho jayega for this we use - props,states  */}
    <h1>{data}</h1> 
    {/* <button onClick={apple}>Click Me</button>  */}
    {/* apple() esenhe likehenge esse vo func automatic call ho jata he */}
    {/* <button onClick={()=>{alert('Heey')}}>Click Me</button>  */}

    <button onClick={apple}>Click Me</button> 
    </>
  );
}
