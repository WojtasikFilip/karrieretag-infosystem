<template>
  <v-app>
    <v-main id="main">
      <router-view :firmen="firmen" :firmenJson="firmenJson" />
    </v-main>
  </v-app>
</template>
<script>
import axios from 'axios';
export default {
  name: 'App',

  data: () => ({
    firmen: [],
    firmenJson: [],
  }),
  created() {
    this.getFirmen();
    this.getFirmenJson();
  },
  methods: {
    async getFirmen() {
      const { data } = await axios({
        url: '/firmen',
        method: 'GET',
      });
      this.firmen = data;
    },
    async getFirmenJson() {
      const { data } = await axios({
        url: '/firmenJson',
        method: 'GET',
      });
      this.firmenJson = data;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');

html * {
  /* font-family: 'Roboto Condensed', cursive; */
  /* font-size: 25px; */
  scroll-behavior: smooth;
}
</style>
