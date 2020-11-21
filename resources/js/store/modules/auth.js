const state = {
  id: null,
  user: null,
  token: '',
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
  setUserState({commit}, payload) {
    console.log('payload', payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
