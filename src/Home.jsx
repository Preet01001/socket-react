import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import socket from "./Socket"

function Home() {
    let [name,setName]= useState();
    let navigateto = useNavigate();

    function sbmt(e){
        e.preventDefault();
        navigateto("/dash", {state: {name}})
        //console.log(name)
    }

  return (
    <>  <h1 className="mt-4 mb-3 text-center">Home Page</h1>
         <form onSubmit={sbmt} className="form-group m-5">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-3">
                enter room
            </button>
        </form>

    </>
  )
}

export default Home