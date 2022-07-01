//Types  //can also use 'interface' here instead of 'types' but types is recommended 
export type Movies = {
  page: number;
  results: Movie[];
  total_pages:number;
  total_results: number;
}

export type Movie = {
    backdrop_path: string;
    id: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    title: string;
    vote_average: number;
    vote_count: number;
    budget: number;
    runtime: number;
    revenue: number;
    actors: Actor[];
    genres: Genre[];
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
    character: string;
    credit_id: string;
    name: string;
    profile_path: string;
  }
  
  export type Crew = {
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