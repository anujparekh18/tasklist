import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodoList,
  updateTodo,
  deleteTodo,
  completeTodo,
  uncompleteTodo,
} from '../actions';

const Counter = () => {
  const [inputId, setInputId] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [newTodo, setNewTodo] = useState('');
  const todo = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const handleListItemClick = (id, value) => {
    setInputId(id);
    setInputValue(value);
  };

  const handleInputSubmit = (updatedValue) => {
    if (inputValue === updatedValue) {
      setInputId('0');
      setInputValue('');
      return;
    }
    dispatch(updateTodo(inputId, inputValue));
    setInputId('0');
    setInputValue('');
  };

  const handleKeyDown = (e, updatedValue) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      handleInputSubmit(updatedValue);
    }
  };

  const handleNewTodo = (e) => {
    if (e.key === 'Enter' && e.shiftKey === false && newTodo.length) {
      e.preventDefault();
      dispatch(addTodoList(newTodo));
      setNewTodo('');
    }
  };

  const sortedUncompletedList = todo.uncompletedList.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const sortedCompletedList = todo.completedList.sort(function (a, b) {
    return new Date(a.completed_at) - new Date(b.completed_at);
  });

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="bg-red-500 text-white text-center lg:text-left shadow-md font-medium py-2 pl-4 h-full w-full">
        TinyList
      </div>
      <div className="my-3 lg:w-1/3">
        <span className="z-10 h-full font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 py-2">
          <i className="text-red-500">+</i>
        </span>
        <input
          type="text"
          value={newTodo}
          placeholder="Add to the list..."
          className="px-3 py-3 pl-10 placeholder-red-500 focus:outline-none focus:ring focus:border-blue-300 text-gray-700 bg-white rounded text-sm w-full"
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => handleNewTodo(e)}
        />
      </div>
      <ul className="w-screen h-screen">
        {sortedUncompletedList &&
          sortedUncompletedList.map((item) => (
            <li
              key={item.id}
              className="flex justify-between w-2/3 lg:w-1/3 mx-auto mt-2 rounded-md cursor-pointer group h-10 lg:hover:bg-red-300"
            >
              <div className="flex w-full items-center rounded-md pl-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 ml-5 float-left cursor-pointer checked:bg-blue-600 checked:border-transparent"
                  onChange={() => dispatch(completeTodo(item.id))}
                />
                <div
                  className="pl-2 w-full"
                  onClick={() => handleListItemClick(item.id, item.description)}
                >
                  {inputId === item.id ? (
                    <input
                      className="px-3 py-2 placeholder-gray-400 focus:outline-none text-gray-700 rounded text-sm w-full"
                      value={inputValue}
                      type="text"
                      onKeyDown={(e) => handleKeyDown(e, item.description)}
                      onBlur={() => handleInputSubmit(item.description)}
                      onChange={(e) => setInputValue(e.target.value)}
                      autoFocus={true}
                    />
                  ) : (
                    <span className="text-base text-gray-800">
                      {item.description}
                    </span>
                  )}
                </div>
              </div>
              <div
                className=" flex items-center bg-gray-700 lg:group-hover:opacity-100 lg:opacity-0 text-gray-300 m-2 p-2 rounded-md text-xs"
                onClick={() => dispatch(deleteTodo(item.id))}
              >
                Delete
              </div>
            </li>
          ))}

        {sortedCompletedList &&
          sortedCompletedList.map((item) => (
            <li
              key={item.id}
              className="flex justify-between w-2/3 lg:w-1/3 mx-auto mt-2 rounded-md cursor-pointer group h-10 lg:hover:bg-gray-300"
            >
              <div className="flex w-full items-center rounded-md pl-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 ml-5 float-left cursor-pointer checked:bg-blue-600 checked:border-transparent"
                  onChange={() => dispatch(uncompleteTodo(item.id))}
                  checked
                />
                <div className="pl-2 w-full">
                  <span className="text-base line-through text-gray-500">
                    {item.description}
                  </span>
                </div>
              </div>
              <div
                className=" flex items-center bg-gray-700 lg:group-hover:opacity-100 lg:opacity-0 text-gray-300 m-2 p-2 rounded-md text-xs"
                onClick={() => dispatch(deleteTodo(item.id))}
              >
                Delete
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Counter;
