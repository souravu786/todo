import React from 'react';
import "./index.css";
import OrderTask from "./OrderTask";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App =()=>{

   const currDate = new Date().toLocaleDateString();  
 
  return (
    <div className="main_div">
    <div className="center_div">
    <br/>
    <h1 className="head_part">
      ToDo List
    </h1>
    <br/>
    <p>Date: {currDate} </p>
      <div>
        <OrderTask/>
      </div>
         
    </div>
        
    </div>
  );
  }

export default App;
