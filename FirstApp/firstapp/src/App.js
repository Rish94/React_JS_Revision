import React from 'react';
import logo from './logo.svg';
import './App.css';
import Click from '../src/ClickEvents_Functions/ClickEvent'

import States from '../src/States in Functional Components/States'

import Props from '../src/Props in funcional components/Props'

import Input from '../src/Get input Box Value/inputBox'

import HideShow from '../src/HideShow/HideShow'

import Form from '../src/FormCh17/form'

import Conditional from '../src/ConditionalRendering/Conditional'


import FormValid from '../src/Basic Form Validations/Formwithvalidations'

import Class from '../src/ClassWork/Class';

import Child from '../src/ClassWork/Child'

import File1 from '../src/PassFunctionAsprops/Func1'

import Constructor from '../src/Life_Cycle_Methods/Constructor/Constructor'

import Render from './Life_Cycle_Methods/Render/Render';

function App() {
  const [name,setName] = React.useState("Rishabh");
  return (
   <>
   {/* Hello World */}
   {/* <Click/> */}
   {/* <States/> */}
   {/* <Props/> */}
   {/* <Input/> */}
   {/* <HideShow/> */}
   {/* <Form/> */}
   {/* <Conditional/> */}
   {/* <FormValid/> */}
   {/* <Class/> */}
   {/* <Child/> */}
    {/* <File1/> */}
    {/* <Constructor/> */}
    <Render name={name}/>

    <button onClick={()=>{setName("Agarwal")}}>Update</button>
   </>
  );
}

export default App;
