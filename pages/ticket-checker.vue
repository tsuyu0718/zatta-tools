<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

        <v-card>
          <v-card-title class="headline">
            チケットリセールの自動チェックに使ったもの
          </v-card-title>
          <v-card-text class="pb-4 tea">
            <div v-html="ticketResale"></div>
          </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Prism from 'prismjs';
import Vue from 'vue'
import ticketResale from '../assets/ticketResale.md'
import 'prismjs/themes/prism-solarizedlight.css'

export default Vue.extend ({
  components: {},
  computed: {
    ticketResale() {
      return ticketResale;
    }
  },
  mounted() {
    Prism.highlightAll()
  },
});
</script>

<style>

</style>