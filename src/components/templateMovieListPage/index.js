import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";
import {makeStyles} from "@material-ui/core"


const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    overflow: "hidden",
    bottom: 0,
    zIndex: 200,
    backgroundColor: "rgba(95,90,90,0.9)",
    padding: "5px 0px",
    color: "white",
    width: "100vw",
    marginLeft: "-2vw",
    
  }
}));

function MovieListPageTemplate({ movies, title, action, pages,setPage }) {

  //States
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const genreId = Number(genreFilter);

  
  let displayedMovies = movies.filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    }).filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };


  const handleOnChange = (page) =>{
    setPage(page)
    window.scroll(0,0)
  }
  const classes = useStyles();
  return (
   
    <Grid container sx={{ padding: '20px', backgroundColor: "rgba(0,0,0,0.1)" } }>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5} >
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
      <div className={classes.root}>
        <Pagination count={pages} defaultPage={1} color="primary" size="large" variant="outlined" shape="rounded" onChange={(e) => handleOnChange(e.target.textContent)} style={{
          display: "flex",
          justifyContent: "center",
        }} />
        </div>
    </Grid>
    
  );
}
export default MovieListPageTemplate;