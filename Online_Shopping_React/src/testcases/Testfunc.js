import {useState} from 'react';

function TestApp() {

  const[message, setMessage] = useState('')
  const[textval, setTextval] = useState('')
  
  return (
    <div>
      <input type='text' id='mytext' onChange={(e)=>{  
        setTextval(e.target.value)
      }}/>

     <button onClick={()=>{
       setMessage(textval)
     }}>Click</button>
     
     <p>{message}</p>

    </div>
  );
}
export default TestApp;