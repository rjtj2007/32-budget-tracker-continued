import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import reducers from '../reducer/';

const store = createStore(reducers);

import Main from './mainPage.jsx';


class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path='/' component={Main} />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;