import React, {useEffect} from 'react'

function Menu({title, menuObject}) { // destructuring the prop

    useEffect(()=>{
        const allLi=document.querySelector('.MenuContainer ul').querySelectorAll('li')

        function changeMenuActive(){
             allLi.forEach((n)=>n.classList.remove('active'))
             this.classList.add('active')//this the current clicked option to add 
        }

        allLi.forEach((n)=>n.addEventListener('click', changeMenuActive))
    },[])

  return (
    <div className='MenuContainer'>
        <p className='title'>{title}</p>

        <ul>{menuObject && menuObject.map((menu)=>(
            // if menuObject has some value then loop in it via map
            <li key={menu.id}>
                
                <a href='#'>
                    <i>{menu.icon}</i>
                    <span>{menu.name}</span>
                </a>
            </li>
        ))}

        </ul>

    </div>
  )
}

export  {Menu}