import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllHealthRecords = async () => {
  return await axios.get(API_URL);
};

export const getHealthRecordById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const addHealthRecord = async (data) => {
  return await axios.post(API_URL, data);
};

export const updateHealthRecord = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data);
};

export const deleteHealthRecord = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
