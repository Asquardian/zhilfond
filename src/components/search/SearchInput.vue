<script lang="js">
import { mapActions } from "vuex";

export default {
  data() {
    return { search_username: "" };
  },
  methods: {
    ...mapActions(["changeSearchName"]),
    changeValue() {
      const changed = this.search_username.split(/[\s,]+/);//
      this.changeSearchName(changed);
    },
  },
};
</script>

<template>
  <div class="search-input-container">
    <h4>Поиск сотрудников</h4>
    <input
      type="text"
      class="search-input"
      placeholder="Введите имя "
      v-model="search_username"
      @change="changeValue()"
    />
  </div>
</template>

<style lang="sass" scoped>

@use './../../assets/_variables' as var

$placeholder: rgba(118, 120, 125, 1)

$border: rgba(233, 236, 239, 1)

.search-input
  height: 46px
  padding: 0 16px 0 16px
  border-radius: 8px
  border: 1.5px solid $border
  transition: outline .1s ease-in
  outline: $border 0px solid
  font-family: var.$font-family

  &::placeholder
    color: $placeholder

  &:focus
    outline: $border 3px solid

.search-input-container
  display: grid
</style>

