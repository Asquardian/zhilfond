import { createStore } from 'vuex'
import { actions } from './actions';
import { mutations } from './mutations';

export const store = createStore({
  state: { search_username: "", users: {}, detailUser: {}, error:"", loading: false },
  mutations: mutations,
  actions: actions

})
