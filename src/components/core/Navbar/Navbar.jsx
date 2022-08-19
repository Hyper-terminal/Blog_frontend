import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import MobileNavbar from './MobileNavbar';
import { signout, isAuthenticated } from '../../auth/index';

const Navbar = () => {

  const navigate = useNavigate();

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



            {isAuthenticated() ?
              <>

                <li className="app__flex " key="link-users">
                  <div />
                  <Link className="desktop_link" to="/users">
                    Users
                  </Link>
                </li>

                <li className="app__flex " key="link-profile">
                  <div />
                  <Link className="desktop_link" to={`user/${isAuthenticated().user._id}`}>
                    {`${isAuthenticated().user.name}'s profile`}
                  </Link>
                </li>


                <li className="app__flex " key="link-signout">
                  <div />
                  <a style={{ cursor: 'pointer' }} className="desktop_link"
                    onClick={() => signout(() => navigate("/"))}
                  >
                    Sign Out
                  </a>
                </li>

              </>
              : <>


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
              </>}
          </ul>
        </div>
      </div>

      <MobileNavbar />

    </nav >
  );
};

export default Navbar;
