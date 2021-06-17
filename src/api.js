const url = process.env.NODE_ENV === 'production' ? 'TBD' : 'http://localhost:8080';

async function apiGet(path) {
    let text = await fetch(
      url + path, {});
    let resp = await text.json();
    return resp.data;
  }

export function getStats(country, year, season) {
    apiGet(`/stat?country=${country}&year=${year}&season=${season}`).then((data) => {
    return data;
  })
}

export function getArtists() {
    apiGet("/artist").then((data) => {
    return data;
  })
}

export function getCountries() {
    apiGet("/country").then((data) => {
      return data;
    })
  }

export function getGenres() {
    apiGet("/genre").then((data) => {
    return data;
  })
}

export function getSongs() {
    apiGet("/song").then((data) => {
    return data;
  })
}
