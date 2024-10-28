const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const actions = {
  async changeSearchName(context, search_username) {
    //Поиск по имени (str)
    try {
      const params = "?username=" + search_username.join("&username="); // Создание параметров для Get запроса
      context.commit("isLoading", true);
      await timeout(1000);
      const response = await fetch(
        API_BASE_URL + params
      ); //Запрос
      context.commit("changeSearchName", search_username);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        context.commit("changeUsers", data);
        context.commit("changeUserDetail", data);
        context.commit("isLoading", false);
      } else {
        context.commit("setError", "Ошибка API");
      }
    } catch (error) {
      context.commit("setError", "Произошла ошибка");
    }
  },
};
