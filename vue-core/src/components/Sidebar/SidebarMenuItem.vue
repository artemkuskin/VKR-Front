<script setup lang="ts">

import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { RouterLink } from "vue-router"




const props = defineProps<{
    item: any
}>()

const route = useRoute()


const isActive = computed(() => {
    return props.item.link === route.path
})

const isHovered = ref(false)

const handleMouseOver = () => {
    isHovered.value = true
}

const handleMouseLeave = () => {
    isHovered.value = false
}
</script>

<template>
    <div class="SidebarMenuItemWithTooltip">
        <div
            class="SidebarMenuItem"
            :class="{
                'SidebarMenuItem--hovered': isHovered && !isActive,
                'SidebarMenuItem--active': isActive,
            }"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
        >
            <RouterLink v-if="item.link" :to="item.link">
                <li>

                    <span  class="SidebarMenuItem__Label">{{
                        item.label
                    }}</span>
                </li>
            </RouterLink>


        </div>

    </div>
</template>

<style scoped lang="sass">
.SidebarMenuItemWithTooltip
    display: flex
    align-items: center

.SidebarMenuItem
    padding: 12px 16px
    width: 229px
    height: 54px
    background: white
    border-radius: 16px

    a
        text-decoration: none

    li
        display: flex
        align-items: center
        gap: 12px

    &--collapsed
        display: flex
        justify-content: center
        align-items: center
        width: 54px
        padding: 0

    &__Icon
        display: flex
        justify-content: center
        align-items: center
        padding: 6px
        width: 32px
        height: 32px
        background: blue
        border-radius: 12px

    &__Label
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: #e5e2e2

        &__Tooltip
            display: block
            color: white
            background: blue
            padding: 12px
            border-radius: 6px
            position: absolute
            left: 88px
            z-index: 200
            font-weight: 700
            font-size: 14px
            line-height: 18px

            &:before
                content: ""
                position: absolute
                width: 0
                height: 0
                border-width: 6px
                border-style: solid
                border-color: blue
                border-radius: 2px
                top: 15px
                left: -4px
                transform: rotate(45deg)

    &--hovered
      background: #e0dddd
      cursor: pointer

      li
        background: #e0dddd

      .SidebarMenuItem__Label
        color: blue

      .SidebarMenuItem__Icon
        background: blue

    &--active
        background: blue

        a
          cursor: default

        li
            background: blue

        .SidebarMenuItem__Label
            color: white

        .SidebarMenuItem__Icon
            background: white
</style>
