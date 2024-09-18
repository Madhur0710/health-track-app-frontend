import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHealthRecordById, deleteHealthRecord } from '../services/HealthService';

const HealthRecordDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    const fetchRecord = async () => {
      const response = await getHealthRecordById(id);
      setRecord(response.data);
    };
    fetchRecord();
  }, [id]);

  const handleDelete = async () => {
    await deleteHealthRecord(id);
    navigate('/');
  };

  if (!record) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Record Details</h1>
      <p><strong>Date:</strong> {new Date(record.date).toLocaleDateString()}</p>
      <p><strong>Body Temperature:</strong> {record.bodyTemperature}°C</p>
      <p><strong>Blood Pressure:</strong> {record.bloodPressure}</p>
      <p><strong>Heart Rate:</strong> {record.heartRate} bpm</p>
      <div className="mt-4">
        <button
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HealthRecordDetail;
