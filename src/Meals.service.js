import axios from "axios";

const URL = "https://www.themealdb.com/api/json/v1/1/";

export function randomMeal() {
  return axios.get(URL + `random.php`);
}
export function searchMeal(mealName) {
  return axios.get(URL + `search.php?s=${mealName}`);
}
export function mealDetails(id) {
  return axios.get(URL + `lookup.php?i=${id}`);
}
