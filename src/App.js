import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams.js";
import Details from "./Details.js";

const App = () => {
  //   return React.createElement("div", { id: "something-important" }, [
  //     React.createElement("h1", {}, "Adopt me!"),
  //     React.createElement(Pet, {
  //       name: "Moon",
  //       animal: "Dog",
  //       breed: "Havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Cockatiel",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Doink",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //   ]);
  // };
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
