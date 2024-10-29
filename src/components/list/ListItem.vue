<script lang="js">
import { mapActions } from "vuex";
export default {
  props: {
    item:  {
        type: Object,
        required: true
    }
  },
  methods:{ ...mapActions(['getUserDataByID']) }
};
</script>

<template>
  <div class="card" @click="getUserDataByID(item.id)">
    <img
      class="image"
      src="./../../assets/placeholder.png"
      alt="Изображение не найдено"
    />
    <div class="info">
      <p class="name">{{ item.username }}</p>
      <p class="email">{{ item.email }}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>

@use './../../assets/_variables.sass' as var

.card
    display: flex
    border-radius: 10px
    box-shadow: var.$box-shadow
    transition: .5s
    width: 100%
    cursor: pointer
    .info
        padding: 10px
    .name, .email
        line-height: 14px
        font-size: 14px
        word-break: break-all
    .name
        font-weight: 700

    &:hover
        background-color: rgba(224, 224, 224, 1)

.image
    border-radius: 10px 0 0px 10px
    border-right: 1px solid var.$border-color
    width: 70px
    aspect-ratio: 1/1
    object-fit: cover
</style>
