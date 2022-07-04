import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY, LANGUAGE, ACTOR_INFO_URL, REQUEST_TOKEN_URL, LOGIN_URL, SESSION_ID_URL } from "./config";
import { Movies, Movie, Credits, Actor, ActorCredits } from "./types/Types";


const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
};


const apiSettings = {
//create an object with all of the fetch requests for easier access later 
    fetchMovies: async (searchTerm: string, page: number | null): Promise<Movies> => {
        const endpoint: string = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchMovieData: async (movieId: number) : Promise<Movie> => {
        const endpoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchMovieCredits: async (movieId: number) : Promise<Credits> => {
        const endpoint: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchActorInfo: async (actorId: number) : Promise<Actor>=> {
        // `${API_URL}person/` // url will look like this: {personID}?api_key=${API_KEY}${LANGUAGE}
        const endpoint: string = `${ACTOR_INFO_URL}${actorId}?api_key=${API_KEY}${LANGUAGE}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchActorInfoMovieCredits: async (actorId: number) : Promise<ActorCredits> => {
        const endpoint: string = `${ACTOR_INFO_URL}${actorId}/movie_credits?api_key=${API_KEY}${LANGUAGE}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    getRequestToken: async () : Promise<string> => {
        const data = await fetch(REQUEST_TOKEN_URL);
        const json = await data.json();
        //console.log(json);
        return json.request_token;
    },
    authenticate: async (requestToken: string, username: string, password: string) => {
        const bodyData = {
            username,
            password,
            request_token: requestToken
        };

        // First authenticate the requestToken
        const data = await (
            //fetch(endpoint, options)
            await fetch(LOGIN_URL, { ...defaultConfig, body: JSON.stringify(bodyData)  })
        ).json();
        debugger;
        
        // Then get the sessionId with the requestToken
        if (data.success) {
            const sessionData = await fetch(SESSION_ID_URL, {...defaultConfig, body: JSON.stringify({ request_token: requestToken }) })
            const sessionId = await sessionData.json();
            return sessionId;
        }
        else return "";
    },
    
}

export default apiSettings;

  // Bonus material below for login
//     getRequestToken: async () => {
//       const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
//       return reqToken.request_token;
//     },
//     authenticate: async (requestToken, username, password) => {
//       const bodyData = {
//         username,
//         password,
//         request_token: requestToken
//       };
//       // First authenticate the requestToken
//       const data = await (
//         await fetch(LOGIN_URL, {
//           ...defaultConfig,
//           body: JSON.stringify(bodyData)
//         })
//       ).json();
//       // Then get the sessionId with the requestToken
//       if (data.success) {
//         const sessionId = await (
//           await fetch(SESSION_ID_URL, {
//             ...defaultConfig,
//             body: JSON.stringify({ request_token: requestToken })
//           })
//         ).json();
//         return sessionId;
//       }
//     },
//     rateMovie: async (sessionId, movieId, value) => {
//       const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
  
//       const rating = await (
//         await fetch(endpoint, {
//           ...defaultConfig,
//           body: JSON.stringify({ value })
//         })
//       ).json();
  
//       return rating;
//     }
//   };