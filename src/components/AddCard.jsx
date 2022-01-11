import axios from "axios";
import React,{useRef} from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./AddCard.css";

const AddCard = () => {

  const nameRef = useRef();
  const dateRef = useRef();
  const history = useHistory();

  const submitHandler = async (event)=>{
    event.preventDefault();
    const name = nameRef.current.value;
    const dob = dateRef.current.value;
    try{
      await axios.post('http://localhost:5000/api/addcard',{
        name:name,
        dob:dob
      },{
        headers:{
          'Content-Type':'application/json'
        }
      })
      history.replace('/');
    }catch(err){
      alert('Something went wrong.Please try again later.')
    }
  }
  return (
    <div className="addCard">
      <h1>Add Card</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" ref={nameRef}/>
        <label htmlFor="name">Date of Birth(DOB)</label>
        <input type="date" name="dob" ref={dateRef}/>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddCard;
