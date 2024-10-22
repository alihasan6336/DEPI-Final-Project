import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar'; 
import Login from './components/login';
import './index.css';

const App = () => {
  return (
    <div className="app-container bg-gray-900 text-white min-h-screen p-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
