

export const actions = {
    async changeSearchID(context, search_username) {
        // Выполняем асинхронную операцию
        try {
          const params = '?username=' + search_username.join('&username=');
          const response = await fetch('https://jsonplaceholder.typicode.com/users' + params);
          context.commit('changeSearchName', search_username);
          if (response.ok) {
            const data = await response.json();
            context.commit('changeUsers', data);
          } else if(response.status == 404) {
            context.commit('setError', "ничего не найдено ");
          }
          else {
            context.commit('setError', "Ошибка API");
          }
        } catch (error) {
          context.commit('setError', "Произошла");
        }
      }
}