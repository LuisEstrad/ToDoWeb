import './App.css';
import { AppUI } from './AppUI';
import React from 'react';
import { Provider } from '../context';


function App() {
 

  return (
    <Provider>
      <AppUI/>
    </Provider>
  );
}

export default App;






