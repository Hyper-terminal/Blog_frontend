import './Navbar.scss';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { signout, isAuthenticated } from '../../auth/index';

import React from 'react'

const MobileNavbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();


  return (
    <div style={{ display: 'flex', background: '#edf2f8' }}>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-mobilelinks">

              <li className="mobile_li" key="home">
                <Link
                  onClick={() => setToggle(false)}
                  className="mobile_link"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {
                isAuthenticated()

                  ?

                  <>

                    <li className="mobile_li" key="profile">
                      <Link
                        onClick={() => setToggle(false)}
                        className="mobile_link"
                        to={`user/${isAuthenticated().user._id}`}
                      >
                        {`${isAuthenticated().user.name}'s profile`}
                      </Link>
                    </li>


                    <li className="mobile_li" key="signout">
                      <a
                        style={{ cursor: 'pointer' }}
                        className="mobile_link"
                        onClick={() => signout(() => {
                          setToggle(false)
                          navigate("/")
                        })}
                      >
                        Sign Out
                      </a>
                    </li>
                  </>

                  :

                  <>
                    <li className="mobile_li" key="signin">
                      <Link
                        onClick={() => setToggle(false)}
                        className="mobile_link"
                        to="signin"
                      >
                        Sign In
                      </Link>
                    </li>

                    <li className="mobile_li" key="signup">
                      <Link
                        onClick={() => setToggle(false)}
                        className="mobile_link"
                        to="signup"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
              }

            </ul>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MobileNavbar