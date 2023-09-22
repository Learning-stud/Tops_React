import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function UserProfile() {
  const [formvalue, setFormvalue] = useState({
    name: '',
    email: '',
    phoneNo: '',
    password: '',
  });

  const [userData, setUserData] = useState(null); // State to store user data fetched using GET

  useEffect(() => {
    // Fetch user data when the component mounts
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/usertable`);
      setUserData(response.data); // Assuming the response contains user data
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleChange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const result = await axios.post(`http://localhost:3000/usertable`, formvalue);
        if (result.status === 201) {
          toast.success('Profile Updated Successfully');
          setFormvalue({ ...formvalue, name: '', email: '', phoneNo: '', password: '' });
          getUserData(); // Refresh user data after updating
        }
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  function validation() {
    let result = true;
    if (formvalue.name === '') {
      toast.error('Name Field is required!');
      result = false;
    }
    if (formvalue.email === '') {
      toast.error('Email Field is required!');
      result = false;
    }
    if (formvalue.phoneNo === '') {
      toast.error('Phone No Field is required!');
      result = false;
    }
    if (formvalue.password === '') {
      toast.error('Password Field is required!');
      result = false;
    }
    return result;
  }

  return (
    <div>
      {/* Render user data (GET) */}
      {userData && (
        <div>
          <h1>User Profile</h1>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone Number: {userData.phoneNo}</p>
        </div>
      )}

      {/* Update user profile form (POST) */}
      <div className="mail_section">
        <div className="email_text">
          <form onSubmit={handleUpdateProfile}>
            <div className="form-group">
              <input
                type="text"
                value={formvalue.name}
                onChange={handleChange}
                name="name"
                className="email-bt"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={formvalue.email}
                onChange={handleChange}
                name="email"
                className="email-bt"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                value={formvalue.phoneNo}
                onChange={handleChange}
                name="phoneNo"
                className="email-bt"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={formvalue.password}
                onChange={handleChange}
                name="password"
                className="email-bt"
                placeholder="Password"
              />
            </div>

            <div className="send_btn">
              <button type="submit" className="main_bt">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
