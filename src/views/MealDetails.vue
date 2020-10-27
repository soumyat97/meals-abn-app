<template>
  <div>
    <Header />
    <br />
    <br />
    <div id="root" class="row">
      <div class="col-sm-5">
        <img :src="meal.meals[0][`strMealThumb`]" width="95%" />
        <br />
        ID: {{ meal.meals[0][`idMeal`] }}
      </div>
      <div class="col-sm-1"></div>
      <div class="col-sm-5">
        <table class="table table-borderless">
          <tr>
            <td colspan="3" style="text-align: center">
              <h3>
                <b
                  ><u> {{ meal.meals[0][`strMeal`] }}</u></b
                >
              </h3>
            </td>
          </tr>
          <tr>
            <td style="width: 0.5%;text-align: left">Category:</td>
            <td colspan="2" style="text-align: left">
              {{ meal.meals[0][`strCategory`] }}
            </td>
          </tr>
          <tr>
            <td style="width: 0.5%;text-align: left">Ingredients:</td>
            <td>
              <table>
                <tr v-for="i in 20" :key="i">
                  <td style="text-align: left" v-if="getIngredientLimit(i)">
                    {{ getIngredientLimit(i) }}
                  </td>
                  <td style="text-align: left" v-if="getMeasurementLimit(i)">
                    {{ getMeasurementLimit(i) }}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="width: 0.5%;text-align: left">Instructions:</td>
            <td colspan="2" style="text-align: justify">
              {{ meal.meals[0][`strInstructions`] }}
            </td>
          </tr>
          <tr>
            <td colspan="3" style="text-align: left">
              <a :href="meal.meals[0][`strYoutube`]"
                ><b>Check Video Tutorial Here</b></a
              >
            </td>
          </tr>
        </table>
      </div>
      <div class="col-sm-1"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mealDetails } from "../Meals.service";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "MealDetails",
  components: {
    Header,
    Footer
  },
  props: {
    mealId: String
  },
  data() {
    return {
      meal: Object
    };
  },
  methods: {
    getIngredientLimit(i) {
      const n = `strIngredient${i}`;
      const ingr = this.meal.meals[0][n];
      if (ingr) return ingr;
    },
    getMeasurementLimit(i) {
      const m = `strMeasure${i}`;
      const qty = this.meal.meals[0][m];
      if (qty) return qty;
    }
  },
  created() {
    mealDetails(this.mealId).then(response => (this.meal = response.data));
  }
};
</script>

<style scoped>
#root {
  height: 100%;
}
</style>
