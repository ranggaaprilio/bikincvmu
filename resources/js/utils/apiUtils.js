/* eslint-disable valid-jsdoc */
import {requestAPI} from '../helper/requestHelper';
import URL from './urlUtils';

/**
 * Login User.
 * @param {email, password} obj Object json.
 * @method post
 * @endpoint api/auth/login
 * @returns {response} obj save token to local storage.
 */
export const loginFetch = async (obj) => {
  try {
    const response = await requestAPI(URL.auth, 'post', obj);
    console.log(response, 'Login Hasil');
    return response;
  } catch (error) {
    return {
      success: false,
      status: error.response.status,
      result: error.response.data,
    };
  };
};
