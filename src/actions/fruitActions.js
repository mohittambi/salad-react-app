import { FETCH_FRUITS, NEW_FRUIT } from './types';
import axios from 'axios';

export const fetchFruits = () => dispatch => {
  axios.get('http://localhost:4000/fruit')
    .then(fruits => dispatch({
      type: FETCH_FRUITS,
      payload: fruits.data,
    }))
    .catch(function (error) {
      console.log(error);
    });
};

export const createFruit = (postData) => dispatch => {
  console.log('action create fruit', postData);
  axios.post('http://localhost:8970/create', postData)
    .then(fruit => dispatch({
      type: NEW_FRUIT,
      payload: fruit,
    }));
}
