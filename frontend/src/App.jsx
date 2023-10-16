import axios from "axios";
import React from "react";
import {Home }from "./components/Home";
import { Works } from "./components/Works";
import { Thoughts } from "./components/Thoughts";
import { Contact } from "./components/Contact";
import {Interests} from "./components/Interests";
import {Route, Routes} from "react-router-dom";


class App extends React.Component {
  
  state = { details: [] };
  
  
  render() {
    return (
      <>
      {/* <Home/> */}

        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route exact  path="/works" element={<Works/>}/>
          <Route exact  path="/interests" element={<Interests/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/thoughts" element = {<Thoughts/>}/>

        </Routes>
      </>

    );
  }
}

export default App;
