import { getByParams } from "@/api/api";


function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const actions = {
  async changeSearchName(context, search_username) {
    //Поиск по имени (str)
    context.commit("isLoading", true);
    try {
      const params = "?username=" + search_username.join("&username="); // Создание параметров для Get запроса
      await timeout(1000); // Имитация долгой загрузки
      const response = await getByParams(params); //Запрос
      context.commit("changeSearchName", search_username); //Изменяется значение поиска
      console.log(response);
      if (response.ok) {
        // ответ пришел
        const data = await response.json();
        context.commit("changeUsers", data); // Изменяется список пользователей
        context.commit("changeUserDetail", data);
      } else {
        context.commit("setError", "Ошибка API");
      }
    } catch (error) {
      console.debug(error);
      context.commit("setError", "Произошла ошибка");
    }
    context.commit("isLoading", false);
  },

  async getUserDataByID(context, id) {
    try {
      const params = "?id=" + id; // Создание параметров для Get запроса
      console.log(id);
      context.commit("isLoading", true);
      await timeout(1000); // Имитация долгой загрузки
      const response = await getByParams(params); //Запрос
      if (response.ok) {
        // ответ пришел
        const data = await response.json();
        context.commit("changeUserDetail", data);
        context.commit("isLoading", false);
      } else {
        context.commit("setError", "Ошибка API");
      }
    } catch (error) {
      console.debug(error);
      context.commit("setError", "Произошла ошибка");
    }
  },
};
