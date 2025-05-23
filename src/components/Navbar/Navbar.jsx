import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const[sticky, setSticky] = useState(false);

  // changing navbar color on scrolling
  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
     setMobileMenu(!mobileMenu);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu  ? 'hide-mobile-menu' : ''}>
        <li><Link to="hero" smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to="programs" smooth={true} duration={500} offset={-260}>Program</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-160}>About us</Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-260}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-260}>Testimonials</Link></li>
        <li>
          <Link className="btn" to="contact" smooth={true} duration={500} offset={-240} >Contact us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
