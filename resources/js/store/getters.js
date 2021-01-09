const getters = {
  // UserDetail
  user: (state) => state.auth.user,
  isAunteticated: (state)=>state.auth.isAuthenticate,
  name: (state) => state.info.profile.name,
  email: (state) => state.info.profile.email,
  DOB: (state) => state.info.profile.DOB,
  POB: (state) => state.info.profile.POB,
  gender: (state) => state.info.profile.gender,
  address: (state) => state.info.profile.address,
  phone: (state) => state.info.profile.phone,
  facebook: (state) => state.info.profile.facebook,
  instagram: (state) => state.info.profile.instagram,
  twitter: (state) => state.info.profile.twitter,
  desc: (state) => state.info.profile.desc,
  ProfilePic: (state) => state.info.profile.ProfilePic,
  education: (state)=>state.info.pendidikan.data,
  ability: (state)=>state.info.ability.data,
  exp: (state)=>state.info.exp.data,
};
export default getters;
