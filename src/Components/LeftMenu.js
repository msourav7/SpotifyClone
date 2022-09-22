import React from 'react'
// import '.'
import '../Styles/LeftMenu.css'
import { FaSpotify, FaEllipsisH } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi'
import { Menu } from './Menu';
import {MenuList} from './MenuList'
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';


function LeftMenu() {
  return (
    <div className='leftMenu'>
      <div className='logoContainer'>
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className='searchBox'>
        <input type='text' placeholder='Search...' />
        <i className='searchIcon'> <BiSearchAlt /> </i>
      </div>
      <Menu title={'Menu'} menuObject={MenuList}/>
      {/* all this we are doing inside Menu after importing it from Menu component */}
      { /* // Menu is hardcoded and passed as a prop to Menu.js in <p></p> */ }


       {/* now importing another component MenuPlayList for some operation on playlist in leftMenu (for passing props)*/}
      <MenuPlayList />

      {/* importing TrackList */}
      <TrackList />
    </div>
  )
}

export { LeftMenu };