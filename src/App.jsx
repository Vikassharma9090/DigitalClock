import React, { useState } from 'react';

const App=()=>{
    let newTime=new Date().toLocaleTimeString();
    const[ctime,setime]=useState(newTime);

    const updateTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setime(newTime);
    }
    setInterval(updateTime,1000);
return(
    <>
        <h2> Digital Clock</h2>
        <h1>{ctime}</h1>
        {/* <button onClick={updateTime}>Click Me</button> */}
        </>
);
};
export default App;