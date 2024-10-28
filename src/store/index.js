import { createStore } from 'vuex'
import { actions } from './actions';

export const store = createStore({
  state: { search_username: "", users: {} },
  mutations: {

    changeSearchName(state, search_result) {
      state.search_username = search_result;
    },

    changeUsers(state, users_result) {
      state.users = users_result;
    }
  },
  actions: actions

})
