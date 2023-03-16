import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import "./App.css";
export default function App() {

  const loggenIn = true;
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/sign-up" element={<Register />}/>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/movies" element={<Movies loggenIn={loggenIn} />}/>
        <Route path="/saved-movies" element={<SavedMovies loggenIn={loggenIn} />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}
