import { Link } from 'react-router-dom';

const HealthRecord = ({ record, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow mb-4">
      <p><strong>Date:</strong> {new Date(record.date).toLocaleDateString()}</p>
      <p><strong>Body Temperature:</strong> {record.bodyTemperature}°C</p>
      <p><strong>Blood Pressure:</strong> {record.bloodPressure}</p>
      <p><strong>Heart Rate:</strong> {record.heartRate} bpm</p>
      <div className="mt-2">
        <Link
          to={`/record/${record._id}`}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          View Details
        </Link>
        <button
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => onEdit(record)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => onDelete(record._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HealthRecord;
