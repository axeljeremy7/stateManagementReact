import * as React from 'react';
import { useDispatch, useTrackedState } from './store';

const Query: React.FC = () => {
    const dispatch = useDispatch();
    const state = useTrackedState();
    const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_QUERY', query: event.target.value });
    };

    React.useEffect(() => {
        console.log('Render Query');
    });

    return (
        <div>
            <div>
                Highlight Query for incomplete items: {Math.random()}
                <input value={state.query} onChange={setQuery} />
            </div>
        </div>
    );
};

export default Query;
