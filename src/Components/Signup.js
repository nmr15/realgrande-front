import { useState } from "react";
import axios from 'axios';

const SignUp = () => 
{
  let [signUpObj, setSignupObj] = useState({ name: '', email: '', password: '' });
  let [signUpStatus, setSignUpStatus] = useState(false);
  let [dupUserMsg, setDupUserMsg] = useState('');

  let changeHandler = (e) => 
  {
    setSignupObj({ ...signUpObj, [e.target.name]: e.target.value });
  }

  let clickHandler = async (e) => 
  {
    e.preventDefault();
    
    try
    {
      console.log(signUpObj);
      let resp = await axios.post('http://localhost:3002/signup', { ...signUpObj });
      let data = await resp.data;
      console.log(data);

      if (data) 
      {
        setSignUpStatus(true);
      }
      else
      {
        setDupUserMsg("Email is already in use");
      }
    }
    catch(error)
    {
      setSignUpStatus(false)
      setDupUserMsg("Email is already in use");
      console.log('Could not sign up');
      console.log(error);
    }
  }

  if(!signUpStatus)
  {
    return (
      <div className='row'>
        <div className="col-sm-6 offset-3">
          <h2>{dupUserMsg}</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name="name" onChange={(e) => changeHandler(e)} id="name" className="form-control" placeholder="" aria-describedby="helpId" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">email</label>
              <input type="email" name="email" onChange={(e) => changeHandler(e)} id="email" className="form-control" placeholder="" aria-describedby="helpId" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">password</label>
              <input type="text" name="password" onChange={(e) => changeHandler(e)} id="password" className="form-control" placeholder="" aria-describedby="helpId" />
            </div>
            <button type="submit" onClick={clickHandler} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  else
  {
    return(
      <div className="row mb-4" >
        <div className="col-sm-6 offset-3">
          <h4>Congratulations {signUpObj.name}! You are now registed with Real Grande</h4>
        </div>
      </div>
    )
  }
  
}

export default SignUp;