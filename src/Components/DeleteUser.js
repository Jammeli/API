import React from 'react'
import axios from 'axios'

function DeleteUser(props) {

  const Delete =(e)=> 
     {  

        e.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${props.id}`)
        //console.log(res);
        //console.log(res.data);

        props.du(props.liste2,props.id);

        /*const a= props.du;
        a(props.id);
        console.log(props.id)*/
     }
  return (
    <div>
      <form onSubmit={Delete}>
    <button type ='submit'  className="btn btn-warning" style={{fontSize: "8px",fontWeight: "900"}}>Delete User</button>
    </form>
    </div>
  )
}

export default DeleteUser
