import React, { useState } from 'react'



//first method generally we dont use this
// export default function Conditional() {
//   const [loggedIn,setLoggedIn] = useState(true);

//   if(loggedIn){
//     return(
//         <div>
//             You have logged In
//         </div>
//     )
//   }else{
//     return(
//         <div>
//             You have not logged In
//         </div>
//     )
//   }
// }


//Best way we use like this

export default function Conditional() {
    const [loggedIn,setLoggedIn] = useState(true);
  
    return(
        <div>
            {loggedIn?<span>Logge IN</span>:<span>Not Logged In</span>}
        </div>
    )
  }