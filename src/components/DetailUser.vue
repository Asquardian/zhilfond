<script lang="js">
import { mapState } from "vuex";
import PreLoader from "./PreLoader.vue";

export default {
  components: {
    PreLoader
  },
  computed: {
    ...mapState(["detailUser"])
  },
};</script>

<template>
  <PreLoader>
  <div class="container" v-if="Object.keys(this.detailUser).length != 0">
    <img src="./../assets/placeholder.png" alt="Изображение не найдено" class="detail_image">
    <div class="info">

      <h3>{{ this.detailUser.name }}</h3>
      <p><b>email:</b> {{ this.detailUser.email }}</p>
      <p><b>phone:</b> {{ this.detailUser.phone }}</p>

      <h3>О себе</h3> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.</p>
    </div>
  </div>
  <div v-else class="container-not-found">
    <p class="not-found">Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
  </PreLoader>
</template>

<style lang="sass" scoped>
@use './../assets/_variables.sass' as var

.container
  display: grid
  grid-template-columns: 3fr 4fr
  padding: 30px
  gap: 60px
  @media screen and (max-width: var.$layout-breakpoint-small)
    display: block

.detail_image
  width: 100%

.container-not-found
  display: flex
  width: 100%
  height: 100%
  justify-content: center
  align-items: center
  .not-found
    color: var.$color-error
</style>
