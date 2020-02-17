import React from 'react';
import './App.css';

// we need createStore from redux
import { 
  createStore, 
  combineReducers,
  compose, 
  applyMiddleware 
} from 'redux';
// we need our reducer
import ReduxThunk from 'redux-thunk';
import { mantras, karma } from './reducers';
// we need our smart containers
import MantraForm from './containers/MantraFormContainer';
import MantraList from './containers/MantraListContainer';

// we need the Provider from react-redux
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  mantras,
  karma
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MantraForm />
        <MantraList />
      </Provider>
    </div>
  );
}

export default App;
