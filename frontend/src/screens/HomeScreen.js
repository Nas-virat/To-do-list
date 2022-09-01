import React from 'react'

import { useState, useEffect }from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {IoIosAddCircle} from 'react-icons/io'
import {IconContext } from "react-icons";


import Addtask from "../components/Addtask" 
import Task from "../components/Task"



import "./HomeScreen.css"
const HomeScreen = () => {

  const [add,setadd] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() =>{
    const fetchData = async () => {
      const res = await axios(
        'http://localhost:5000/all');
        console.log(res.data)
        setData(res.data)

      };
        fetchData();
      },[]);
  

  return (
    <div className='homescreen_bg'>
      <div className='container'>
        <h2>All Task</h2>
        <div className='underline'></div>

        <div className='addtask'>
          <IconContext.Provider
          value={{ color: '#FFFFFF', size: '30px' }}
          >
          <Button variant="success" onClick ={() => setadd(!add)}><IoIosAddCircle/>  Add Task</Button>
          </IconContext.Provider>
        </div>

        {
          add && <Addtask/>
        }
        <div className='todolist'>
          {data.length > 0 && data.map(data => {
            return(
            <Task key={data.ID} id={data.ID} topic ={data.Topic} description={data.Description} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen