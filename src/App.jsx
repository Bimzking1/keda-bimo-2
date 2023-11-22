import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import './index.css'

function App() {

  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
