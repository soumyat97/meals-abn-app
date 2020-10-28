<template>
  <div id="root">
    <Header />
    <div>
      <u><h2 id="searchHeading">Search Meals</h2></u>
      <br /><br />
      <ul>
        <li v-for="(meal, index) in meals.meals" :key="index">
          <div class="container"
            style = "cursor:pointer"
            @click="showSelectedMeal(meal.idMeal)"
          >
            <img :src="meal.strMealThumb" width="230px" />
            <h5>
              <strong
                ><u>{{ meal.strMeal }}</u></strong
              >
            </h5>
          </div>
          <br />
        </li>
      </ul>
    </div>

    <Footer />
  </div>
</template>
<script>
import { searchMeal } from "../Meals.service";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SearchMeals",
  components: {
    Header,
    Footer
  },
  props: {
    keyword: String
  },
  data() {
    return {
      meals: []
    };
  },
  created() {
    searchMeal(this.keyword).then(response => (this.meals = response.data));
  },
  methods: {
    showSelectedMeal(selectedId) {
      this.$router.push({
        name: "MealDetails",
        params: { mealId: selectedId }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#root {
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
h2 {
  font-weight: bolder;
  font-family: 'Lucida Sans';
  font-stretch: ultra-expanded;
  text-shadow: 2px 3px rgb(92, 67, 67);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
strong {
  color: #620410;
  font-family: Cambria;
  font-size: 25px;
  font-stretch: extra-expanded;
}
</style>
