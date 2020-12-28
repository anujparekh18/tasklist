import * as types from './types';
import {
  todoListService,
  addTodoService,
  updateTodoService,
  deleteTodoService,
  completeTodoService,
  uncompleteTodoService,
} from './services/todoService';

// INITIALIZES LIST ON LOAD
export const todoList = () => (dispatch) => {
  todoListService()
    .then((response) => {
      const list = response.data;
      const uncompletedList = [];
      const completedList = [];
      for (let i = 0; i < list.length; i++) {
        list[i].completed_at !== null
          ? completedList.push(list[i])
          : uncompletedList.push(list[i]);
      }
      dispatch({ type: 'TODO', payload: { completedList, uncompletedList } });
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const addTodoList = (todo) => (dispatch) => {
  addTodoService({ 'task[description]': todo })
    .then((res) => dispatch(todoList()))
    .catch((error) => {
      console.log(error.response);
    });
};

export const updateTodo = (id, todo) => (dispatch) => {
  updateTodoService(id, { 'task[description]': todo })
    .then((res) => dispatch(todoList()))
    .catch((error) => {
      console.log(error.response);
    });
};

export const deleteTodo = (id) => (dispatch) => {
  deleteTodoService(id)
    .then((res) => dispatch(todoList()))
    .catch((error) => {
      console.log(error.response);
    });
};

export const completeTodo = (id) => (dispatch) => {
  completeTodoService(id)
    .then((res) => dispatch(todoList()))
    .catch((error) => {
      console.log(error.response);
    });
};

export const uncompleteTodo = (id) => (dispatch) => {
  uncompleteTodoService(id)
    .then((res) => dispatch(todoList()))
    .catch((error) => {
      console.log(error.response);
    });
};
