import React, { useState, useEffect } from "react";
import axios from "axios";
function ManageUser() {
    useEffect(() => { fetch() }, []);
    const [data, setData] = useState([]);
    
    const fetch = async () => {
        const result = await axios.get("http://localhost:3000/user")
        setData(result.data);
        // console.log(result)
        
    }

    
    const onchange = async (id) => {
        await axios.delete(`http://localhost:3000/user/${id}`);
        fetch();
        alert("thai gayu");
        
        // console.log(result)
        
    }
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
                                                <th style={{ width: '20%', color: '#333' }}>Phone</th>
                                                <th style={{ width: '20%', color: '#333' }}>Email</th>
                                                <th style={{ width: '15%', color: '#333' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {data.map((user) => {
                                                const { id, name, email, phone } = user;
                                                return (
                                                    <tr>
                                                        <td>{id}</td>
                                                        <td>{name}</td>
                                                        <td>{phone}</td>
                                                        <td>{email}</td>
                                                        <td>
                                                            <button type="submit" className="btn btn-info" style={{ marginRight: '5px' }}>Edit</button>
                                                            <button type="submit" className="btn btn-danger"  onClick={()=>onchange(id)} >Delete</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
