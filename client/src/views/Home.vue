<template>
  <v-container fluid>
    <div class="mx-10 my-5" id="search">
      <v-text-field
        v-model="searchFirma"
        class="bg-info bg-opacity-10 black--text"
        filled
        hide-details
        single-line
        :disabled="locked"
      >
        <v-icon slot="append-outer" @click="locked = !locked" class="lock-button" color="secondary" large
          >mdi-magnify</v-icon
        >
      </v-text-field>
    </div>

    <v-card class="ma-5 white--text">
      <!-- <div>
        <v-select
          :items="chooseAbteilungen"
          v-model="abteilung"
          label="All"
          solo
          filled
          placeholder="All"
          class="pa-5"
          color="light-blue"
          append-icon="mdi-filter-variant-plus"
        ></v-select>
      </div> -->
      <v-row
        class="text-center mt-0"
        style="
          background-color: #8d1717;
          position: fixed;
          z-index: 1;
          width: 105%;
          top: 0;
          left: 0;
          font-size: 25px;
        "
      >
        <v-col cols="4"><span class="text-center">FIRMEN NAME</span></v-col>
        <v-col cols="4"><span class="text-center">STOCK</span></v-col>
        <v-col cols="4"><span class="text-center">STANDORT</span></v-col>
      </v-row>
      <div class="mt-15">
        <v-row
          no-gutters
          v-for="f of searchCompany"
          :key="f.firmen_id"
          class="pa-4 text-center"
          style="font-size: 20px"
        >
          <v-col cols="4">
            <v-card class="pa-2 rounded" outlined>
              <span
                ><b>{{ f.firmen_name }}</b></span
              ></v-card
            >
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2 rounded" outlined>
              <span
                ><b>{{ f.stock }}</b></span
              ></v-card
            >
          </v-col>
          <v-col cols="4">
            <v-card class="pa-2 rounded" outlined>
              <span
                ><b>{{ f.platz }}</b></span
              ></v-card
            >
          </v-col>
        </v-row>
      </div>

      <v-row>
        <v-col cols="1" class="black--text ml-10" id="clock" style="font-size: 25px"> {{ timestamp }} </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    firmen: {
      type: Array,
    },
    firmenJson: {
      type: Array,
    },
  },
  data() {
    return {
      searchFirma: '',
      locked: true,
      timestamp: '',
      headers: [
        {
          text: 'Firmen Name',
          align: 'start',
          value: 'firmen_name',
        },
        // { text: 'Fachrichtung', value: 'fachrichtung' },
        { text: 'Standort', value: 'platz' },
        { text: 'Stock', value: 'stock' },
      ],
      // abteilung: '',
      // chooseAbteilungen: ['Informationstechnologie', 'Elektrotechnik', 'Maschinenbau', 'All'],
    };
  },
  created() {
    setInterval(this.getTime, 1000);
  },
  mounted() {
    this.autoScroll();
  },

  methods: {
    autoScroll() {
      const main = document.querySelector('#main');
      setInterval(function () {
        window.scrollBy(0, 150);
      }, 10000);
      window.onscroll = function () {
        if (window.innerHeight + Math.ceil(window.pageYOffset) >= main.offsetHeight) {
          setInterval(function () {
            window.scrollTo(0, 0);
          }, 5000);
        }
      };
    },
    getTime() {
      const today = new Date();
      let hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
      let minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
      let seconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
      const time = hours + ':' + minutes + ':' + seconds;
      const dateTime = time;
      this.timestamp = dateTime;
    },
  },
  computed: {
    // filterAbteilung() {
    //   if (this.abteilung == 'All') {
    //     return this.firmen.filter((el) => el.firmen_name.includes(this.searchFirma));
    //   }
    //   return this.firmen.filter(
    //     (el) => el.fachrichtung.includes(this.abteilung) && el.firmen_name.includes(this.searchFirma),
    //   );
    // },

    searchCompany() {
      return this.firmenJson.filter((el) =>
        el.firmen_name.toLowerCase().includes(this.searchFirma.toLowerCase()),
      );
    },
    icon() {
      return this.locked ? 'lock' : 'lock_open';
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
#search {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
}
#clock {
  position: fixed;
  bottom: 0;
  left: 1;
  font-weight: bold;
  z-index: 100;
}
.lock-button {
  pointer-events: auto;
}
.v-text-field {
  width: 400px;
}
</style>
