import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {BsMusicNoteList, BsTrash} from 'react-icons/bs'

import {PlayList} from './PlayList'

function MenuPlayList() {
  return (
    <div className='playListContainer '>
        <div className='nameContainer'>
            <p>PlayList</p>
            <i>
                <FaPlus />
            </i>
        </div>
        <div className='playListScroll'>
            {/* now looping through playlist items */}
            {
                PlayList && PlayList.map((list)=>(
                    <div className='playList' key={list.id}>
                        {/* now addin para nd other two icons while looping inside playlist */}
                    <i className='list'>
                          <BsMusicNoteList />
                      </i>
                      <p>{list.name}</p>
                      <i className='trash'>
                          <BsTrash />
                      </i>
                      </div>  
                ))
            }

           
          
           
        </div>

    </div>
  )
}

export  {MenuPlayList}