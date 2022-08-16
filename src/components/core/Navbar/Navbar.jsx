import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {

  const [toggle, setToggle] = React.useState(false)



  return (
    <nav>
      <div className='app__navbar'>
        <div >
          <ul className='app__navbar-links'>


            <li className='app__flex ' key='link-home'>
              <div />
              <Link className='a' to="home">Home</Link>
            </li>


            <li className='app__flex ' key='link-signin'>
              <div />
              <Link className='a' to="signin">Sign In</Link>
            </li>


            <li className='app__flex ' key='link-signup'>
              <div />
              <Link className='a' to='signup'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile menu */}
      <div className='app__navbar-mobile'>
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >

              <ul className='app__navbar-links'>


                <li key='home'>
                  <div />
                  <Link onClick={() => setToggle(false)} className='a' to="home">Home</Link>
                </li>


                <li key='signin'>
                  <div />
                  <Link onClick={() => setToggle(false)} className='a' to="signin">Sign In</Link>
                </li>


                <li key='signup'>
                  <div />
                  <Link onClick={() => setToggle(false)} className='a' to='signup'>Sign Up</Link>
                </li>
              </ul>

              <HiX onClick={() => setToggle(false)} />

            </motion.div>
          )}

        </div>
      </div>



    </nav >



  )
}

export default Navbar;