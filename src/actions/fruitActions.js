import { FETCH_FRUITS, NEW_FRUIT } from './types';
import axios from 'axios';

export const fetchFruits = () => dispatch => {
  axios.get('http://localhost:8970/fruits')
    .then(fruits => dispatch({
      type: FETCH_FRUITS,
      payload: fruits.data,
    }))
    .catch(function (error) {
      console.log(error);
    });
};

export const createFruit = (postData) => dispatch => {

  let sendData = JSON.stringify(postData);

  axios.post('http://localhost:8970/fruit/create', sendData)
    .then(fruit => dispatch({
      type: NEW_FRUIT,
      payload: fruit,
    }));
}
