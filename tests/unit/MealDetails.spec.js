import MealDetails from "@/views/MealDetails.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { shallowMount, createLocalVue } from "@vue/test-utils";

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
        meal: {
            idMeal: "52795",
            strMeal: "Chicken Handi",
            strCategory: "Chicken",
            strInstructions: "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.\r\nThen return the fried onion to the pot and stir. Add ginger paste and sauté well.\r\nNow add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.\r\nNext goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.\r\nAdd the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.\r\nWhen the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.\r\nFinally add the cream and give a final mix to combine everything well.\r\nSprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!",
            strYoutube: "https://www.youtube.com/watch?v=IO0issT0Rmc"
        },
    },
    mutations: mutations,
});
describe("MealDetails.vue", () => {
    it("gets meal details", () => {
        const wrapper = shallowMount(MealDetails);
        expect(wrapper.find("h3").text()).toEqual("Chicken Handi");
        expect(wrapper.find(".receipe").text()).toEqual(
            "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.\r\nThen return the fried onion to the pot and stir. Add ginger paste and sauté well.\r\nNow add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.\r\nNext goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.\r\nAdd the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.\r\nWhen the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.\r\nFinally add the cream and give a final mix to combine everything well.\r\nSprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!",
        );
      });
});