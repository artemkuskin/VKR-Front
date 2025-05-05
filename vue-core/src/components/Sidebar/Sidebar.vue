<script setup lang="ts">

import SidebarMenuItem from './SidebarMenuItem.vue'



const items = [
  {
    label: 'Главная',
    link: '/'
  },
  {
    label: 'Новости',
    link: '/'
  },
  {
    label: 'Сотрудники',
    link: '/'
  },
  {
    label: 'Документы',
    link: '/'
  },
]





</script>

<template>
  <div ref="sidebarRef" class="Sidebar" >
    <div class="Sidebar__Content">
      <div class="Sidebar__Menu">
        <ul class="SidebarMenu">
          <SidebarMenuItem
            v-for="item in items"
            :key="item.id"
            :item="item"
          />
        </ul>
      </div>

    </div>

  </div>
</template>

<style scoped lang="sass">
.SidebarMenu
  list-style-type: none
  padding: 0
  margin: 0
.Sidebar
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  width: 272px
  height: 100%
  background: white
  padding: 20px
  transition: width 0.5s

  &__Content
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
    padding-bottom: 32px
    border-bottom: 1px solid silver

  &__Config
    display: flex
    flex-direction: column
    gap: 20px

    & > span
      font-weight: 700
      font-size: 12px
      line-height: 16px
      text-transform: uppercase
      color: blue

  &--collapsed
    width: 94px

  &.collapsed .menu-label
    display: none
</style>
