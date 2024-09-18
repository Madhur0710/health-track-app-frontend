import React, { useState } from 'react';
import HealthForm from '../components/HealthForm';
import HealthRecordList from '../components/HealthRecordList';

const Dashboard = () => {
  const [recordToEdit, setRecordToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterHeartRate, setFilterHeartRate] = useState('');

  const handleEdit = (record) => {
    setRecordToEdit(record);
  };

  const refreshRecords = () => {
    setRecordToEdit(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleHeartRateFilter = (e) => {
    setFilterHeartRate(e.target.value);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Health Tracking Dashboard</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Date (YYYY-MM-DD)"
          value={searchQuery}
          onChange={handleSearch}
          className="border p-2 mr-4 text-sm"
        />
        <input
          type="number"
          placeholder="Filter by Heart Rate (bpm)"
          value={filterHeartRate}
          onChange={handleHeartRateFilter}
          className="border p-2 text-sm"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <HealthForm recordToEdit={recordToEdit} refreshRecords={refreshRecords} />
        </div>
        <div>
          <HealthRecordList onEdit={handleEdit} searchQuery={searchQuery} filterHeartRate={filterHeartRate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
