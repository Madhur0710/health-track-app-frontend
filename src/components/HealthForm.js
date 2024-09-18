import { useState } from 'react';
import { addHealthRecord, updateHealthRecord } from '../services/HealthService';

const HealthForm = ({ recordToEdit, refreshRecords }) => {
  const [formData, setFormData] = useState(
    recordToEdit || { date: '', bodyTemperature: '', bloodPressure: '', heartRate: '' }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recordToEdit) {
      await updateHealthRecord(recordToEdit._id, formData);
    } else {
      await addHealthRecord(formData);
    }
    refreshRecords();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Body Temperature (°C)</label>
        <input
          type="number"
          name="bodyTemperature"
          value={formData.bodyTemperature}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Blood Pressure</label>
        <input
          type="text"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Heart Rate (bpm)</label>
        <input
          type="number"
          name="heartRate"
          value={formData.heartRate}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        {recordToEdit ? 'Update Record' : 'Add Record'}
      </button>
    </form>
  );
};

export default HealthForm;
