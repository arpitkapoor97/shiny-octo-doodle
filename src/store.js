import { createStore } from "redux";

const stateReducer = (
  state = {
    filter: "",
    pokemonSet: [],
    selectedPoke: null,
  },
  { type, payload }
) => {
  switch (type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "SET_POKE":
      return {
        ...state,
        selectedPoke: payload,
      };
    case "SET_POKEMON_SET":
      return {
        ...state,
        pokemonSet: payload,
      };
    default:
      // throw new Error("No action");
      return state;
  }
};

const store = createStore(stateReducer);

// if (typeof window !== undefined) {
//   fetch("/pokemon.json")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       store.dispatch({
//         type: "SET_POKEMON_SET",
//         payload: data,
//       });
//     });
// }

export default store;
