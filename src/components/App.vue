<script setup lang="js">
import SearchInput from "./search/SearchInput.vue";
import ListContainer from "./list/ListContainer.vue";
import ContainerView from "./containerView.vue";
import DetailUser from "./DetailUser.vue";
</script>

<template>
  <main>
    <ContainerView class="center-align">
      <aside class="sidebar">
        <SearchInput />
        <ListContainer />
      </aside>
      <Transition name="fade">
        <DetailUser />
      </Transition>
    </ContainerView>
  </main>
</template>

<style lang="sass" scoped>
@use './../assets/_variables.sass' as var

main
  width: 100%
  min-height: 90vh
  display: flex
  align-items: center

.center-align
  flex: 1

.sidebar:deep()
  border-right: 1px solid var.$border-color
  padding: 27px 36px 27px 20px
  @media screen and (max-width: var.$layout-breakpoint-small)
    border-right: none
    padding: 27px 20px 27px 20px

</style>
