import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
//import useEffect, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ListeUser from './Components/ListeUser'
import AddUser from './Components/AddUser'
function App() {
  const [users,setUser]=useState([]);
  useEffect (() => {
    console.log('update');
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUser(res.data))},[]);
  
  const deleteuser=(rr,index)=> setUser(rr.filter((el)=>el.id!=index))

  const adduser =(bb,data) => setUser(bb.push(data))
  const setU =(data) => setUser(data)

    /*const b=axios.post('https://jsonplaceholder.typicode.com/users', {
      title : 'Marwen',
      body  : 'MarwenMarweMarwe',
      userId : 1})
      .then(res=>console.log(res))
      .catch(err=>console.error(err))*/

  return (
    <div className="App">
    <AddUser uu={users} adduser={adduser} st={setU}/>
    <ListeUser ll={users} deleteuser={deleteuser}/>
    </div>
  );
}

export default App;
