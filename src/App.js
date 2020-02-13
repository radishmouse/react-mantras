import React from 'react';
import './App.css';

// we need createStore from redux
import { createStore } from 'redux';
// we need our reducer
import { mantras } from './reducers';
// we need our smart containers
import MantraForm from './containers/MantraFormContainer';
import MantraList from './containers/MantraListContainer';

// we need the Provider from react-redux
import { Provider } from 'react-redux';
const store = createStore(mantras);

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
