import tokenService from './tokenService';

const BASE_URL = '/api/users/';

// this is where we contact the server via AJAX, which contacts the database
// looks for email that matches and compares with password in database
// if matching, token is created and sent back to form (tokenService)
// if not, send back a 400 saying 'bad request' or 'email doesn't exist'

// set up fetch request to send information to server:

function login(creds) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'Application/json' }),
        body: JSON.stringify(creds)
    })
    .then(response => {
        if(response.ok) {
            return response.json(); 
        } else {
            throw new Error('Bad Credentials');
        }
    })
    .then(({ token }) => tokenService.setToken(token))
}


function logout() {
    tokenService.removeToken();
}


function getUser() {
    return tokenService.getUserFromToken();
}

function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(user)
    })
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Email Already Taken!')
        }
    })
    .then(({ token }) => tokenService.setToken(token))
}

export default {
    signup,
    getUser,
    logout,
    login
}

// TODO - make a login and logout function and export 