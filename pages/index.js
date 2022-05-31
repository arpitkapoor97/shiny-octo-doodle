import PokemonInfo from "../components/PokemonInfo";
import PokemonTable from "../components/PokemonTable";
import PokemonFilter from "../components/PokemonFilter";
import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";
import store from "../src/store";

const Container = styled.div({
  margin: "auto",
  width: 800,
  paddingTop: "1rem",
});

const Title = styled.h1`
  text-align: left;
`;

const TwoColumnLayout = styled.div({
  display: "grid",
  gridTemplateColumns: "70% 30%",
  gridColumnGap: "1rem",
});

// export async function getServerSideProps() {
//   const pokemonSet = require("../src/pokemon.json");

//   return {
//     props: {
//       pokemonSet,
//     }, // will be passed to the page component as props
//   };
// }
// {pokemonSet}
export default function Home() {
  // store.dispatch({
  //   type: "SET_POKEMON_SET",
  //   payload: pokemonSet,
  // });

  return (
    <Container>
      <CssBaseline />
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
}
