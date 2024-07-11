import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import socket from "./Socket"

function Dash() {
    let[users,setUsers]= useState([]);
    let navigateto = useNavigate();
    const location = useLocation();
    const { name } = location.state;
    let id = socket.id
    let[userid,setid]=useState();

    useEffect(()=>{
      if(socket.id==null){
        navigateto("/");
      }else{
        let data = {name,id}
        socket.emit("data",data)
      } 
    },[id,name])

    socket.on("users",(users)=>{
      let id = socket.id;
      let newusers = users.filter(obj=>obj.id !== id);
      setUsers(newusers);

    })

    function gotoroom(e){
      setid(e);
      navigateto("/room", { state: { userid: e } });
    }
    
    
    
    
  return (
    <>
    <h1 className='mt-4 mb-3 text-center'>your username :) {name}</h1>
    <h1 className="mt-4 mb-3 text-center border border-primary-subtle bg-secondary text-light m-5">Users</h1>
        {
           users.map((items)=>(
           // console.log(items.name);
            <h3 className="mt-4 mb-3 text-center list-group-item active" onClick={()=>gotoroom(items.id)}>{items.name}</h3>
           ))
        }
        
    </>
  )
}

export default Dash