import React, {useState, useRef, useEffect} from 'react'
import '../Styles/MusicPlayer.css'
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'



// passing two props from AudioList
function MusicPlayer({song,imgSrc}) {
     

    const [isLove, setLoved] = useState(false)
    const[isPlaying, setPlaying]=useState(false);
    const[duration , setDuration] = useState(0)
    const[currentTime,setCurrentTime]=useState(0)
    const audioPlayer = useRef() // this is for our audio tag ,its using reference audio to to change audio
    const progressBar = useRef()// this is for our prgress bar,its using reference of progressbar to to change progress

    const animationRef = useRef()

    useEffect(()=>{
        const seconds =Math.floor(audioPlayer.current.duration) //to take duration audio has inbuilt method 

        setDuration(seconds)
    } ,[
        audioPlayer?.current?.loadedmetadata,
        audioPlayer?.current?.readyState//lmdata nd rstate these are comming from audio html tag
    ])

    const changePlayPause=()=>{
        const prevValue = isPlaying //capturing the previousValue and execution according to the previous value not with the new value
        if(!prevValue){
            //note: audio tag has its own play and pause function play to play and pause the audio            
          audioPlayer.current.play()
        animationRef.current=requestAnimationFrame(whilePlaying)
         }else{
             audioPlayer.current.pause()
             cancelAnimationFrame(animationRef.current)
            }

         setPlaying(!prevValue) 
    }


    const CalculateTime = (sec) =>{
        const minutes = Math.floor(sec/60)
        //<10 -> 09 or 11,12
        const returnMin = minutes<10?`0${minutes}` : `${minutes}`

        const seconds = Math.floor(sec%60);
        const returnsec = seconds<10? `0${seconds}` :`${seconds}`

        return `${returnMin}:${returnsec}`
    }

    

    const whilePlaying = ()=>{
        progressBar.current.value=audioPlayer.current.currentTime
        changeCurrentTime()
        animationRef.current=requestAnimationFrame(whilePlaying)
    }

    const changeProgress = ()=>{
        audioPlayer.current.currentTime=progressBar.current.value
        changeCurrentTime()
    }

    const changeCurrentTime=()=>{
        progressBar.current.style.setProperty('--player-played',`${(progressBar.current.value/duration)*100}%`)

        setCurrentTime(progressBar.current.value)
    }

 
    const changeLoved=()=>{
        setLoved(!isLove)
    }

  return (
    <div className='musicPlayer'>
        {/* for loading the image in audio player */}
        <div className='songImage'>
            <img src={imgSrc} alt=''/>
        </div>
        <div className='songAttribute'>
            <audio src={song} preload='metadata'
            // refering audioPlayer here
            ref={audioPlayer}/>
            <div className='top'>
                <div className='left'>
                    <div className='loved' onClick={changeLoved}>
                    {isLove?( <i><FaHeart /></i>):(<i><FaRegHeart/></i>)}
                    </div>
                    <div className='download'>
                     <i>< BsDownload /></i>
                    </div>
                </div>
                <div className='middle'>
                    <div className='back'>
                        <i>< FaStepBackward/></i>
                        <i>< FaBackward/></i>

                    </div>
                    <div className='playPause' onClick={changePlayPause}>
                        {isPlaying? (<i><FaPause /></i>) : (<i><FaPlay /></i>)}
                    </div>
                    <div className='forward'>
                        <i><FaForward /></i>
                        <i><FaStepForward /></i>
                    </div>
                </div>
                <div className='right'><FaShareAlt /></div>
            </div>
            <div className='bottom'>
                <div className='currentTime'>{CalculateTime(currentTime)}</div>
        
                <input className='progressBar' type='range'  ref={progressBar} onChange={changeProgress}/>
                
                <div className='duration'>{(duration&&!isNaN(duration)&&CalculateTime(duration)) ? CalculateTime(duration):'00.00'}</div>
                {/* if it has duration and duration and isnan is false it means its a no. and call Calc.fun   */}

            </div>

        </div>

    </div>
  )
}

export  {MusicPlayer}