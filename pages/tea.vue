<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

        <v-card>
          <v-card-title class="headline">
            絶アレキ固定覚書
          </v-card-title>
          <v-card-text class="pb-4 tea">
            <div v-html="tea"></div>
          </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import tea from '../assets/tea.md'

export default Vue.extend ({
  components: {},
  computed: {
    tea() {
      return tea;
    }
  }
});
</script>

<style>

</style>