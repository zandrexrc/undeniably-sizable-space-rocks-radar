import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { getCoverImage, getAsteroidsData, setDataIsLoaded } from './redux/actions';
import * as serviceWorker from './serviceWorker';


// Set up Redux store
const store = configureStore();

// Fetch data
async function loadData () {
  await store.dispatch(getCoverImage());
  await store.dispatch(getAsteroidsData());
  await store.dispatch(setDataIsLoaded());
}
loadData();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
