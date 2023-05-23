import React,{useState} from 'react'

export default function States() {
  
//     let data = "Rishabh";
//     function updateData(){
//         data = "Agarwal";
//         alert("Data Updated");
//         alert(data);
//     }
    
    
//     return (


//     <>
//     <h1>States In React {data}</h1>
//     <button onClick={updateData}>Upate Data</button>
//     </>
//   );




const [data,setData] = useState("Rishabh");
function UpdateData(){
    
    alert("Data Updated");
    alert(data);
    setData('Agarwal');
}


return (


<>
<h1>States In React {data}</h1>
<button onClick={UpdateData}>Upate Data</button>
</>
);
}
