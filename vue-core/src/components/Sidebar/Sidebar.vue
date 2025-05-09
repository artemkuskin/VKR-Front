<template>
  <aside class="sidebar">
    <div class="sidebar__logo">Корпоративный Портал</div>
    <nav class="sidebar__nav">
      <RouterLink
        v-for="item in items"
        :key="item.id"
        :to="item.route"
        class="sidebar__link"
        active-class="sidebar__link--active"
      >
        <span class="sidebar__icon">
          <component :is="getIcon(item.icon)" />
        </span>
        <span class="sidebar__label">{{ item.label }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
   const sidebarItems = [
  { id: 1, label: 'Главная', icon: 'home', route: '/main' },
  { id: 2, label: 'Новости', icon: 'newspaper', route: '/news' },
  { id: 3, label: 'Сотрудники', icon: 'users', route: '/employees' },
  { id: 4, label: 'Документы', icon: 'file-text', route: '/documents' },
  { id: 5, label: 'Профиль', icon: 'user', route: '/profile' },
];
import { Home, Newspaper, Users, FileText, User } from 'lucide-vue-next'
import { ref } from 'vue'

const items = ref(sidebarItems)

const getIcon = (name: string) => {
  switch (name) {
    case 'home': return Home
    case 'newspaper': return Newspaper
    case 'users': return Users
    case 'file-text': return FileText
    case 'user': return User
    default: return Home
  }
}
</script>

<style lang="scss" scoped>
$sidebar-bg: #2b2b30;
$border-color: #dbe2ea;
$accent-color: #3366ff;
$link-color: #ffffff;
$link-hover: #e9eef7;
$active-bg: #e6edff;

.sidebar {
  width: 240px;
  height: 100%;
  background-color: $sidebar-bg;
  border-right: 1px solid $border-color;
  display: flex;
  flex-direction: column;
  padding-top: 12px;

  &__logo {
    font-size: 18px;
    font-weight: 700;
    padding: 20px;
    color: $link-color;
    border-bottom: 1px solid $border-color;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    text-decoration: none;
    color: $link-color;
    transition: background-color 0.2s ease;
    border-left: 3px solid transparent;

    &:hover {
      background-color: $link-hover;
    }

    &--active {
      background-color: $active-bg;
      font-weight: 600;
      color: $accent-color;
      border-left: 3px solid $accent-color;
    }
  }

  &__icon {
    margin-right: 12px;
    display: flex;
    align-items: center;
  }

  &__label {
    font-size: 14px;
  }
}
</style>
