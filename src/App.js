import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store'
import UserContainer from "./components/ProductContainer";


const App = () => (
  <Provider store={store} >
    <div className='App'>
      <UserContainer />
    </div>
  </Provider>

);

export default App;
