import React, { useState } from "react";
import "./linknave.css";
import logo from '../../img/logo-removebg-preview.png'
import contactimg from '../../img/contact-removebg-preview.png'
import {Link} from 'react-scroll'
import menu from '../../img/menu-removebg-preview.png'



const Navbar = () =>{
  const [showmenu, setShowmenu] = useState(false);

    return(
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="desktopMenu">
           <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="dasktopmenulist"> Home</Link>
           <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="dasktopmenulist"> About</Link>
           <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="dasktopmenulist">Portfolio</Link>
           <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="dasktopmenulist">Contact</Link>

        </div>
        <button className="desktopMenubtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactimg} alt="" className="desktopMenuimg"/> contact me </button>
            <img src={menu} alt="Menu" className="mobmenu" onClick={()=>setShowmenu(!showmenu)}/>
        <div className="navemenu" style={{display : showmenu? 'flex':'none'}}>
           <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="listitem" onClick={()=>setShowmenu(false)}>Home</Link>
           <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}> About</Link>
           <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>Portfolio</Link>
           <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>resume</Link>
           <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>contact</Link>
        </div>
      </nav>


    )
}
export default Navbar;

