import axios from "axios";
import React from "react";
import Home from "./components/Home";


class App extends React.Component {
  
  state = { details: [] };
  
  
  render() {
    return (
      <Home/> 
    );
  }
}

export default App;
