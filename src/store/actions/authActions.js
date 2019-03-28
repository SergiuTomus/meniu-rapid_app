

export const SignupUser = (data) => {
  return (dispatch) => {  // we have dispatch because we use redux-thunk
    axios.post('http://localhost:3005/client/register', data)
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