import * as React from 'react';
import { useState } from 'react';

import { useDispatch } from './store';
import { useFlasher } from './utils';

const NewTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', title: text });
    setText('');
  };
  
  return (
    <li ref={useFlasher()}>
      <input
        value={text}
        placeholder="Enter title..."
        onChange={e => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </li>
  );
};

export default React.memo(NewTodo);
