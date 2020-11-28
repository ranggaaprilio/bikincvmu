import {loginFetch} from '../../utils/apiUtils';

const state = {
  id: null,
  user: null,
  isAuntenticate: false,
};

const mutations = {
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },

};

const actions = {
  async setUserState({commit}, payload) {
    const api = await loginFetch(payload);
    console.log(api, 'api payload');
    localStorage.setItem('@id', api.data.id);
    // Commit Data
    commit('SET_ID', payload.id);
    commit('SET_AVATAR', payload.avatar);
    commit('SET_ROLES', payload.roles[0]);
    commit('SET_NAME', payload.name);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
