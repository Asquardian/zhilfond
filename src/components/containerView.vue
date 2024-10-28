<script setup lang="js"></script>

<template>
  <div class="content">
    <img class="logo" src="./../assets/logo.svg" alt="Жилфонд" />
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

.container
    background-color: var.$container-color
    height: var.$container-height
    display: grid
    grid-template-columns: 1fr 3fr
    border-radius: 10px
    box-shadow: var.$box-shadow

</style>
