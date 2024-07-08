import React from "react";
import { NavLink } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  // let navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // const handleLogout = () =>{
  //     localStorage.removeItem('token')
  //     navigate("/login")
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 style={{color:'#fff'}} className="inotes">
          iNOTES
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                iNotebook
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <li className="nav-item">
            <NavLink className="nav-link" to="/userdetails">
              <FontAwesomeIcon className="icon" icon={faUser}/>
            </NavLink>
          </li>

          { !isAuthenticated ? (<li className="nav-item">
            <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
          </li>)
          :
          (<li className="nav-item">
            <button className="btn btn-primary"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>)}

          {/* {(!localStorage.getItem('token')) ? <form className="d-flex"> 
                        <NavLink className="btn btn-primary mx-1" to="/login" role="button">Login</NavLink>
                        <NavLink className="btn btn-primary mx-1" to="/signup" role="button">Signup</NavLink>
                    </form> : <button onClick={handleLogout} className='btn btn-primary'>Logout</button>} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
