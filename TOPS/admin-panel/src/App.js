import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login";
import Form from "./Page/Form";
import Table from "./Page/Table";
import AddCategory from './Page/AddCategory';
import AddProduct from './Page/AddProduct';
import AddBlog from './Page/AddBlog';
import ManageOrder from './Page/ManageOrder';
import ManageProduct from './Page/ManageProduct';
import ManageUser from './Page/ManageUser';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (

    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<><Login /></>}></Route>
        <Route path="/dashboard" element={<><Header /> <Dashboard /> <Footer /> </>}></Route>
        <Route path="/form" element={<><Header /> <Form /> <Footer /> </>}></Route>
        <Route path="/table" element={<><Header /> <Table /> <Footer /> </>}></Route>
        <Route path="/addCategory" element={<><Header /> <AddCategory /> <Footer /></>}></Route>
        <Route path="/addProduct" element={<><Header /> <AddProduct /> <Footer /></>}></Route>
        <Route path="/addBlog" element={<><Header /> <AddBlog /> <Footer /></>}></Route>
        <Route path="/ManageOrder" element={<><Header /> <ManageOrder /></>}></Route>
        <Route path="/ManageProduct" element={<><Header /> <ManageProduct /></>}></Route>
        <Route path="/ManageUser" element={<><Header /> <ManageUser /></>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
