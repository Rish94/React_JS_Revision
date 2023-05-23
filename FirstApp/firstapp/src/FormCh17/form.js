import React, { useState } from 'react'

export default function Form() {


    const [name,setName] = useState("");
    const [tmc,setTmc] = useState(false);
    const [intrest,setIntrest] = useState("");

    function getFormData(e){
        console.log(name,tmc,intrest);
        e.preventDefault();
    }

  return (
    <>
    <h4>Handle Form In react</h4>
    <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName
        (e.target.value)}/> <br></br><br></br>
        <select onChange={(e)=>{setIntrest(e.target
            .value)}}>
            <option>Select Options</option>
            <option>Marvel 2</option>
            <option>Marvel 6</option>
            <option>Marvel 7</option>
        </select><br></br><br></br>
        <input type="checkbox" onChange={(e)=>{setTmc(e.target.checked)}} /><span>Accept Terms and Conditions</span> <br></br><br></br>
        <button type="submit">Submit</button>
    </form>
    </>
  );
}
