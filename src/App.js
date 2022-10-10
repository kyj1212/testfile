import logo from './logo.svg';
import './App.css';
import Test from './component/test'
import Test2 from './component/test2'

import { useState } from 'react';

function App() {
  const [testProps,setTestProps] = useState("")
  const [test2Props,setTest2Props] = useState("")
  
  return (
    <div>
      <Test getProps={testProps} getProps2={test2Props}></Test>
      <Test2 giveProps={setTestProps} giveProps2={setTest2Props}></Test2>
    </div>
  );
}

export default App;
