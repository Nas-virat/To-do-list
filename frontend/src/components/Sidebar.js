import React from 'react'
import "./Sidebar.css"
import {NavLink} from 'react-router-dom'

import {AiFillStar,AiFillHome} from 'react-icons/ai'
import {MdTag} from 'react-icons/md'
import { IconContext } from "react-icons";

const SectionLink = ({name,to,icon}) => {
  return(
      <NavLink 
          to = {to}
          className = {({isActive}) => (isActive ? "selected" : 'notselected')}
      > 
          {icon}{name}
      </NavLink>
  )
}


const Sidebar = () => {
  return (
    <div className='sidebar_bg'>
      <h2>My schedule</h2>
       {/*search*/}
      <div className="container_sidebar">
      <IconContext.Provider
        value={{ size: '30px' }}
        >
        <SectionLink name=" Home" to="/home" icon={<AiFillHome/>}/>
      </IconContext.Provider>
      </div>
    </div>
  )
}

export default Sidebar