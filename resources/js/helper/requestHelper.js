/* eslint-disable max-len */
import api from './axiosHelper';

export const requestAPI = async (url, method, obj) => {
  // const Bearer = localStorage.getItem('@token');
  // if (Bearer) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${Bearer}`;
  // } else {
  //   console.error('Bearer Token is not registered');
  // }

  if (method === 'post') {
    try {
      const response = await api.post(url, obj);
      console.log(response, 'ini response');
      if (response.status !== 200) {
        return {success: 'false', status: response.status, msg: response.data, status_code: response.status};
      }
      return response.data;
    } catch (error) {
      console.log('reg', error);
      return {success: 'false', status: error.response.status, result: error.response.data};
    }
  } else if (method === 'get') {
    try {
      const response = await api.get(url);
      if (response.status !== 200) {
        return {success: 'false', status: response.status, msg: response.data};
      }
      return response.data;
    } catch (error) {
      return {success: 'false', status: error.response.status, result: error.response.data};
    }
  } else if (method === 'put/formdata') {
    try {
      const response = await api.post(url, obj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status !== 200) {
        return {success: 'false', status: response.status, msg: response.data};
      }
      return response.data;
    } catch (error) {
      return {success: 'false', status: error.response.status, result: error.response.data};
    }
  } else if (method === 'put') {
    try {
      const response = await api.put(url, obj);
      if (response.status !== 200) {
        return {success: 'false', status: response.status, msg: response.data};
      }
      return response.data;
    } catch (error) {
      return {success: 'false', status: error.response.status, result: error.response.data};
    }
  } else if (method === 'delete') {
    try {
      const response = await api.delete(url);
      if (response.status !== 200) {
        return {success: 'false', status: response.status, msg: response.data};
      }
      return response.data;
    } catch (error) {
      return {success: 'false', status: error.response.status, result: error.response.data};
    }
  }
};
