//import { from } from "core-js/fn/array";
import Vue from "vue";
import Vuex from "vuex";
//import { randomMeal, searchMeal, mealDetails } from "../Meals.service";

Vue.use(Vuex);

const state = {
  randomMeals: [],
  searchMeals: [],
  mealDetail: []
};

const getters = {
  getRandomMeal: state => {
    return state.randomMeals;
  },
  getSearchedMeals: state => {
    return state.searchMeals;
  },
  getMealDetails: state => {
    return state.mealDetail;
  }
};

const mutations = {
  SET_RANDOM_MEAL(state, randomMeal) {
    state.randomMeals = randomMeal;
  },
  SET_SEARCHED_MEAL(state, searchMeal) {
    state.searchMeals = searchMeal;
  },
  SET_MEAL_DETAILS(state, mealDetails) {
    state.mealDetail = mealDetails;
  }
};

const actions = {
  // showRandomMeal(state) {
  //   randomMeal().then(response => {
  //     state.commit('SET_RANDOM_MEAL', response.data.randomMeals);
  //     console.log(response.data);
  //   });
  // },
  // async showSearchedMeals(state, keyword) {
  //   console.log(await searchMeal(keyword));
  //   const matchedMeals = (await searchMeal(keyword)).data['matchedMeals'];/*or ['matchedMeals/randomMeals']*/
  //   state.commit('SET_SEARCHED_MEAL', matchedMeals);
  // },
  // async showMealDetails(state, id) {
  //   const meal = (await mealDetails(id)).data['meal'];
  //   state.commit('SET_MEAL_DETAILS', meal);
  // }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  // state: {
  //   searchedKey: "",
  //   selectedMeal: ""
  // },
  // mutations: {
  //   searchedKey(state, value) {
  //     state.searchedKey = value;
  //   },
  //   selectedMeal(state, mealId) {
  //     state.selectedMeal = mealId;
  //   }
  // },
  // actions: {},
  // modules: {}
});
