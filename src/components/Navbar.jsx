import { NavLink } from 'react-router-dom'
import '../components/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
          <><NavLink to = '/'> <FontAwesomeIcon icon={faHome} className='icon'></FontAwesomeIcon> <span>home</span> </NavLink></>
          <><NavLink to ='/about'> <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon> <span>about</span> </NavLink></>
          <><NavLink to = '/portfolio'> <FontAwesomeIcon icon={faBriefcase} className='icon'></FontAwesomeIcon> <span>portfolio</span> </NavLink></>
          <><NavLink to = '/blogs'> <FontAwesomeIcon icon={faBlog} className='icon'></FontAwesomeIcon> <span>blogs</span> </NavLink></>
          <><NavLink to = '/contact'> <FontAwesomeIcon icon={faAddressBook} className='icon'></FontAwesomeIcon> <span>contact</span> </NavLink></>
      </nav>
    </div>
  )
}

export default Navbar