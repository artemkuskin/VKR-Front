<template>
    <div class="news-page">
      <h2 class="news-page__title">Новости</h2>
      <div class="news-list">
        <div
          class="news-card"
          v-for="news in newsList"
          :key="news.id"
        >
          <div class="news-card__image"></div>
          <div class="news-card__content">
            <h3>{{ news.title }}</h3>
            <p>{{ news?.description }}</p>
            <span class="news-card__date">{{ news.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

       const  newsList = [
          {
            id: 1,
            title: "Заголовок первой новости",
            description: "Описание первой новости. Некоторый пример текста, который может находиться в этом блоке новости.",
            date: "23 апреля 2024",
          },
          {
            id: 2,
            title: "Заголовок второй новости",
            description: "Описание второй новости. Некоторый пример текста, который может находиться в этом блоке новости.",
            date: "23 апреля 2024",
          },
          {
            id: 3,
            title: "Заголовок третьей новости",
            description: "Описание третьей новости. Некоторый пример текста, который может находиться в этом блоке новости.",
            date: "22 апреля 2024",
          },
        ]   

  </script>
  
  <style scoped lang="sass">
  .news-page 
    background-color: #1f1f1f
    padding: 24px
    color: #ffffff
  
    &__title 
      font-size: 20px
      font-weight: 600
      margin-bottom: 24px
    
  
  
  .news-list 
    display: flex
    flex-direction: column
    gap: 16px
  
  
  .news-card 
    display: flex
    background-color: #2b2b2b
    border-radius: 12px
    padding: 16px
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3)
  
    &__image 
      width: 80px
      height: 80px
      background-color: #3a3a3a
      border-radius: 8px
      margin-right: 16px
      flex-shrink: 0
    
  
    &__content 
      flex: 1
  
      h3 
        font-size: 16px
        margin-bottom: 8px
      
  
      p 
        font-size: 14px
        color: #cccccc
        margin-bottom: 8px
      
  
      &__date 
        font-size: 12px
        color: #999999
      
    
  
  </style>