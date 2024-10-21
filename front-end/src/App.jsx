import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar'; 
import './index.css';

const App = () => {
  return (
    <div className="app-container bg-gray-900 text-white min-h-screen p-6">
      <Navbar /> {/* Add the Navbar */}
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
