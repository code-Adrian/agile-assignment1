import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { createRoot } from "react-dom/client";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TvPage from "./pages/tvPage";
import TvContextProvider from "./contexts/tvContext";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
 
  return (
    
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <TvContextProvider>
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/tvshow/:id" element={<MoviePage />} />
        <Route path="/tv/" element={<TvPage/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </MoviesContextProvider>
      </TvContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(  document.getElementById("root"),document.body.style.backgroundImage = "url('https://wallpaperboat.com/wp-content/uploads/2019/10/high-resolution-black-background-06.jpg')", document.body.style.backgroundRepeat = "repeat",document.body.style.backgroundSize = "repeat")
rootElement.render(<App />);