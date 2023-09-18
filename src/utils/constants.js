
export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY,
    }
  };


export const poster_url="https://image.tmdb.org/t/p/w500/";

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
           
export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;