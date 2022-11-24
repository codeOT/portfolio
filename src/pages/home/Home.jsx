import { NavLink } from 'react-router-dom'
import image from '../../assets/user-1.png'
import '../home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// typed.js
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'



function Home() {

  const write = useRef(null)

  useEffect(()=>{
    const typed = new Typed(write.current, {
      strings: ['Front end web developer', 'Technical Writer', 'CodeOT'],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 10,
      loop: true,
      smartBackspace: true,
      showCursor: false,
      
    })

    return () =>{
      typed.destroy()
    }

  },[])

  return (
    <div className='home'>
      <div className="image">
        <img src={image} className='image' alt="" />
      </div>

      <div className="content">
        <h3>hi, i am <span className='name'>oni toheeb damilare</span></h3>
        <span className="auto auto-type" ref={write}></span>
        <p>Highly experienced in designing & developing custom websites.</p>
       <><NavLink to='/about' className="btn"> about me <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon> </NavLink></>
       {/* <><NavLink to='/about' className="btn"> about me <i icon={faUser} className='icon'></i> </NavLink></> */}
      </div>

    </div>
  )
}

export default Home