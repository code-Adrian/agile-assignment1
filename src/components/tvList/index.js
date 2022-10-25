import React from "react";
import TvShow from "../tvCard";
import Grid from "@mui/material/Grid";

const TvList = ( {movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShow key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default TvList;