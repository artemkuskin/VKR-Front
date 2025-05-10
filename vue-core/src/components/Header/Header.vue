<template>
    <header class="header">
      <div class="header__left">
        <button class="header__menu-btn" @click="$emit('toggleSidebar')">
          ☰
        </button>
      </div>
      <div class="header__right">
        <RouterLink to="/profile" class="header__profile">
          <img src="/image.png" alt="Avatar" class="header__avatar" />
          <span class="header__username">Анна Иванова</span>
        </RouterLink>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped lang="scss">
$header-bg: #2a2a33;
$border-color: #dbe2ea;
$accent-color: #3366ff;
$text-color: #ffffff;
$text-muted: #f7f3f3;

.header {
  height: 64px;
  background-color: $header-bg;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;

  &__left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__menu-btn {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: $text-muted;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: $text-color;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__profile {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $text-color;
    transition: color 0.2s;

    &:hover {
      color: $accent-color;
    }
  }

  &__avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid $border-color;
  }

  &__username {
    font-size: 14px;
  }
}
  </style>