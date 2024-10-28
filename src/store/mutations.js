export const mutations = {
  changeSearchName(state, search_result) {
    state.search_username = search_result;
    return state.search_username;
  },

  setError(state, error) {
    state.error = error;
    return state.error;
  },

  changeUserDetail(state, user_result) {
    console.log(user_result);
    if (user_result.length == 0) {
      state.detailUser = {};
    } else {
      state.detailUser = user_result[0];
    }

    return state.detailUser;
  },

  changeUsers(state, users_result) {
    state.users = users_result;
    return state.users;
  },

  isLoading(state, status){
    console.log(status);
    return state.loading = status;
  }
};
