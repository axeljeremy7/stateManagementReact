import * as React from 'react';

import { useDispatch, useTrackedState } from './store';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
import { useCallback } from 'react';

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const state = useTrackedState();
    const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_QUERY', query: event.target.value });
    };
    const getRandomNumber = useCallback(
        () => {
            dispatch({ type: 'SET_RANDOM_NUMBER' });
        },
        [],
    )

    React.useEffect(() => {
        console.log('rendered TodoList');
        console.log({todos: state.todos});
    });
    
    return (
        <div>
            <ul>
                {state.todos.map(({ id, title, completed }) => (
                    <TodoItem key={id} id={id} title={title} completed={completed} />
                ))}
                <NewTodo />
            </ul>
            <div>
                Highlight Query for incomplete items:
                <input value={state.query} onChange={setQuery} />
            </div>
            <div>
                <button onClick={getRandomNumber}>Generate My Random Number</button>
            </div>
            <div>
                My random number: {state.randomNumber}
            </div>
        </div>
    );
};

export default TodoList;
