// Config file for TMDB API
// Link to API docs here for reference/issues:   https://developers.themoviedb.org/

const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const LANGUAGE: string = '&language=en-US'

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}${LANGUAGE}&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}${LANGUAGE}`;
const ACTOR_INFO_URL: string = `${API_URL}person/` // url will look like this: {personID}?api_key=${API_KEY}${LANGUAGE}

//for login as guest session & favoriting movies
const REQUEST_TOKEN_URL: string = `${API_URL}authentication/token/new?api_key=${API_KEY}`; //https://developers.themoviedb.org/3/authentication/create-request-token
const LOGIN_URL: string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`; //https://developers.themoviedb.org/3/authentication/validate-request-token
const SESSION_ID_URL: string = `${API_KEY}authentication/session/new?api_key=${API_KEY}`; //https://developers.themoviedb.org/3/authentication/create-session

const IMAGE_BASE_URL: string = `http://image.tmdb.org/t/p/`; //https://developers.themoviedb.org/3/getting-started/images
//available image sizes for large banner background: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
//available poster sizes: w92, w154, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export { 
    API_URL, 
    API_KEY, 
    SEARCH_BASE_URL, 
    POPULAR_BASE_URL,
    REQUEST_TOKEN_URL, 
    LOGIN_URL, 
    SESSION_ID_URL, 
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    ACTOR_INFO_URL, 
    LANGUAGE 
 };