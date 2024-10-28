<script lang="js">
import { mapState } from "vuex";
import ListItem from "./ListItem.vue";
import PreLoader from "./../PreLoader.vue";

export default {
  components: {
    ListItem, PreLoader
  },
  computed: {
    ...mapState(["users", "error"]),
  },
};
</script>

<template>
  <div class="container">
    <h4>Результаты</h4>
    <PreLoader>
      <div class="error" v-if="this.error != ''">
        {{ this.error }}
      </div>
      <Transition name="fade" v-if="Object.keys(this.users).length != 0">
        <div class="result-card">
          <ListItem v-for="user in this.users" v-bind:item="user" />
        </div>
      </Transition>
      <div v-else class="not-found">ничего не найдено</div>
    </PreLoader>
  </div>
</template>

<style lang="sass" scoped>
@use './../../assets/_variables.sass' as var
.result-card
  display: grid
  overflow-y: auto
  width: 100%
  overflow-x: hidden
  padding: 10px
  row-gap: 18px
  max-height: calc(var.$container-height - 250px)

.not-found, .error
  color: var.$color-error
</style>

<script setup lang="ts"></script>
