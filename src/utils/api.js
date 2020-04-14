import Axios from 'axios';

const commonAxios = Axios.create({
  baseURL: 'http://192.168.1.34:8080',
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
