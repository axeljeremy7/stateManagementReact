import * as React from 'react';
import Query from './Query';
import RandomNumber from './RandomNumber';
import ReactTracked from './ReactTracked';

import { Provider } from './store';
import TodoList from './TodoList';

const App: React.FC = () => {

    return <ReactTracked>
        <Provider>
            <TodoList />
            {/* <Query /> */}
            {/* <RandomNumber /> */}
        </Provider>
    </ReactTracked>
}


export default App;
