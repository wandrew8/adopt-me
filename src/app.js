const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)

    ]);
}


const App = () => {
    return React.createElement(
      "div",
      {},
      [
      React.createElement("h1", {}, "Adopt Me"),
      React.createElement(Pet, { id: 1, name: "Luna", animal: "dog", breed: "pug"}),
      React.createElement(Pet, { id: 2, name: "Silver", animal: "dog", breed: "heeler"}),
      React.createElement(Pet, { id: 3, name: "Migel", animal: "dog", breed: "chkai"}),
      ]
    );
  };

  ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
  );