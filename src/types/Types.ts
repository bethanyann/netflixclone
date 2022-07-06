
//Types  //can also use 'interface' here instead of 'types' but types is recommended 
export type Movies = {
  page: number;
  results: Movie[];
  total_pages:number;
  total_results: number;
}

export type Movie = {
    id: number;
    backdrop_path: string;
    imdb_id: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
    budget: number;
    runtime: number;
    revenue: number;
    release_date: string;
    character?: string;
    cast: Actor[] | Cast[];
    directors: Crew[];
    genres: Genre[];
    //rename to something better? extra data pulled from RapidAPI
    extraMovieData: RapidAPIData;
  }
 
  export type Genre = {
    id: number,
    name: string
  }

  export type Credits = {
    id: number;
    cast: Cast[],
    crew: Crew[],
  }
  
  export type Cast = {
    id: number;
    character: string;
    credit_id: string;
    name: string;
    profile_path: string;
  }
  
  export type Crew = {
    id: number;
    job: string;
    name: string;
    credit_id: number;
  }

  export type Actor = {
    id: number;
    name: string;
    popularity: number;
    profile_path: string;
    character?: string;
    cast_id?: number;
    credit_id?: string;
    order?: number;
    biography?: string;
    birthday?: string;
    deathday?: string;
    known_for_department? : string;
    place_of_birth?: string;
    imdb_id?: string;
    credits: Movie[]; //I think this is the return type but double check 
  }

  export type ActorCredits = {
    cast: Movie [];
  }

  export type RapidAPIData = {
    certification?: string; //G, PG, PG-13, R from the RapidAPI
    trailer?: string; //youtube link from RapidAPI
    ratings: Rating[];
    watch_providers: WatchProvider[];
  }

  export type Rating = {
    source: string; //imdb, tomatoes, tomatoesaudience, tmdb, metacritic, etc
    value: number;
    score: number;
    votes: number;
  }

  export type WatchProvider = {
    id: number;
    name: string;
  }
