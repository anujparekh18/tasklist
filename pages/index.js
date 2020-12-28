import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todoList } from '../actions';
import Todo from '../components/todo';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoList());
  }, [dispatch]);

  return (
    <>
      <Todo />
    </>
  );
};

export default Index;
