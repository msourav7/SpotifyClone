import React, { useState, useEffect } from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import { Songs } from './Songs'
import {MusicPlayer} from './MusicPlayer'


function AudioList() {

// instead of using { Songs } component directly we passed it to a state, so state will manage whenever that particular Song(component) will be updated(whenever a new favourite is clicked or detected) it will rerender its new value using spread operator 
    const [songs,setSongs] = useState(Songs)

    const [song, setSong] = useState(Songs[0].song)
    const [img, setImage] = useState(Songs[0].imgSrc)

    useEffect(()=>{
        const songs=document.querySelectorAll('.songs')

        function changeMenuActive(){
            songs.forEach((n)=>n.classList.remove('active'))
             this.classList.add('active')//this the current clicked option to add 
        }

        songs.forEach((n)=>n.addEventListener('click', changeMenuActive))
    },[])


    const changeFavourite = (id) => {
        Songs.forEach((song) => {
            if (song.id == id) {
                song.favourite = !song.favourite
                // if passed id of song is equal to the current song's id then reverse the favourite (and show the new favourite icon)
            }
        })
        setSongs([...Songs])
        // using spread operator or destructuring to add new values whenever it rerenders whenever a new favourite is clicked or detected
    }


 //in set song our song will be placed and in our song image(imgSrc) our set imge will be loaded   
    const setMainSong=(songSrc, imgSrc)=>{
        setSong(songSrc)
        setImage(imgSrc)
    }

    return (
        <div className='audioList'>
            <h2 className='title'>
                The List <span>{`${Songs.length} songs`}</span>
            </h2>

            <div className='songsContainer'>

                {
                    Songs && Songs.map((song, index) => (
                        <div className='songs' key={song?.id} // passing song to play and its image to a fn with onclick event to only this particular id's song. 
                        onClick={()=>setMainSong(song?.song,song?.imgSrc)}
                        >
                            <div className='count'>{`#${index + 1}`}</div>
                            <div className='song'>

                                <div className='imgBox'>
                                    <img src={song?.imgSrc} alt='' />
                                </div>

                                <div className='section'>
                                    <p className='songName'>
                                        {song?.songName}
                                        <span className='spanArtist'>{song?.artist}</span>
                                    </p>

                                    <div className='hits'>
                                        <p className='hit'>
                                            <i><FaHeadphones /></i>
                                            9,345,244
                                        </p>
                                        <p className='duration'>
                                            <i><FaRegClock /></i>
                                            03.04
                                        </p>
                                        <div className='favourite'
                                            onClick={() => changeFavourite(song?.id)}
                                        >
                                            {
                                                song?.favourite ? (
                                                    <i>
                                                        <FaHeart />
                                                    </i>)
                                                    :
                                                    (<i>
                                                        <FaRegHeart />
                                                    </i>)
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* passing our two states (song and img)  to MusicPlayer component */}
            <MusicPlayer song={song} imgSrc={img} />
        </div>
    )
}

export { AudioList }