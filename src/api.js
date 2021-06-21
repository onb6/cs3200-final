import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? 'TBD' : 'http://localhost:8080';

async function apiGet(path) {
  return axios.get(url + path)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  }

export function getCountryBySeason(country, year, season) {
    return axios.get(url + `/by-season?country=${country}&year=${year}&season=${season}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
} 

export const getCountryAllTime = (country) => { 
  // return axios.get(url + `/all-time?country=${country}`).then(response => {
  //     // returning the data here allows the caller to get it through another .then(...)
  //     return response.data
  //   }).catch(error => console.log(error));
    return apiGet(`/all-time?country=${country}`);
};

export const getSongsBySeason = (country1, country2, year, season) => {
    return apiGet(`/compare-song-by-season?country1=${country1}&country2=${country2}&year=${year}&season=${season}`);
}

export const getSongsAllTime = (country1, country2) => {
    return apiGet(`/compare-song-all-time?country1=${country1}&country2=${country2}`);
}

export const getArtistsBySeason = (country1, country2, year, season) => {
    return apiGet(`/compare-artist-by-season?country1=${country1}&country2=${country2}&year=${year}&season=${season}`);
}

export const getArtistsAllTime = (country1, country2) => {
  return apiGet(`/compare-artist-all-time?country1=${country1}&country2=${country2}`);
}

export const getGenresBySeason = (country1, country2, year, season) => {
    return apiGet(`/compare-genre-by-season?country1=${country1}&country2=${country2}&year=${year}&season=${season}`);
}

export const getGenresAllTime = (country1, country2) => {
    return apiGet(`/compare-genre-all-time?country1=${country1}&country2=${country2}`);
}
