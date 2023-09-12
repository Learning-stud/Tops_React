import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageOrder() {
    useEffect(() => { fetch() }, []);
    const [data, setData] = useState([]);

    const fetch = async () => {
        const result = await axios.get("http://localhost:3000/order")
        setData(result.data);
        // console.log(result)

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line" style={{ color: '#337ab7', fontWeight: 'bold' }}>Data Table</h1>
                        <h1 className="page-subhead-line" style={{ color: '#777' }}>This is dummy text, you can replace it with your original text.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading" style={{ backgroundColor: '#f5f5f5' }}>
                                Manage Order
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '5%' }}>#</th>
                                                <th style={{ width: '20%' }}>First Name</th>
                                                <th style={{ width: '20%' }}>Last Name</th>
                                                <th style={{ width: '20%' }}>Username</th>
                                                <th style={{ width: '15%' }}>Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((user)=>{
                                                const {id,orderNo, username, coffeeType, price}=user;
                                                return (
                                                    <tr>
                                                    <td>{id}</td>
                                                    <td>{orderNo}</td>
                                                    <td>{username}</td>
                                                    <td>{coffeeType}</td>
                                                    <td>{price}</td>
                                                    <td>
                                                        <button type="submit" className="btn btn-info" style={{ marginRight: '5px' }}>Apply</button>
                                                        <button type="submit" className="btn btn-danger">Delete</button>
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

export default ManageOrder;
