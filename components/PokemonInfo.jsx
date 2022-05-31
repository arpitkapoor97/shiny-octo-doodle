import React from "react";
import { useSelector } from "react-redux";

const PokemonInfo = () => {
  const selectedPoke = useSelector((state) => state.selectedPoke);

  return selectedPoke ? (
    <div>
      <h1>{selectedPoke.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedPoke.base).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{selectedPoke.base[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
