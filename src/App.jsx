import React, { useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Profile />
      <Posts />
    </div>
  );
}

export default App;
