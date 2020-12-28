import { combineReducers } from 'redux';
import * as types from './types';

// // COUNTER REDUCER
// const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1;
//     case types.DECREMENT:
//       return state - 1;
//     case types.RESET:
//       return 0;
//     default:
//       return state;
//   }
// };

// // INITIAL TIMER STATE
// const initialTimerState = {
//   lastUpdate: 0,
//   light: false,
// };

// // TIMER REDUCER
// const timerReducer = (state = initialTimerState, { type, payload }) => {
//   switch (type) {
//     case types.TICK:
//       return {
//         lastUpdate: payload.ts,
//         light: !!payload.light,
//       };
//     default:
//       return state;
//   }
// };

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
