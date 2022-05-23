<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

        <v-card>
          <v-card-title class="headline">
            ヒーラー覚書
          </v-card-title>
          <v-card-text class="pb-4 healer">
            <div v-html="healer"></div>
          </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import healer from '../assets/healer.md'

export default Vue.extend ({
  components: {},
  computed: {
    healer() {
      return healer;
    }
  }
});
</script>

<style>

</style>