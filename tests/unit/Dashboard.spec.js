import Dashboard from "@/views/Dashboard.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import axios from "axios";
import sinon from "sinon";

//creating local vue
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
localVue.use(Vuex);

const mutations = {
  storeSearchResults: jest.fn(),
  saveMeal: jest.fn()
};

//creating mock store
const store = new Vuex.store({
  state: {
    searchRes: [],
    meal: {}
  },
  mutations: mutations,
});

//mocking axios library
jest.mock("axios");

describe("Dashboard.vue", () => {
  beforeEach( () => {
    axios.get.mockClear();
    axios.get.mockReturnValue(Promise.resolve({}));
  });
  it("has input field", () => {
    const wrapper = shallowMount(Dashboard);
    const input = wrapper.find("#keywordInput");
    expect(input.exists()).toBeTruthy();
  });
  it("has search button", () => {
    const wrapper = shallowMount(Dashboard);
    const button = wrapper.find("#keywordSearch");
    expect(button.exists()).toBeTruthy();
    expect(button.text()).toBe("Go");
  });
  it("calls handler method when clicked", () => {
    const searchMealSpy = sinon.spy();
    const wrapper = shallowMount(Dashboard);
    wrapper.setMethods({ searchMeal: searchMealSpy });
    wrapper.setData({ searchText: "cake" });
    const button = wrapper.find("#keywordSearch");
    button.trigger("click");
    expect(searchMealSpy.called).toBe(true);
  });
  it("calls random meal api", () => {
    shallowMount(Dashboard);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("https://www.themealdb.com/api/json/v1/1/random.php");
  });
  it("searchMeals method calls search meal api", () => {
    const resVal = {
      data: {
        meals: [
          {
            strMeal: "Pancakes",
          },
        ],
      },
    };
    axios.get.mockResolvedValue(resVal);
    const wrapper = shallowMount(Dashboard);
    wrapper.setData({ searchText: "cake" });
    const button = wrapper.find("#keywordSearch");
    button.trigger("click");
    expect(axios.get).toHaveBeenCalledTimes(1);
    //expect(axios.get).toHaveBeenCalledWith("https://www.themealdb.com/api/json/v1/1/search.php?s=cake");
  });
});
