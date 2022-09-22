import React from 'react'
import {BsVolumeUpFill,BsMusicNoteList} from 'react-icons/bs'
import {FaDesktop} from 'react-icons/fa'
import Track from '../img/track.png'


function TrackList() {
  return (
    <div className='trackList'>
        <div className='top'>
            <img src={Track} alt=''/>
            <p className='para'>
                SampleName <span className='ok'>Atrist</span>
            </p>
        </div>
        <div className='bottom'>
            <i><BsVolumeUpFill /></i>
            <input type='range'/>
            <i className='mlist'><BsMusicNoteList /></i>
            {/* <i><FaDesktop /></i> */}
        </div>
    </div>
  )
}

export  {TrackList}