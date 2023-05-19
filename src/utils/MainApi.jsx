export const BASE_URL = 'http://localhost:3000';
//export const BASE_URL = '';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const register = ( name, email, password ) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const autorisation = ( email, password ) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};


export const getProfile = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
  }).then(checkResponse);
    
};

export const editProfile = (email, name, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({email, name}),

  }).then(checkResponse);
    
};


export const getFilm = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
  }).then(checkResponse);
    
};


export const createFilm = (movie, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    credentials: 'include',
    headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'},
          body: JSON.stringify({
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: 'https://api.nomoreparties.co' + movie.image.url,
              trailerLink: movie.trailerLink,
              thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
              movieId: movie.id,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
      })
      
  })
  .then(checkResponse);
}

export const deleteFilm = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
      
    }
  }).then(checkResponse);
    
}

/*const moviesApiUrl = "https://api.nomoreparties.co";

class MainApi {
  constructor({ mainApiUrl, headers }) {
    this._mainApiUrl = mainApiUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register( name, email, password )  {
    return fetch(`${this._mainApiUrl}/signup`, {
      method: "POST",
      headers: {
        'mode': 'cors',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkRes(res));
  };
  
  autorisation( email, password ) {
    return fetch(`${this._mainApiUrl}/signin`, {
      method: "POST",
      headers: {
        'mode': 'cors',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkRes(res));
  };
  
  checkToken(token){
    return fetch(`${this._mainApiUrl}/users/me`, {
      method: "GET",
      headers: {
        'mode': 'cors',
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkRes(res));
  };
  

  getProfile(token) {
    return fetch(`${this._mainApiUrl}/users/me`, {
      method: 'GET',
    headers: {
      'mode': 'cors',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
    }).then((res) => this._checkRes(res));
  }

  editProfile(name, email, token) {
    return fetch(`${this._mainApiUrl}/users/me`, {
      method: 'PATCH',
    headers: {
      'mode': 'cors',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._checkRes(res));
  }

  createFilm(movie) {
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
      owner,
      token
    } = movie;
    
    const movieId = movie.id;
    const image = `${moviesApiUrl}${movie.image.url}`;
    const thumbnail = `${moviesApiUrl}${movie.image.formats.thumbnail.url}`;

    return fetch(`${this._mainApiUrl}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'mode': 'cors',
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'},
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        owner,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then((res) => this._checkRes(res));
  }

  getFilm(token) {
    return fetch(`${this._mainApiUrl}/movies`, {
      method: 'GET',
    headers: {
      'mode': 'cors',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
    }).then((res) => this._checkRes(res));
  }

  deleteFilm(id, token) {
    return fetch(`${this._mainApiUrl}/movies/${id}`, {
      method: 'DELETE',
      
    headers: {
      'mode': 'cors',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
      
    }
    }).then((res) => this._checkRes(res));
  }

}

export default new MainApi({
  mainApiUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});*/