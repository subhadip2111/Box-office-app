const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};
export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);

////////////----------------------------------//
// const API_BASE_URL = 'https://api.tvmaze.com';

// export async function apiGet(queryString) {
//   const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
//     r.json()
//   );
//   return response;
// }
