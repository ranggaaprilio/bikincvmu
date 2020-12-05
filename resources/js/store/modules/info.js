const state = {
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
};

const mutations = {
  SET_DETAIL: (state, param) => {
    state.name = param.name;
    state.email = param.email;
    if (param.general_detail != null) {
      state.DOB = param.general_detail.DOB;
      state.POB = param.general_detail.POB;
      state.gender = param.general_detail.gender;
      state.address = param.general_detail.address;
      state.phone = param.general_detail.phone;
      state.facebook = param.general_detail.facebook;
      state.instagram = param.general_detail.instagram;
      state.twitter = param.general_detail.twitter;
      state.desc = param.general_detail.desc;
      state.ProfilePic = param.general_detail.ProfilePic;
    }
  },

};

const actions = {
  setDetailState({commit}, payload) {
    commit('SET_DETAIL', payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
