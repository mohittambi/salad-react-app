import { FETCH_VEGETABLES, NEW_VEGETABLE } from './types';
import axios from 'axios';

export const fetchVegetables = () => dispatch => {
  axios.get('http://localhost:8970/vegetables')
    .then(vegetables => dispatch({
      type: FETCH_VEGETABLES,
      payload: vegetables.data,
    }))
    .catch(function (error) {
      console.log(error);
    });
};

export const createVegetable = (postData) => dispatch => {
  let sendData = JSON.stringify(postData);
  axios.post('http://localhost:8970/vegetable/create', sendData)
    .then(vegetable => dispatch({
      type: NEW_VEGETABLE,
      payload: vegetable,
    }));
}
