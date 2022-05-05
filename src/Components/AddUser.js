import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import axios from 'axios';
function AddUser(props) {
    const [nname,setName]=useState("");

  const onSubmit = (e) => {
        //console.log(value);
        e.preventDefault();
        const idu = props.uu[props.uu.length-1].id+1;
        const user1 = {
          id : idu,
          username: nname,
          email : "---------",
          phone: "12354879"
        }
        console.log(props.uu)
         const b= axios.post('https://jsonplaceholder.typicode.com/users', user1)
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
        props.adduser(props.uu,user1);
        props.st(props.uu);
        console.log(nname);
        //console.log(liste[1]);
 
  }
  return (
   
      <div style={{ margin: "20px", display: "flex", justifyContent: "center" }}>
      <Form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add user"
          style={{ margin: "1px" }}
          value={nname}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <Button type="submit" style={{ margin: "1px" }}>
          Add  user
        </Button>
      </Form>
    </div>
    
  )
}

export default AddUser
