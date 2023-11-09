import axios from "axios";
import { useState } from "react";


const Enquiry = () => {


  let [enquiryObj, setEnquiryObj] = useState({ 'ename': sessionStorage.getItem('custname'), 'email': sessionStorage.getItem('custemail'), 'remarks': '' });
  let [successMsg, seSuccessMsg] = useState('');


  let changeHandler = (e) => {
    setEnquiryObj({ ...enquiryObj, [e.target.name]: e.target.value });
  }


  let clickHandler = async (e) => {
    e.preventDefault();
    console.log(enquiryObj);
    try {
      let resp = await axios.post('process.env.REACT_APP_BACKENDURL/register', { ...enquiryObj });
      let data = await resp.data;
      console.log(data);
      seSuccessMsg('Thanks for reaching out! You will hear back from our Realtor soon');
    }
    catch (error) {
      console.log(" Could not store enquiry.");
      console.log(error);
    }
  }
  if (!(successMsg == '')) {
    return (
      <div>
        <h6 className="text-primary"> {successMsg} </h6>
      </div>
    )
  }
  else {
    return (
      <div>
        <h6> Contact Us About this house :</h6>
        {
          
          <>
            <div className="mb-3">
            <label htmlFor="" className="form-label" >Name</label>
                <input type="text"  name="ename" value={sessionStorage.getItem('custname')} className="form-control" placeholder="" aria-describedby="helpId" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input type="text"  name="email" value={sessionStorage.getItem('custemail')} className="form-control" placeholder="" aria-describedby="helpId" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Message</label>
            <input type="text" onChange={changeHandler} name="remarks" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          </div>
          </>
          
          
            // <div className="mb-3">
            //   <label htmlFor="" className="form-label">Name</label>
            //   <input type="text" onChange={changeHandler} name="ename" id="" className="form-control" placeholder="" aria-describedby="helpId" />
            // </div>
            // <div className="mb-3">
            //   <label htmlFor="" className="form-label">Email</label>
            //   <input type="text" onChange={changeHandler} name="email" id="" className="form-control" placeholder="" aria-describedby="helpId" />
            // </div>
            // <div className="mb-3">
            //   <label htmlFor="" className="form-label">Message</label>
            //   <input type="text" onChange={changeHandler} name="remarks" id="" className="form-control" placeholder="" aria-describedby="helpId" />
            // </div>
          
        }
        <p class="form-text text-muted">
          Cannot submit unless all the fields are filled in
        </p>
        <input name="" id="" onClick={clickHandler} className="btn btn-primary" type="button" value="Submit"
          disabled={!(enquiryObj.ename) || !(enquiryObj.email) || !(enquiryObj.remarks)}
        />
      </div>
    );
  }
}



export default Enquiry;
