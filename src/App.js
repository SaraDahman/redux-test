import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter {state.counter}</h1>
      {state.islogged ? <h3>I'm logged in</h3> : ''}
      <Button
        variant='contained'
        color='primary'
        onClick={() => dispatch(increment())}
      >
        +
      </Button>{' '}
      <Button
        variant='contained'
        color='primary'
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
    </div>
  );
}

export default App;
