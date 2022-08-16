import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav>
      <div className="app__navbar">
        <div>
          <ul className="app__navbar-links">
            <li className="app__flex " key="link-home">
              <div />
              <Link className="desktop_link" to="/">
                Home
              </Link>
            </li>

            <li className="app__flex " key="link-signin">
              <div />
              <Link className="desktop_link" to="signin">
                Sign In
              </Link>
            </li>

            <li className="app__flex " key="link-signup">
              <div />
              <Link className="desktop_link" to="signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile menu */}
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
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
