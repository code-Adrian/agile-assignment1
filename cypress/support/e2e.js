export const paginateLimit = (movieResultNumber) => {
    return movieResultNumber > 500 ? 500 : movieResultNumber
  }
  
  export const getTvShowByName = (tvShows,name) => {
    return tvShows.find((m) => m.name.includes(name));
  }
  
  export const filterTvByRatings = (tvList, ratingType) =>{
  if(ratingType === "All"){
  return tvList;
  }
  if(ratingType === "Best"){
  return tvList.filter((m) => m.vote_average>=8);
  }
  if(ratingType === "Good"){
    return tvList.filter((m) => m.vote_average>=5 && m.vote_average <= 8);
  }
  if(ratingType === "Bad"){
    return tvList.filter((m) => m.vote_average>=0 && m.vote_average < 5);
  }
  }
  
  //Removes the dublice credits in the json path and sorts poster images that start with posters with images to the posters with no images ().
  export const removeDuplicateCredits = (tvShowCredits) => {
    return tvShowCredits.filter((v,i,a)=>a.findIndex(v2=>(v2.name===v.name))===i).sort(function(a,b){
    let noDupes = ((a.profile_path===null)-(b.profile_path===null)||+(a>b)||-(a<b));
    return noDupes}).filter((m) => {
          return m.name.toLowerCase() !== -1;
  }) 
  }
  