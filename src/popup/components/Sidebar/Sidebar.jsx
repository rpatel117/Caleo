// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
      <ul>
        {/* Update these links as per your routing setup */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/CaleoMain">CaleoMain</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
