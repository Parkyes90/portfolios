import axios from 'axios';
import cookies from 'js-cookie';

const instance = axios.create();

instance.interceptors.response.use(
  response => response,
  error => {
    throw error.response;
  }
);

const request = (url, params) => {
  return instance.post(url, params, {
    headers: {
      'X-CSRFToken': cookies.get('csrftoken')
    }
  });
};

export { request, instance };
