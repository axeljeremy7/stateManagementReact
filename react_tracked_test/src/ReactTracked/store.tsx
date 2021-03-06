import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

export type TodoType = {
    id: number;
    title: string;
    completed?: boolean;
};

type State = {
    todos: TodoType[];
    query: string;
    randomNumber: number;
};

type Action =
    | { type: 'ADD_TODO'; title: string }
    | { type: 'DELETE_TODO'; id: number }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'SET_RANDOM_NUMBER' }
    | { type: 'SET_QUERY'; query: string };

const initialState: State = {
    todos: [
        { id: 1, title: 'Wash dishes' },
        { id: 2, title: 'Study JS' },
        { id: 3, title: 'Buy ticket' },
        { id: 4, title: 'Drink water' },
    ],
    query: '',
    randomNumber: Math.random(),
};

let nextId = 4;

const reducer = (state: State, action: Action): State => {
    console.log(action);
    switch (action.type) {
        case 'SET_RANDOM_NUMBER':
            let n =  Math.random() ;
            console.log(n);
            return { ...state, randomNumber: n };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: nextId++, title: action.title }],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'SET_QUERY':
            return {
                ...state,
                query: action.query,
            };
        default:
            return state;
    }
};

const useValue = () => useReducer(reducer, initialState);

export const {
    Provider,
    useTrackedState,
    useUpdate: useDispatch,
} = createContainer(useValue);
