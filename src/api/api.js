const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

export async function getByParams(params){
    return await fetch(API_BASE_URL + params);
}