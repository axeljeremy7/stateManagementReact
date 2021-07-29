import * as React from 'react';
import { useDispatch, useTrackedState } from './store';
import { useCallback } from 'react';

const RandomNumber: React.FC = () => {
    const dispatch = useDispatch();
    const state = useTrackedState();

    const getRandomNumber = useCallback(
        () => {
            dispatch({ type: 'SET_RANDOM_NUMBER' });
        },
        [dispatch],
    )

    React.useEffect(() => {
        console.log('Render RandomNumber');
    });

    return (
        <div>
            <div>
                <button onClick={getRandomNumber}>Generate My Random Number</button>
            </div>
            <div>
                My random number: {state.randomNumber}
            </div>
        </div>
    );
};

export default RandomNumber;
