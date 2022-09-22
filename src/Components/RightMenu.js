import React from 'react'
import '../Styles/RightMenu.css'
import {Banner} from './Banner'
import { FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from 'react-icons/fa'
import Profile from '../img/profile.jpg'



function RightMenu() {
  return (
    <div className='rightMenu'>
      <div className='goPro'>
        <i>< FaCrown/>
        <p>
          Go<span>Pro</span>
        </p>
        </i>
       <i>
         <FaBell />
       </i>

       <i>
        <FaRegHeart />
       </i>
        </div>      
      <div className='profile'></div>      
        <i>
          <FaSun  style={{'color':'#f1f1f1','cursor':'pointer'}}/>
        </i>
        <i>
          <FaCogs style={{'color':'#f1f1f1','cursor':'pointer'}}/>
          
        </i>
        <div className='profileImage'>
            <img src={Profile}
            style={{'width':'100%','height':'100px','objectFit':'cover','border-radius':'100px'}}/>
        </div>
    </div>
  )
}

export  {RightMenu};