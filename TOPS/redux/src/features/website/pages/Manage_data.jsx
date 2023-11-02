import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  userfetch,
  deletedata,
  usersinglefetch,
  updatedata,
} from "../../userReducer";

function Manage_data() {
  const dispatch = useDispatch();
  const { alluser, singleuser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(userfetch());
    if (singleuser) {
      setFormvalue(singleuser);
    }
  }, [singleuser, alluser]);

  const deletehandel = (id) => {
    dispatch(deletedata(`http://localhost:3000/user/${id}`));
    dispatch(userfetch());
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const edithandel = (id) => {
    dispatch(usersinglefetch(id));
  };

  const changehandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const submithandel = (e) => {
    e.preventDefault();
    dispatch(
      updatedata(`http://localhost:3000/user/${formvalue.id}`, formvalue)
    );
    dispatch(userfetch());
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row mt">
              <div className="col-md-12">
                <div className="content-panel">
                  <h4>
                    <i className="fa fa-angle-right" /> Manage User
                  </h4>
                  <hr />
                  <table className="table table-striped table-advance table-hover">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th> Name</th>
                        <th> Email</th>
                        <th> Password</th>
                        <th> Mobile</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alluser.map((value) => {
                        return (
                          <tr>
                            <th>{value.id}</th>
                            <th>{value.name}</th>
                            <th>{value.email}</th>
                            <th>{value.password}</th>
                            <th>{value.mobile}</th>
                            <th>
                              <button
                                className="btn btn-danger"
                                onClick={() => deletehandel(value.id)}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-primary"
                                onClick={() => edithandel(value.id)}
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                              >
                                Edit
                              </button>
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="modal" id="myModal">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title">Modal Heading</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
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

                                <button
                                  type="submit"
                                  onClick={submithandel}
                                  data-bs-dismiss="modal"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /content-panel */}
              </div>
              {/* /col-md-12 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_data;
