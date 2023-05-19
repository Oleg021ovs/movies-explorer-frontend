import React, { useState } from "react";
import "./Header.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import HeaderRegistr from "../HeaderRegistr/HeaderRegistr";
import Navigation from "../Navigation/Navigation";
export default function Header({ userLoggedIn }) {
  const [isNavigation, setNavigation] = useState(false);

  function handleNavigation() {
    setNavigation(true);
  }

  function closeNavigation() {
    setNavigation(false);
  }

  return (
    <header className="header">
      {userLoggedIn ? (
        <HeaderAuth onNavigation={handleNavigation} />
      ) : (
        <HeaderRegistr />
      )}
      <Navigation isOpen={isNavigation} onClose={closeNavigation} />
    </header>
  );
}
