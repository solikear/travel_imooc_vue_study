<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  mounted() {
    axios.get("/api/city.json").then(this.getCityInfoSucc);
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: "",
    };
  },
  methods: {
    getCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
