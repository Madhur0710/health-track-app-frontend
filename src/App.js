import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import HealthRecordDetail from './components/HealthRecordDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/record/:id" element={<HealthRecordDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
