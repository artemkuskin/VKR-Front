<script setup lang="ts">
import SidebarMenuItem from "./SidebarMenuItem.vue"

import type { ISidebarMenuItem } from "../types"

defineProps<{
    isCollapsed: boolean
    items: ISidebarMenuItem[]
}>()
</script>

<template>
    <ul class="SidebarMenu">
        <SidebarMenuItem
            v-for="item in items"
            :key="item.id"
            :is-collapsed="isCollapsed"
            :item="item"
        />
    </ul>
</template>

<style scoped lang="sass">
.SidebarMenu
    list-style-type: none
    padding: 0
    margin: 0
</style>
