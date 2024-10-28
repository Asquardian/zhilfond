<script lang="js">
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<template>
    <div class="spinner-container" v-if="this.loading">
        <div class="spinner"></div>
    </div>
    <div class="content" v-else>
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
@use './../assets/_variables.sass' as var
$spinner-size: 50px
$spinner-color: rgba(227, 31, 36, 1)

.spinner-container
    height: 50px
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    height: 100%


.spinner
  width: $spinner-size
  height: $spinner-size
  border: 3px solid transparent
  border-left-color: $spinner-color
  border-bottom-color: $spinner-color
  border-radius: 50%
  animation: spin 1s linear infinite


@keyframes spin 
  0%
    transform: rotate(0deg)
  
  100%
    transform: rotate(360deg)



</style>
