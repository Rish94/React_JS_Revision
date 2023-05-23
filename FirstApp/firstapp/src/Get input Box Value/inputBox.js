//OnChange

// // import React from 'react'

// import React,{useState} from 'react';

// export default function InputBox() {

//     const [data,setData] = useState("Rish");

//     function Getdata(val){
//        // console.log(val.target.value);
//         setData(val.target.value)
//     }
//   return (
//     <>
//     <h4>Enter Value {data}</h4>
//     <input type="text" onChange={Getdata}></input>
//     </>
//   )
// }




// import React from 'react'

import React,{useState} from 'react';

export default function InputBox() {

    const [data,setData] = useState("Rish");

    const [print,setPrint] = useState(false);

    function Getdata(val){
       // console.log(val.target.value);
        setData(val.target.value);
        setPrint(false); //value after print hide ke leye
    }
  return (
    <>
    <h4>Enter Value {data}</h4>
   
    <input type="text" onChange={Getdata}></input>
    <button onClick={()=>setPrint(true)}>Print Data</button>

    <div>{print?
        <h4>{data}</h4>
        :null
    }
    </div>
    </>
  )
}
