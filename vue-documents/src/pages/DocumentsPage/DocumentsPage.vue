<template>
    <div class="documents-page">
      <h1>Документы</h1>
      <div class="documents-list">
        <div class="document-card" v-for="doc in documents" :key="doc.id">
          <div class="icon">📄</div>
          <div class="document-info">
            <h2>{{ doc.title }}</h2>
            <p class="description">{{ doc.description }}</p>
            <p class="date">{{ doc.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts"setup>
 
       const  documents= [
          {
            id: 1,
            title: "Политика конфиденциальности",
            description: "Актуальная версия политики в отношении обработки персональных данных.",
            date: "1 апреля 2024",
          },
          {
            id: 2,
            title: "Договор о найме",
            description: "Типовой трудовой договор компании.",
            date: "15 марта 2024",
          },
          {
            id: 3,
            title: "Регламент удалённой работы",
            description: "Правила и нормы работы вне офиса.",
            date: "10 февраля 2024",
          },
        ]
 
  </script>
  
  <style scoped lang="sass">
  .documents-page 
    background-color: #1f1f1f
    color: #ffffff
    padding: 32px
    height: 100%
  
    h1 
      font-size: 28px
      margin-bottom: 24px
    
  
  
  .documents-list 
    display: flex
    flex-direction: column
    gap: 16px
  
  
  .document-card 
    background-color: #2b2b2b
    border-radius: 12px
    padding: 16px
    display: flex
    gap: 16px
  
    .icon 
      font-size: 32px
      flex-shrink: 0
      color: #cccccc
    
  
    .document-info 
      h2 
        font-size: 18px
        margin: 0 0 8px
      
  
      .description 
        font-size: 14px
        color: #bbbbbb
        margin-bottom: 6px
      
  
      .date 
        font-size: 13px
        color: #888888
      
    
  
  </style>