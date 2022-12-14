import React, { useState, lazy, Suspense } from "react";
import Header from "../headerMovieList";
import Spinner from '../spinner';
import MovieCreditsList from "../movieCreditsList";
import Grid from "@mui/material/Grid";
const FilterCard = lazy(() => import("../filterCreditsCard"));

function MovieCreditsPageTemplate({ title,creditsCrew,creditsCast }) {

  //States
  const[showCredits,setShowCredits] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const [involvedFilter, setInvolvedFilter] = useState("0");
  
  const credsarr = [creditsCrew,creditsCast]

//Removes the dublice credits in the json path and sorts poster images that start with posters with images to the posters with no images ().
let noDuplicateCredits = credsarr[showCredits].filter((v,i,a)=>a.findIndex(v2=>(v2.name===v.name))===i).sort(function(a,b){
  let noDupes = ((a.profile_path===null)-(b.profile_path===null)||+(a>b)||-(a<b))
  return noDupes
}).filter((m) => {
        return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
})



const handleChange = (type, value) => {
  if(type ==="involved"){
  if(value === 0) {
    setShowCredits(0)
  }else setShowCredits(1)
}
  if (type === "name") {setNameFilter(value);}
  else setInvolvedFilter(value);
};


  return (
   
    <Grid container sx={{ padding: '20px', backgroundColor: "rgba(0,0,0,0.1)" } }>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5} >
      <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Suspense fallback={<Spinner/>}>
          { 
          <FilterCard
            onUserInput={handleChange}
            nameFilter={nameFilter}
            involvedPeopleFilter={involvedFilter}
            credits={creditsCrew}
            
          /> }
          </Suspense>
        </Grid>
        <MovieCreditsList credits={noDuplicateCredits}></MovieCreditsList>
      </Grid>
    </Grid>
    
  );
}
export default MovieCreditsPageTemplate;