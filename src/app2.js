import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export default class App2 extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BookList />
                    <BookDetail />
                </Provider>           
            </div>
        );
    }
}
