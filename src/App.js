import React from "react";
import Home from "./routes/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";

//router -> Hash router 와 BrowserRouter의 차이
//Routes -> Route를 찾음

const App = (props) => {
 return(
 
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  </Router>
 )
};

export default App;
