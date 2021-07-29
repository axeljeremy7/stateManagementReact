import * as React from 'react';
import { useTrackedState } from './store';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
import Query from './Query';
import RandomNumber from './RandomNumber';

const TodoList: React.FC = () => {
    const state = useTrackedState();
    React.useEffect(() => {
        console.log('Render TodoList');
    });
    
    return (
        <>
        <div>
            <ul>
                {state.todos.map(({ id, title, completed }) => (
                    <TodoItem key={id} id={id} title={title} completed={completed} />
                ))}
                <NewTodo />
            </ul>
        </div>
        <Query/>
        <RandomNumber/>
        </>
    );
};

export default TodoList;
