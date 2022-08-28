// import React from 'react';

// import SubHeading from '../SubHeading/SubHeading';
// import './Newsletter.css';

// const Newsletter = () => (
//   <div className="app__newsletter">
//     <div className="app__newsletter-heading">
//       <SubHeading title="Newsletter" />
//       <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
//       <p className="p__opensans">And never miss latest Updates!</p>
//     </div>
//     <div className="app__newsletter-input flex__center">
//       <input type="email" placeholder="Enter your email address" />
//       <button type="button" className="custom__button">Subscribe</button>
//     </div>
//   </div>
// );

// export default Newsletter;

import React,{useState} from 'react';
//import { db } from './firebase';
import './Newsletter.css';
const Newsletter = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://faizan-788d2-default-rtdb.firebaseio.com/userDataRecords.json",
        
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored Successfully!");
      } else {
        alert("Please fill the data...");
      }
    } else {
      alert("Please fill the data...");
    }
  };

  return (
    <>
      <section className="app__newsletter">
                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST" className='app__newsletter-input'>
                  <h1 className='heading' id='connect'>Connect with us</h1>
                    <div className="">
                      <div className="">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="custom__button"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
      </section>
    </>
  );
}

export default Newsletter;