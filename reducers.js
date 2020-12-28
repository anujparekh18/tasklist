import { combineReducers } from 'redux';
import * as types from './types';

const initialTodoList = {
  completedList: [],
  uncompletedList: [],
};

const todoReducer = (state = initialTodoList, { type, payload }) => {
  switch (type) {
    case 'TODO':
      const { completedList, uncompletedList } = payload;
      const updatedTodoList = {
        ...state,
        completedList,
        uncompletedList,
      };
      return updatedTodoList;
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  todoList: todoReducer,
};

export default combineReducers(reducers);
