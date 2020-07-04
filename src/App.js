import React from 'react';
import { render } from 'react-dom'
import Pet from './Pet.jsx';
import SearchParams from './SearchParams.js';

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
    <div id="something-important">
      <h1>Adopt me!</h1>
      <Pet name="Moon" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel, " />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
      <SearchParams />
    </div>
  )
}
render(<App />, document.getElementById("root"));