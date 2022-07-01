import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY, LANGUAGE, ACTOR_INFO_URL, REQUEST_TOKEN_URL, LOGIN_URL, SESSION_ID_URL } from "./config";

const apiSettings = {
//create an object with all of the fetch requests for easier access later 
    fetchMovies: async (searchTerm: string, page: number | null) => {
        const endpoint = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchMovieData: async (movieId: number) => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchMovieCredits: async (movieId: number) => {
        const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchActorInfo: async (actorId: number) => {
        // `${API_URL}person/` // url will look like this: {personID}?api_key=${API_KEY}${LANGUAGE}
        const endpoint = `${ACTOR_INFO_URL}${actorId}?api_key=${API_KEY}${LANGUAGE}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchActorInfoMovieCredits: async (actorId: number) => {
        const endpoint = `${ACTOR_INFO_URL}${actorId}/movie_credits?api_key=${API_KEY}${LANGUAGE}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    },
    fetchActorExternalSources: async (actorId: number) => {
        const endpoint = `${ACTOR_INFO_URL}${actorId}/external_ids?api_keys=${API_KEY}`;
        const data = await fetch(endpoint);
        const json = await data.json();
        return await json;
    }

}

export default apiSettings;

// const defaultConfig = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
  
//   const apiSettings = {
//     fetchMovies: async (searchTerm, page) => {
//       const endpoint = searchTerm
//         ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
//         : `${POPULAR_BASE_URL}&page=${page}`;
//       return await (await fetch(endpoint)).json();
//     },
//     fetchMovie: async movieId => {
//       const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
//       return await (await fetch(endpoint)).json();
//     },
//     fetchCredits: async movieId => {
//       const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
//       return await (await fetch(creditsEndpoint)).json();
//     },
//     // Bonus material below for login
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