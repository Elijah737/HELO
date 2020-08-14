import React from 'react';
// import logo from './logo.svg';
// import Auth from "./Components/Auth/Auth";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Form from "./Components/Form/Form";
// import Post from "./Components/Post/Post";
import Nav from "./Components/Nav/Nav";
import './App.css';
import routes from './routes';


function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
