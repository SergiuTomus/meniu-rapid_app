import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { SET_CURRENT_USER } from './types';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import { API_BASE_URL } from '../../api/config';

// Set login user
export const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser
  };
};

// Register user
export const registerUser = (user) => {
  return (dispatch) => {
    axios.post(`${API_BASE_URL}/client/register`, user)
      .then(result => {
        alert(result.data.message);
        // dispatch();
      })
      .catch(err => {
        console.log(err.response.data);
        alert("Inregistrare esuata");
      });
  }
}

// Login - Get User Token
export const loginUser = (user) => {
  return (dispatch) => {  // we have dispatch because we use redux-thunk
    axios.post(`${API_BASE_URL}/client/login`, user)
      .then(result => {
        console.log(result.data);
        const { token, user } = result.data;
        AsyncStorage.setItem('jwtToken', token); // set token to localStorage
        setAuthHeader(token);       // Set token to Authorization header
        const decoded = jwt_decode(token);
        const currentUser = { ...decoded, ...user }
        dispatch(setCurrentUser(currentUser));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

// Logout
export const logoutUser = () => {
  return (dispatch) => {
    AsyncStorage.removeItem('jwtToken'); // remove token from localStorage
    setAuthHeader(false);                // remove token from Authorization header 
    dispatch(setCurrentUser({}));        // set current user to {}
  }
}

export const setToken = () => {

}