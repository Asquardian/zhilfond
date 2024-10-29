export const mutations = {
  changeSearchName(state, search_result) { //Изменение строки, отвечающей за параметры поиска
    state.search_username = search_result;
    return state.search_username;
  },

  setError(state, error) { //Обработка ошибок
    state.error = error;
    return state.error;
  },

  changeUserDetail(state, user_result) { //Выобор профилия для отображения
    if (user_result.length == 0) {//При пустом массиве получает пустой объект
      state.detailUser = {};
    } else {
      state.detailUser = user_result[0];//Получает первый элемент массива
    }

    return state.detailUser;
  },

  changeUsers(state, users_result) {//Изменение списка пользователей
    state.users = users_result;
    return state.users;
  },

  isLoading(state, status){ //Загрузка
    console.log(status);
    return state.loading = status;
  }
};
