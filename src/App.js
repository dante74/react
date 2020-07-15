import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store'
import UserContainer from "./components/ProductContainer";
import Navbar from './components/Navbar';
//import Home from './components/Home';


const App = () => (
  <Provider store={store} >
    <div className='App'>
      <Navbar />
      <UserContainer />
    </div>
  </Provider>

);

export default App;
