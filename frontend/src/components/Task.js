import React from 'react'
import axios from 'axios';

import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FiSave} from 'react-icons/fi';

import "./Task.css"

const Task = ({id,topic,description}) => {

  const [edit,setEdit] = useState(false);
  const [edittopic, setEditTopic] = useState("");
  const [editdescription,setEditDescription] = useState("");

  const handleedit = async () =>{
      try{
        const res = await axios.put(`http://localhost:5000/update/${id}`, {
        "Topic" : edittopic ? edittopic : topic,
        "Description" : editdescription ? editdescription : description })
        alert("Updated Successfully");
        console.log(res)
      }
      catch(err){
        console.log(err);
      }
    };

  const handlefinish = async () =>{
    try{
      const res = await axios.delete(`http://localhost:5000/delete/${id}`)

      window.location.reload(false);
      alert("Deleted Successfully");
      console.log(res)
    }
    catch(err){
      console.log(err);
    }
  };


  return (
    <div className='taskInformation'>



      { edit ? 
      
      <div className='container_addtask mx-3'>
        <Form>
          <Form.Group className="mb-3" controlId="TopicForm">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="topic" 
              defaultValue = { topic || "" }
              onChange = {e => setEditTopic(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="DescriptionForm">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} 
                defaultValue = { description || "" }
                onChange = {e => setEditDescription(e.target.value)} required /> 
          </Form.Group>
          <Button className='mx-3 w-25' variant="success" type="submit" onClick ={handleedit}><FiSave/> SUBMIT</Button>
        </Form>
      </div>
      :
      <div className='container_task'>
        <div className='content'>
          <h5 className='mt-3 mx-3'>{topic}</h5>
          <p className='mt-3 mx-3'>{description}</p>
        </div>
        <div className='control'>
          <Button className='mx-3' variant="success" onClick = {()=>setEdit(!edit)}>EDIT</Button>
          <Button className='mx-3' variant="warning" onClick= {handlefinish}>FINISH</Button>
        </div>
      </div>
      }



    </div>
  )
}

export default Task