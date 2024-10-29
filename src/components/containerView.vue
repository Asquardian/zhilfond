<script setup lang="js"></script>

<template>
  <div class="content">
    <div class="flex-box">
      <img class="logo" src="./../assets/logo.svg" alt="Жилфонд" />
      <p>Пользователь</p>
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use './../assets/_variables.sass' as var


$border-color: rgba(222, 222, 221, 1)


.content
    max-width: 1266px
    margin: auto

.flex-box
  display: flex
  justify-content: space-between
  @media screen and (max-width: var.$layout-breakpoint-small)
    display: grid

.container
    background-color: var.$container-color
    min-height: var.$container-height
    display: grid
    grid-template-columns: 291px 3fr
    border-radius: 10px
    box-shadow: var.$box-shadow
    @media screen and (max-width: var.$layout-breakpoint-small)
      display: block

</style>
