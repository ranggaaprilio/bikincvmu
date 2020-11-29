const getters = {
  // UserDetail
  user: (state) => state.auth.user,
  isAunteticated: (state)=>state.auth.isAuthenticate,
};
export default getters;
