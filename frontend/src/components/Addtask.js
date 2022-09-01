import React from 'react'

import "./Addtask.css"

import {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import axios from 'axios';

import {FiSave} from 'react-icons/fi';

const Addtask = () => {

  const [topic, setTopic] = useState("");
  const [description,setDescription] = useState("");

  const addtodolist = async () =>{
    try{
      const res = await axios.post(`http://localhost:5000/add`, {
      "Topic" : topic,
      "Description" : description })
      alert("Added Successfully");
      console.log(res)
    }
    catch(err){
      console.log(err);
    }
  };



  return (
    <div className='container_addtask'>
      <Form>
        <Form.Group className="mb-3" controlId="TopicForm">
          <Form.Label>Topic</Form.Label>
          <Form.Control type="text" placeholder="topic" 
            defaultValue = { topic || "" }
            onChange = {e => setTopic(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="DescriptionForm">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} 
              defaultValue = { description || "" }
              onChange = {e => setDescription(e.target.value)} required /> 
        </Form.Group>
        <Button className='mx-3 w-25' variant="success" type="submit" onClick ={addtodolist}><FiSave/> SUBMIT</Button>
      </Form>
    </div>
  )
}

export default Addtask