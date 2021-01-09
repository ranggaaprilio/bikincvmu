const state = {
  profile: {
    id: null,
    user_id: null,
    name: '',
    email: '',
    DOB: '',
    POB: '',
    gender: '',
    address: '',
    phone: '',
    facebook: '',
    instagram: '',
    twitter: '',
    desc: '',
    ProfilePic: '',
  }, pendidikan: {
    data: [],
  }, ability: {
    data: [],
  }, exp: {
    data: [],
  },

};

const mutations = {
  SET_DETAIL: (state, param) => {
    state.profile.name = param.name;
    state.profile.email = param.email;
    if (param.general_detail != null) {
      state.profile.DOB = param.general_detail.DOB;
      state.profile.POB = param.general_detail.POB;
      state.profile.gender = param.general_detail.gender;
      state.profile.address = param.general_detail.address;
      state.profile.phone = param.general_detail.phone;
      state.profile.facebook = param.general_detail.facebook;
      state.profile.instagram = param.general_detail.instagram;
      state.profile.twitter = param.general_detail.twitter;
      state.profile.desc = param.general_detail.desc;
      state.profile.ProfilePic = param.general_detail.ProfilePic;
    }
    if (param.desc != null) {
      state.profile.DOB = param.DOB;
      state.profile.POB = param.POB;
      state.profile.gender = param.gender;
      state.profile.address = param.address;
      state.profile.phone = param.phone;
      state.profile.facebook = param.facebook;
      state.profile.instagram = param.instagram;
      state.profile.twitter = param.twitter;
      state.profile.desc = param.desc;
      state.profile.ProfilePic = param.ProfilePic;
    }
  },
  SET_PENDIDIKAN: (state, param)=>{
    state.pendidikan.data=param;
  },

  SET_ABILITY: (state, param)=>{
    state.ability.data=param;
  },

  SET_EXP: (state, param)=>{
    state.exp.data=param;
  },
};

const actions = {
  setDetailState({commit}, payload) {
    commit('SET_DETAIL', payload);
  },

  setDetailPendidikan({commit}, payload) {
    commit('SET_PENDIDIKAN', payload);
  },

  setDetailAbility({commit}, payload) {
    commit('SET_ABILITY', payload);
  },

  setDetailExp({commit}, payload) {
    commit('SET_EXP', payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
