import * as React from 'react';

import { useDispatch, useTrackedState, TodoType } from './store';
import { useFlasher } from './utils';

const renderHighlight = (title: string, query: string) => {
  if (!query) return title;
  const index = title.indexOf(query);
  console.log(index);

  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <b>{query}</b>
      {title.slice(index + query.length)}
    </>
  );
};

type Props = TodoType;

const TodoItem: React.FC<Props> = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const delTodo = () => {
    dispatch({ type: 'DELETE_TODO', id });
  };
  const getRandomNumber = React.useCallback(
    () => {
        dispatch({ type: 'SET_RANDOM_NUMBER' });
    },
    [],
)
  return (
    <li ref={useFlasher()}>
      <input
        type="checkbox"
        checked={!!completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}
      />
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {completed ? title : renderHighlight(title, state.query)}
      </span>
      <span> |  Not my Random Number: {Math.random()}</span>
      <span/>
      <button onClick={delTodo}>Delete</button>
      <span/>
      <button onClick={getRandomNumber}>Generate My Random Number</button>
    </li>
  );
};

export default React.memo(TodoItem);
