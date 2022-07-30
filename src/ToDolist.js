import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import List from './List';
const ToDolist = () => {
    
const[item,setItem] =useState("");
const[newitem,setNewItem] =useState([]);

    const itemEvent=(event)=>{
            setItem(event.target.value);
    }

        const listOfItems=()=>{
            setNewItem((prevValue)=>{
                return[...prevValue,item];
            });

            setItem("");
        };


  return (
    <>
       <div className ="main_div">
         <div className="center">
            <br/>
          <h1>ToDo List</h1>  
          <br/>

            <input type="text" value={item} placeholder='Add Items' onChange={itemEvent}/>
                <Button className="newBtn"  onClick={listOfItems}>
                    <ControlPointIcon/>
                </Button>

              <br/>
              <ol>
                   {newitem.map((val,index)=>{
                       return <List key={index}text={val}/>;
                   })}
              </ol>  
              <br/>
         </div>

       </div>

    </>
  )
};

export default ToDolist;