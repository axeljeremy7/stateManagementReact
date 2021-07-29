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
  React.useEffect(() => {
      console.log('TodoItem rendered.');   
      console.log({id, title, completed});
  })
  return (
    <li ref={useFlasher()}>
      <input
        type="checkbox"
        defaultChecked={!!completed}
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
      <span> |  {JSON.stringify({completed})}</span>
      <span/>
      <button onClick={delTodo}>Delete</button>
      <span/>
      <button onClick={getRandomNumber}>Generate My Random Number #2</button>
    </li>
  );
};
// function propsAreEqual(prev: any, next: any) {
//     return prev.id === next.id;
// }
// const MemoizedTodoItem = React.memo(TodoItem, propsAreEqual);
export default React.memo(TodoItem);
