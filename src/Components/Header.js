import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => 
{
  let navigate = useNavigate();


  let logoutHandler = () => {
    // localStorage.clear();
    // sessionStorage.clear();
    sessionStorage.removeItem('custname');
    sessionStorage.removeItem('custemail');
    navigate('/')
  }


  let loginHandler = () => {
    navigate('/login');
  }


  let signUpHandler = () => {
    navigate('/signup');
  }

  return (
    <>
      <div className="bg-warning d-flex justify-content-between align-items-center">
        <div className="">
          <Link to="/"><img src="/img/logo.png" alt="logo" className="logo" /></Link>
        </div>
        <div className="">
          <h3>Your real estate destination</h3>
        </div>
        <div className="me-5">
          {
            // (localStorage.getItem('custname')) ?
            (sessionStorage.getItem('custname')) ?
              <>
                {/* <h6> Welcome { localStorage.getItem('custname') }! </h6> */}
                <h6> Welcome {sessionStorage.getItem('custname')}! </h6>
                <button onClick={logoutHandler} className="btn btn-danger mx-3"> Logout </button>
              </>
              :
              <>
                <button className="btn btn-primary mx-3" onClick={loginHandler}> Login</button>
                <button className="btn btn-success" onClick={signUpHandler}> SignUp </button>
              </>
          }
        </div>
      </div>
    </>
  )
}

export default Header