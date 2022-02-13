import react from "react";

import { useState } from "react";

const comp = () => {

    const[state,setState]= useState(null);
    
     const data=(e)=>{
      setState(e.target.value);
     }
     const btclicked=()=>{
     let newdata = state+1;
     }
  return (
  <div>
      <input type="number" value={newdata} onChange={data} ></input>
      <button onClick={btclicked}>click here</button>
  </div>);
};

export default comp;
