import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageUser() {
    useEffect(() => {
        fetchUsers();
    }, []);

    const [data, setData] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const fetchUsers = async () => {
        const result = await axios.get("http://localhost:3000/usertable");
        setData(result.data);
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
        setIsEditing(true);
    };
    const onchange = async (id) => {
        await axios.delete(`http://localhost:3000/usertable/${id}`);
        fetchUsers();
        alert("thai gayu");

        // console.log(result)

    }
    const handleEditSubmit = async () => {
        try {
            await axios.put(`http://localhost:3000/usertable/${editingUser.id}`, editingUser);
            fetchUsers();
            setIsEditing(false);
            alert("User data updated!");
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line" style={{ color: '#337ab7', fontWeight: 'bold' }}>User Table</h1>
                        <h1 className="page-subhead-line" style={{ color: '#777' }}>This is dummy text, you can replace it with your original text.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading" style={{ backgroundColor: '#f5f5f5', color: '#333', fontWeight: 'bold' }}>
                                Manage User
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '5%', color: '#333' }}>#</th>
                                                <th style={{ width: '20%', color: '#333' }}>Name</th>
                                                <th style={{ width: '20%', color: '#333' }}>Email</th>
                                                <th style={{ width: '20%', color: '#333' }}>Phone</th>
                                                <th style={{ width: '20%', color: '#333' }}>Password</th>
                                                <th style={{ width: '15%', color: '#333' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phoneNo}</td>
                                                    <td>{user.password}</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info"
                                                            onClick={() => handleEditClick(user)}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            onClick={() => onchange(user.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isEditing && (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Edit User</h2>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editingUser.name}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, name: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={editingUser.email}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, email: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editingUser.phoneNo}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, phoneNo: e.target.value })
                                    }
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleEditSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ManageUser;
