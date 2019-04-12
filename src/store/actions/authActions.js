import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { SET_CURRENT_USER } from './types';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import { API_BASE_URL } from '../../api/config';

// Set login user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Register user
export const registerUser = (user) => {
  return (dispatch) => {
    axios.post(`${API_BASE_URL}/client/register`, user)
      .then(result => {
        console.log(result.data);
        // dispatch();
        // sau inainteaza la alt screen/ in Practical: call startMainTabs();
      })
      .catch(err => {
        console.log(err);
        //  alert("Scriu un text legat de eroare");
        // sau
        // dispatch({
        //   type: GET_ERRORS,
        //   payload: err.response.data
        // });
      });
  }
}

// Login - Get User Token
export const loginUser = (user) => {
  return (dispatch) => {  // we have dispatch because we use redux-thunk
    axios.post(`${API_BASE_URL}/client/login`, user)
      .then(result => {
        console.log(result.data);
        const { token } = result.data;
        AsyncStorage.setItem('jwtToken', token); // set token to localStorage
        setAuthHeader(token);       // Set token to Authorization header
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => {
        console.log(err);
      });
  };
}