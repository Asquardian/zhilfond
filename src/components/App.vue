<script setup lang="js">
import SearchInput from "./search/SearchInput.vue";
import ListContainer from "./list/ListContainer.vue";
import ContainerView from "./containerView.vue";
</script>

<template>
  <main>
    <ContainerView>
      <aside class="sidebar">
        <SearchInput />
        <ListContainer />
      </aside>
      <ListContainer />
    </ContainerView>
  </main>
</template>

<style lang="sass" scoped>
@use './../assets/_variables.sass' as var

main
  width: 100%
  min-height: 100vh

.sidebar:deep()
  border-right: 1px solid var.$border-color
  padding: 27px 36px 27px 20px

</style>
