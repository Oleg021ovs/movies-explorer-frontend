import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../notfound/NotFound";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    _id: "",
  });
  const [currentUser, setCurrentUser] = useState({});
  const token = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  //запрос информации и данных пользователя и карточек с сервера по токену
  useEffect(() => {
    if (userLoggedIn) {
      console.log(userLoggedIn);
      Promise.all([
        MainApi.getProfile(token),
        MoviesApi.getInitialMovies(token),
      ])
        .then(([res, movies]) => {
          setCurrentUser(res);
          setMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userLoggedIn, token]);

  //Сохраненные фильмы с api
  useEffect(() => {
    MainApi.getFilm(token)
      .then((res) => {
        console.log(res);
        setSavedMovies((res) =>
          res.filter((m) => {
            return m.owner === currentUser._id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser._id, token]);

  // Сохранение фильма
  function handleMovieSave(movie) {
    MainApi.createFilm(movie, token)
      .then((newSavedMovie) => {
        setSavedMovies((movies) => [newSavedMovie, ...movies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // регистрация
  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        setCurrentUser(res);
        navigate("/signin");
      })
      .catch((err) => {
        if (err === "Ошибка: 400")
          return console.log("некорректно заполнено одно из полей");
        console.log(err);
      });
  }

  // авторизация
  function handleLogin(email, password) {
    MainApi.autorisation(email, password)

      .then((res) => {
        if (res.token) {
          setUserLoggedIn(true);
          localStorage.setItem("token", res.token);
          setCurrentUser({ email: email, password: password });
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err === "Ошибка: 400")
          return console.log("не передано одно из полей");
        if (err === "Ошибка: 401")
          return console.log("пользователь с email не найден");
        console.log(err);
      });
  }

  // Обновление профиля
  function handleEditUser({ name, email }) {
    MainApi.editProfile({ name, email, token })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Удаление фильма
  function handleMovieDelete(movie) {
    MainApi.deleteFilm(movie._id, token)
      .then(() => {
        setSavedMovies((movies) => movies.filter((m) => m._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCheckToken() {
    const token = localStorage.getItem("token");
    if (token) {
      MainApi.checkToken(token)
        .then(() => {
          setUserLoggedIn(true);
          navigate("/");
        })
        .catch((err) => {
          if (err === "Ошибка: 400")
            return console.log("Токен не передан или передан не в том формате");
          if (err === "Ошибка: 401")
            return console.log("Переданный токен некорректен");
          console.log(err);
        });
    }
  }

  useEffect(() => {
    handleCheckToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
// выход
  function handleSignOut() {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    setUserData({});
    navigate("/signin");
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main userLoggedIn={userLoggedIn} />}
          />
          <Route
            path="/signup"
            element={
              <Register
                userLoggedIn={userLoggedIn}
                handleRegister={handleRegister}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login userLoggedIn={userLoggedIn} handleLogin={handleLogin} />
            }
          ></Route>

          <Route
            path="/"
            element={<Profile userData={userData} signOut={handleSignOut} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                component={Profile}
                userData={userData}
                userLoggedIn={userLoggedIn}
                currentUser={currentUser}
                onUpdateUser={handleEditUser}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                userLoggedIn={userLoggedIn}
                component={Movies}
                movies={movies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                handleMovieSave={handleMovieSave}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                userLoggedIn={userLoggedIn}
                movies={savedMovies}
                handleMovieDelete={handleMovieDelete}
                handleMovieSave={handleMovieSave}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}
