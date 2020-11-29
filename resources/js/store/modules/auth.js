import {loginFetch, CheckToken as checkToken} from '../../utils/apiUtils';

const state = {
  id: null,
  user: null,
  isAuthenticate: null,
};

const mutations = {
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_AUTH: (state, auth) => {
    state.isAuthenticate = auth;
  },
};

const actions = {
  async setUserLogin({commit}, payload) {
    const api = await loginFetch(payload);
    console.log(api, 'api payload');
    localStorage.setItem('@id', api.user.id);
    localStorage.setItem('@token', api.access_token);
    localStorage.setItem('@name', api.user.name);
    // Commit Data
    commit('SET_ID', api.user.id);
    // commit('SET_AVATAR', payload.avatar);
    commit('SET_USER', api.user);
    commit('SET_TOKEN', api.access_token);
    commit('SET_AUTH', true);

    return api.success;
  },
  async getVerifyToken({commit}, payload) {
    const api = await checkToken(payload);
    console.log(api, 'api payload');
    if (api.success==='true') {
      commit('SET_ID', api.user.id);
      // commit('SET_AVATAR', payload.avatar);
      commit('SET_USER', api.user);
      commit('SET_TOKEN', localStorage.getItem('@token'));
      commit('SET_AUTH', true);
    } else {
      localStorage.clear();
      commit('SET_ID', null);
      // commit('SET_AVATAR', payload.avatar);
      commit('SET_USER', null);
      commit('SET_TOKEN', null);
      commit('SET_AUTH', false);
    }
    return api.success;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
