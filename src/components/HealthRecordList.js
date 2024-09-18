import React, { useEffect, useState } from 'react';
import { deleteHealthRecord, getAllHealthRecords } from '../services/HealthService';
import HealthRecord from './HealthRecord';

const HealthRecordList = ({ onEdit, searchQuery, filterHeartRate }) => {
  const [records, setRecords] = useState([]);

  const refreshRecords = async () => {
    const response = await getAllHealthRecords();
    setRecords(response.data);
  };

  const handleDelete = async (id) => {
    await deleteHealthRecord(id);
    refreshRecords();
  };

  useEffect(() => {
    refreshRecords();
  }, []);

  const filteredRecords = records.filter((record) => {
    const matchesSearchQuery =
      searchQuery === '' || record.date.includes(searchQuery);
    const matchesHeartRate =
      filterHeartRate === '' || record.heartRate >= parseInt(filterHeartRate, 10);
    return matchesSearchQuery && matchesHeartRate;
  });

  return (
    <div>
      {filteredRecords.length > 0 ? (
        filteredRecords.map((record) => (
          <HealthRecord
            key={record._id}
            record={record}
            onDelete={handleDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p>No records found.</p>
      )}
    </div>
  );
};

export default HealthRecordList;
