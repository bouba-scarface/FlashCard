import React from "react";
export const NavBar: React.FC = ({ children }) => {
  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/flashcard/flashcardMental">
                  Flashcard Mental
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/flashcard/flashcardInput">
                  Flashcard with an input
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/flashcard/flashcardMultipleChoise"
                >
                  Flashcard with a multiple choice
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
