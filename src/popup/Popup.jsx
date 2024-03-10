import React from "react";
import TextInput from "./components/TextInput/TextInput";
import AppProvider from "./context/AppProvider";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Sidebar from "./components/Sidebar/Sidebar";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const CaleoMain = () => {
  return (
    <AppProvider>
      <div>
        <User />
        <h1>Caleo is WIP</h1>
        <TextInput />
        <SubmitButton />
      </div>
    </AppProvider>
  );
};

const Popup = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <div className="hamburger-icon" onClick={toggleSidebar}>
          <span>☰</span>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CaleoMain" element={<CaleoMain />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Popup;
