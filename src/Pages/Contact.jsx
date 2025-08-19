import "../Globel Css/Contact.css"
import NavBar from '../Components/NavBar'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'
import { FaCity } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import contactImg from "../assets/contact photo.jfif"


const Contact = () => {
  return (
    <>
      <NavBar/>
      <h1 style={{color:"green" , display : "flex" , justifyContent:"center" , padding : 30}}>Contact Me</h1>
      <div className="contactContainer">
  <div className="contactContext">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/malik-zeeshan-aziz-8b507535a/"><LiaLinkedin className='linkedinIcon'/> linkden</a>    </li>
             <li>  <a href='malikzeeshanaziz672@gmail.com'><MdEmail className='emailIcon'/> E-mail</a>    </li>
            <li>
          <a><FaCity className='cityIcon'/>  City : Rawalpindi , Pakistan</a>  
            </li>
            <li>
              <a href="03174697690"> <BiPhoneCall className='phoneIcon'/> Phone Number </a>
            </li>
        </ul>
      </div>

        <div><img src={contactImg} alt="" /></div>
      </div>
    
    </>
  )
}

export default Contact