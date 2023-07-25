import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../features/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const loading = useSelector((state) => state.greetings.loading);
  const error = useSelector((state) => state.greetings.error);

  useEffect(() => {
    dispatch(fetchGreetings());
    const interval = setInterval(() => {
      dispatch(fetchGreetings());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div className="greeting">
      {greetingsData && <h1>{greetingsData.message}</h1>}
    </div>
  );
}

export default Greeting;
