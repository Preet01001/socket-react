import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import socket from './Socket';

function Room() {
  const location = useLocation();
  const {userid} = location.state;
  //console.log(userid)
  let navigateto = useNavigate();
  let[mess,setMess]= useState();
  let[rmess,setRmess] = useState([]);
 // let[smess,setSmess]= useState([]);

  let socketid = socket.id;

  useEffect(()=>{
    if(socketid==null){
     navigateto("/")
    }
    socket.on('recieved', (message) => {
      console.log(message);
      //setRmess(message);
      setRmess(prevMessages => [...prevMessages, message]);
      console.log(rmess)
    });
  },[socketid, navigateto])
 // console.log({mess,socketid})
  
  // socket.on("recieved",(message)=>{
  //   console.log(message);
  //   setRmess(message)
  //   if(rmess==null){
  //   }else{
  //     console.log(rmess)
  //   }
  // })
  function sbmt(e){
    e.preventDefault();
    socket.emit("message",{userid,mess});
    setRmess(prevMessages => [...prevMessages, mess]);
    setMess("");
  }
  return (
    <>
      <h1 className="mt-4 mb-3 text-center">Room</h1>
         <form onSubmit={sbmt} className="form-group m-5">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your username"
                value={mess}
                onChange={(e) => setMess(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-3">
                send
            </button>
        </form>
        <div className=''>
        <h2 className="mt-4 mb-3 p-5 text-center border border-primary-subtle bg-secondary text-light m-5">{rmess.map((message, index) => (
          <div key={index}>
            <p className=''>{message}</p>
          </div>
        ))}
        {/* {smess.map((message, index) => (
          <div key={index}>
            <p>you: {message}</p>
          </div>
        ))} */}
        
        </h2>
        </div>
    </>
  )
}

export default Room

