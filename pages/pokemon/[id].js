import { CssBaseline, TableHead } from "@mui/material";
import styled from "@emotion/styled";
import { withRouter } from "next/router";

import { Table, TableBody, TableRow, TableCell } from "@mui/material";

const Container = styled.div({
  margin: "auto",
  width: 800,
  paddingTop: "1rem",
});

export async function getStaticProps(context) {
  const pokemonSet = require("../../src/pokemon.json");
  const pokemon = pokemonSet.find(
    ({ id }) => id.toString() == context.params.id
  );
  return {
    props: {
      pokemon,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const pokemonSet = require("../../src/pokemon.json");
  return {
    // paths: [
    //   // { params: { ... } }
    // ],
    paths: pokemonSet.map((path) => ({
      params: {
        id: path.id.toString(),
      },
    })),
    fallback: false, // false or 'blocking'
  };
}

export default withRouter(({ pokemon }) => {
  return (
    <Container>
      <CssBaseline />
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((k) => (
                <TableRow key={k}>
                  <TableCell>{k}</TableCell>
                  <TableCell>{pokemon.base[k]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Container>
  );
});
