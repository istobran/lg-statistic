<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="toggleCity" :disabled="$root.loading">
        <v-icon>swap_horiz</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>{{ city.name }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app inset>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import {scaleLinear} from "d3-scale";
import cityList from './service/city';

export default {
  name: 'app',
  data() {
    return {
      drawer: false,
      city: cityList[this.$root.cityIdx]
    }
  },
  methods: {
    toggleCity() {
      if (this.$root.loading) return;
      var idx = this.$root.cityIdx;
      this.$root.cityIdx = (idx+1) % cityList.length;
      this.city = cityList[this.$root.cityIdx];
    }
  }
}
</script>

<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

.app {
    color: #444;
    margin-top: 100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
}
</style>
