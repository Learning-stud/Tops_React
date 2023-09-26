import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <NavLink className="navbar-brand" to="/">COMPANY NAME</NavLink>
                </div>
                <div className="header-right">
                    <a href="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></a>
                    <a href="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></a>
                    <a href="login.html" className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></a>
                </div>
            </nav>
            {/* /. NAV TOP  */}
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <div className="user-img-div">
                                <img src="assets/img/user.png" className="img-thumbnail" />
                                <div className="inner-text">
                                        jay Ahalpara
                                    <br />
                                    <small>Last Login : 2 Weeks Ago </small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink className="active-menu" to="/dashboard"><i className="fa fa-dashboard " />Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/table"><i className="fa fa-flash " />Data Tables </NavLink>
                        </li>
                        <li>
                            <NavLink to="/form"><i className="fa fa-desktop " />Basic </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Dashboard"><i className="fa fa-sign-in " />Login Page</NavLink>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-desktop "></i>Add<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <NavLink to="/addCategory"><i class="fa fa-edit"></i>Add Category</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/addProduct"><i class="fa fa-edit "></i>Add Product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/addBlog"><i class="fa fa-edit "></i>Add Blog</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-desktop "></i>Manage<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <NavLink to="/ManageOrder"><i class="fa fa-send"></i>Manage Order</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ManageUser"><i class="fa fa-send "></i>Manage User</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Manageproduct"><i class="fa fa-send "></i>Manage Product</NavLink>
                                </li>
                               
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header