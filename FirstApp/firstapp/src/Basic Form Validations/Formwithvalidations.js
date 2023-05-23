import React, { useState } from 'react'
import Form from '../FormCh17/form'

export default function Formwithvalidations() {


    const [name, setUserId] = useState("");
    const [Password, setPassword] = useState("");

    const [userErr,setErr] = useState(false);
    const [pass,setPass] = useState(false);


    const [page,setPage] = useState(false);



    function getFormData(e) {

        if(name.length<3 || Password.length<3){
            alert("Input Valid Cridentials");
        }else{
            setPage(true);
        }
        e.preventDefault();
    }

    function userHandler(e){
        let user = e.target.value; //user id
        if(user.length<3){
            setErr(true);
        }else{
            setErr(false);
        }
        setUserId(user);
    }

    function PasswordHandler(e){
        let pass = e.target.value; //Password
        if(pass.length<3){
            setPass(true);
        }else{
            setPass(false);
        }
        setPassword(pass);
    }

    return (
        <>
            <h4>Handle Form In react</h4>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Enter User Id' onChange={userHandler} /> <br></br><br></br>
                <input type="text" placeholder='Enter Password' onChange={PasswordHandler} /> <br></br><br></br>
                <button type="submit">Submit</button>
                <div>{userErr?<h1>User Valid</h1>:<h1>User Not Valid</h1>}</div>
                <div>{page?<Form/>:<h5>Loog in Again</h5>}</div>
            </form>
        </>
    )
}
