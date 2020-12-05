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


/**
 * Check User.
 * @param {id} obj Object json.
 * @method get
 * @endpoint api/auth/check/:id
 * @returns {response} obj save token to local storage.
 */
export const CheckToken = async (id) => {
  try {
    const response = await requestAPI(`${URL.check}/${id}`, 'get');
    console.log(response, 'Check Hasil');
    return response;
  } catch (error) {
    return {
      success: false,
      status: error.response.status,
      result: error.response.data,
    };
  };
};

/**
 *
 * @param {name,email,password} obj
 * @action Register
 * @description Fetch To api/fe/auth/regist
 * @method POST
 * @guard guest
 */
export const RegistFetch = async (obj) => {
  try {
    const xrsf = await Csrf.getCookie();
    if (xrsf != null) {
      const response = await requestAPI(URL.regist_URL, 'post', obj);
      console.log(response, 'Login Hasil');
      return response;
    }
  } catch (error) {
    return {success: false,
      status: error.response.status,
      result: error.response.data};
  }
};

/**
 * @action user
 * @method Get
 * @description Fetch To api/user
 * @guard Sanctum
 */
export const userdetailFetch = async (id) => {
  const response = await requestAPI(`${URL.userDetail_URL}/${id}`, 'get');
  return response;
};

/**
 * @action education
 * @param {user_id} id
 * @method GET
 * @description Fetch To api/fe/education/:id
 * @guard Sanctum
 */
export const getEducationFetch = async (id) => {
  const response = await requestAPI(`${URL.education_URL}/${id}`, 'get');
  console.log(response);
  return response;
};

/**
 * @action working
 * @param {user_id} id
 * @method GET
 * @description Fetch To api/fe/working/:id
 * @guard Sanctum
 */
export const getWorkingFetch = async (id) => {
  const response = await requestAPI(`${URL.working_url}/${id}`, 'get');
  console.log(response);
  return response;
};

/**
 * @param {user_id,company,position,joindate,outdate,isActive} obj
 * @action Working
 * @method POST
 * @description Fetch To api/fe/working/
 * @guard web
 */
export const postWorking = async (obj) => {
  const response = await requestAPI(URL.working_url, 'post', obj);
  console.log(response);
  return response;
};

/**
 * @param {image} obj
 * @param {id} id
 * @action Working
 * @method PUT
 * @description Fetch To api/fe/picture/
 * @guard web
 */
export const postProfilPic = async (obj, id) => {
  const response = await requestAPI(`${URL.uploadPic_url}/${id}`,
      'put/formdata', obj);
  console.log(response);
  return response;
};

/**
 * @param {id} id
 * @action Working
 * @method DELETE
 * @description Fetch To api/fe/working/
 * @guard web
 */
export const destroyWorking = async (id) => {
  const response = await requestAPI(`${URL.working_url}/${id}`, 'delete');
  console.log(response);
  return response;
};

/**
 * @param { id, type, name, year } obj
 * @action user
 * @method PUT
 * @description Fetch To api/fe/education/:id
 * @guard Sanctum
 */
export const updateEducationFetch = async (id, obj) => {
  const response = await requestAPI(`${URL.education_URL}/${id}`, 'put', obj);
  console.log(response);
  return response;
};

/**
 * @action user
 * @method PUT
 * @description Fetch To api/fe/user/:id
 * @guard Sanctum
 */
export const UpdateuserdetailFetch = async (id, obj) => {
  const response = await requestAPI(`${URL.userDetail_URL}/${id}`, 'put', obj);
  console.log(response);
  return response;
};

/**
 * @action Logout
 * @method POST
 * @description Fetch To api/fe/auth/logout
 * @guard web
 */
export const logoutFetch = async () => {
  const response = await requestAPI(URL.logout_URL, 'post');
  console.log(response);
  return response;
};

/**
 * @param {user_id,skill,value,desc} obj
 * @action Working
 * @method POST
 * @description Fetch To api/fe/skill/
 * @guard web
 */
export const postSkill = async (obj) => {
  const response = await requestAPI(URL.skill_url, 'post', obj);
  console.log(response);
  return response;
};

/**
 * @action working
 * @param {user_id} id
 * @method GET
 * @description Fetch To api/fe/skill/:id
 * @guard Sanctum
 */
export const getSkillFetch = async (id) => {
  const response = await requestAPI(`${URL.skill_url}/${id}`, 'get');
  console.log(response);
  return response;
};

/**
 * @param {id} id
 * @action Working
 * @method DELETE
 * @description Fetch To api/fe/working/
 * @guard web
 */
export const destroySkill = async (id) => {
  const response = await requestAPI(`${URL.skill_url}/${id}`, 'delete');
  console.log(response);
  return response;
};

