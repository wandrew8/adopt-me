import React from 'react';
import { render } from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      id: 1,
      name: "Luna",
      animal: "dog",
      breed: "pug",
    }),
    React.createElement(Pet, {
      id: 2,
      name: "Silver",
      animal: "dog",
      breed: "heeler",
    }),
    React.createElement(Pet, {
      id: 3,
      name: "Migel",
      animal: "dog",
      breed: "chkai",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
