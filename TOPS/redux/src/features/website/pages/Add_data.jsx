import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insert } from '../../userReducer';
import { toast } from 'react-toastify';

function Add_data() {
  const [formvalue, setFormvalue] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    mobile: '',
  });

  const changehandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const submithandel = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formvalue.name || !formvalue.email || !formvalue.password || !formvalue.mobile) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Additional email format validation
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formvalue.email)) {
      toast.error('Invalid email format.');
      return;
    }

    dispatch(insert(`http://localhost:3000/user`, formvalue));
    setFormvalue({ ...formvalue, name: '', email: '', password: '', mobile: '' });
    toast.success('Data submitted successfully');
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form action="">
              <div className="mb-3 mt-3">
                <label htmlFor="email">Name:</label>
                <input
                  type="text"
                  value={formvalue.name}
                  onChange={changehandel}
                  className="form-control"
                  id="Name"
                  placeholder="Enter Name"
                  name="name"
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  value={formvalue.email}
                  onChange={changehandel}
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  value={formvalue.password}
                  onChange={changehandel}
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd">Mobile:</label>
                <input
                  type="number"
                  value={formvalue.mobile}
                  onChange={changehandel}
                  className="form-control"
                  id="Mobile"
                  placeholder="Enter Mobile"
                  name="mobile"
                />
              </div>

              <button type="submit" onClick={submithandel} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_data;
