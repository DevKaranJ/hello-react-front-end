import axios from 'axios';

export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';

export const fetchRandomGreetingSuccess = greeting => ({
  type: FETCH_RANDOM_GREETING_SUCCESS,
  payload: greeting
});

export const fetchRandomGreeting = () => dispatch => {
  axios.get('http://localhost:3000/random_greeting')
    .then(response => {
      dispatch(fetchRandomGreetingSuccess(response.data.greeting));
    })
    .catch(error => {
      console.error('Error fetching random greeting:', error);
    });
};
