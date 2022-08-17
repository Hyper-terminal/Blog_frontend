export const signin = (user) => {
  return fetch('/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (jwt, next) => {
  if (window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(jwt));
    next();
  }
};

export const signup = (user) => {
  return fetch('/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const signout = (next) => {
  if (typeof Window !== 'undefined') {
    localStorage.removeItem('jwt');

    next()
    return fetch('/signout', {
      method: 'get',
    }).then(data => { data.json() })
      .catch(err => console.log(err));

  }
}

export const isAuthenticated = () => {
  if (typeof Window == 'undefined') return false;

  if (localStorage.getItem('jwt')) return JSON.parse(localStorage.getItem('jwt'));
  else return false;
}