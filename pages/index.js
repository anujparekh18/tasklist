import Head from 'next/head';
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
    <div>
      <Head>
        <title>TinyList</title>
      </Head>
      <Todo />
    </div>
  );
};

export default Index;
