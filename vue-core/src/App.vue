<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import  Sidebar from './components/Sidebar/Sidebar.vue'

</script>

<template>

  <div class="App">
<!--    <Header />-->
    <div class="App__Content">
      <Sidebar />
      <div :class="'App-Content__Auth'">
        <RouterView />
      </div>
    </div>
<!--    <Footer  />-->
  </div>
</template>

<style scoped lang="sass">
.App
  display: flex
  flex-direction: column
  width: 100%

  &__Content
    display: flex
    height: calc(100vh - 100px)

  &-Content

    &__MicroFrontend
      padding: 20px 0
      overflow: auto
      width: 100%

    &__Auth
      overflow: hidden
      width: 100%
</style>

