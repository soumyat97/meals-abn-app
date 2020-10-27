<template>
  <div>
    <Header />

    <ul class="navbar nav list-inline" style="float: right;">
      <li>
        <input
          type="text"
          class="search"
          autocomplete="off"
          placeholder=" Search"
          v-model="searchedMeal"
        />
        &nbsp;
        <button class="btn btn-primary btn-sm" @click="searchMeal()">
          Go
        </button>
      </li>
    </ul>
    <br /><br />
    <div id="root" class="container-fluid">
      <div class="random-meal">
        <div class="row">
          <div class="col-sm-6">
            <img :src="random.meals[0][`strMealThumb`]" width="95%" /><br />
          </div>
          <div class="col-sm-6">
            <table class="table table-borderless">
              <tr>
                <td colspan="3" style="text-align: left">
                  <h3>
                    <b
                      ><u> {{ random.meals[0][`strMeal`] }}</u></b
                    >
                  </h3>
                </td>
              </tr>
              <tr>
                <td style="width: 0.5%;text-align: left">Category:</td>
                <td colspan="2" style="text-align: left">
                  {{ random.meals[0][`strCategory`] }}
                </td>
              </tr>
              <tr>
                <td style="width: 0.5%;text-align: left">Origin:</td>
                <td colspan="2" style="text-align: justify">
                  {{ random.meals[0][`strArea`] }}
                </td>
              </tr>
              <tr>
                <td colspan="3" style="text-align: left">
                  <a :href="random.meals[0][`strYoutube`]"
                    ><b>Check Video Tutorial Here</b></a
                  >
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { randomMeal } from "../Meals.service";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      random: []
    };
  },
  created() {
    randomMeal().then(res => (this.random = res.data));
  },
  methods: {
    searchMeal() {
      this.$router.push({
        name: "SearchMeals",
        params: { keyword: this.$store.getters.getSearchedMeals }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#root {
  height: 100%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
