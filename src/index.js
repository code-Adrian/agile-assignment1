import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import SiteHeader from './components/siteHeader'
import Spinner from './components/spinner';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { createRoot } from "react-dom/client";
import MoviesContextProvider from "./contexts/moviesContext";
import TvContextProvider from "./contexts/tvContext";
import { AuthProvider } from "./contexts/auth";

const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const NowPlayingMoviesPage = lazy(() => import("./pages/nowPlayingMoviesPage"));
const PopularMoviesPage = lazy(() => import("./pages/popularMoviesPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const MovieCreditsPage = lazy(() => import("./pages/movieCreditsPage"));
const TvCreditsPage = lazy(() => import("./pages/tvCreditsPage"));
const TvShowReviewPage = lazy(() => import("./pages/tvShowReviewPage"));
const AddMovieReviewPage = lazy(() => import('./pages/addMovieReviewPage'));
const TvDetailsPage = lazy(() => import("./pages/tvDetailsPage"));
const TvPage = lazy(() => import("./pages/tvPage"));
const Login = lazy(() => import("./components/login"));
const Signup = lazy(() => import("./components/signup"));

const AuthRoute = lazy(() => import("./components/authroute"));
const NotAuthRoute = lazy(() => import("./components/notauthroute"));

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
    <AuthProvider>
      <SiteHeader />
      <TvContextProvider>
      <MoviesContextProvider>
      <Suspense fallback={<Spinner/>}>
      <Routes>
      <Route element={<NotAuthRoute/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Route>
      
        <Route element={<AuthRoute/>}>
         <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/creditsTv/:id" element={ <TvCreditsPage /> } />
          <Route path="/credits/:id" element={ <MovieCreditsPage /> } />
         <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
         <Route path="/movies/popular" element={<PopularMoviesPage />} />
         <Route path="/movies/now_playing" element={<NowPlayingMoviesPage />} />
         <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
         <Route path="/movies/:id" element={<MoviePage />} />


          <Route path="/tvShow/:id" element={<TvDetailsPage />} />
         <Route path="/tvShowReviews/:id" element={ <TvShowReviewPage /> } />
         <Route path="/tv/" element={<TvPage/>}/>


         <Route path="/" element={<HomePage />} />
        
         <Route path="*" element={ <Navigate to="/" /> } />
        </Route>
      </Routes>
      </Suspense>
      </MoviesContextProvider>
      </TvContextProvider>
      </AuthProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
};

const rootElement = createRoot(  document.getElementById("root"),document.body.style.backgroundImage = "url('https://wallpaperboat.com/wp-content/uploads/2019/10/high-resolution-black-background-06.jpg')", document.body.style.backgroundRepeat = "repeat",document.body.style.backgroundSize = "repeat")
rootElement.render(<App />);