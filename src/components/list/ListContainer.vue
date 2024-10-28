<script lang="js">
import { mapState } from "vuex";
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>

<template>
  <div class="container">
    <h4>Результаты</h4>
    <div class="result-card">
      <ListItem v-for="user in this.users" v-bind:item="user" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use './../../assets/_variables.sass' as var
.result-card
  display: grid
  overflow-y: auto
  padding: 10px
  gap: 18px
  max-height: calc(var.$container-height - 250px)
</style>

<script setup lang="ts"></script>
