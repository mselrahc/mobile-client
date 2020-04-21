import Axios from 'axios';
import store from '../configs/store';

const commonAxios = Axios.create({
  baseURL: 'http://192.168.1.16:8080',
});

function getToken() {
  return store.getState().auth.token;
}

commonAxios.interceptors.request.use(config => {
  try {
    const token = getToken();

    if (token !== null) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  } catch (e) {}
  return config;
});

commonAxios.interceptors.response.use(axiosResponse => {
  const { data: response } = axiosResponse;
  if (response.code !== 0) {
    const error = new Error(response.message || 'Unknown Error');
    error.data = response.data;
    throw error;
  }
  return response.data;
}, Promise.reject);

export { commonAxios };
