import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import DeleteUser from './DeleteUser';

function ListeUser(props) {
    const style = {
        border: "2px solid",
        borderRadius: "15px",
        margin: "7px",
        display: "flex",
        flexdirection: "column",
        alignItems: "flex-Start",
        flexDirection: "column",
        width: "23%",
        padding :"7px"
        //alignItems: "flexStart",
      };
      const style1 ={
        fontWeight: "bolder",
        textTransform: "uppercase",
    }
  return (
        <div className="container" style={{display: "flex",flexWrap: "wrap",padding: "25px"}}>
          <div className="row">
                {props.ll.map((val)=>(
                <div className="col-3" style={style} key={val.id}>
                    <p style={style1}>{val.id} </p>
                    <p className="card-text"><span style={{color:"green"}}>Username : </span>{val.username}</p>
                    <p className="card-text"><span style={{color:"green"}}>Email : </span>{val.email}</p>
                    <p className="card-text"><span style={{color:"green"}}>Phone : </span>{val.phone}</p>
                    <DeleteUser id={val.id} liste2={props.ll} du={props.deleteuser}/>
                </div>))}
          </div>

    </div>
    
  )
}

export default ListeUser
