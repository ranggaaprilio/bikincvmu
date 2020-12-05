const getters = {
  // UserDetail
  user: (state) => state.auth.user,
  isAunteticated: (state)=>state.auth.isAuthenticate,
  name: (state) => state.auth.user.name,
  email: (state) => state.auth.user.email,
  DOB: (state) => state.info.DOB,
  POB: (state) => state.info.POB,
  gender: (state) => state.info.gender,
  address: (state) => state.info.address,
  phone: (state) => state.info.phone,
  facebook: (state) => state.info.facebook,
  instagram: (state) => state.info.instagram,
  twitter: (state) => state.info.twitter,
  desc: (state) => state.info.desc,
  ProfilePic: (state) => state.info.ProfilePic,
};
export default getters;
