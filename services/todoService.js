import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_TODO_URL;

export const config = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const todoListService = async () =>
  axios.get(`${baseUrl}/api/v1/users/1/tasks`);

export const addTodoService = async (params) =>
  axios.post(`${baseUrl}/api/v1/users/1/tasks`, config, { params });

export const updateTodoService = async (id, params) =>
  axios.put(`${baseUrl}/api/v1/users/1/tasks/${id}`, config, { params });

export const deleteTodoService = async (id) =>
  axios.delete(`${baseUrl}/api/v1/users/1/tasks/${id}`);

export const completeTodoService = async (id) =>
  axios.put(`${baseUrl}/api/v1/users/1/tasks/${id}/completed`);

export const uncompleteTodoService = async (id) =>
  axios.put(`${baseUrl}/api/v1/users/1/tasks/${id}/uncompleted`);
