<script setup lang="ts">
 
const employees = [
   { id: 1, name: "Иван Петров", position: "Руководитель отдела продаж", image: "/men3.jpg" },
   { id: 2, name: "Анна Смирнова", position: "Бизнес-аналитик", image: "/1538985367423.png" },
   { id: 3, name: "Дмитрий Орлов", position: "Разработчик фронтенда" , image: "/men1.jpeg"  },
   { id: 4, name: "Мария Кузнецова", position: "HR-менеджер" , image: "/i.webp"  },
   { id: 5, name: "Алексей Морозов", position: "Системный администратор", image:"/men2.jpg"  },
 ]




</script>

<template>
    <div class="employees-page">
      <h2 class="employees-page__title">Сотрудники</h2>
      <div class="employee-list">
        <div
          class="employee-card"
          v-for="employee in employees"
          :key="employee.id"
        
        >
          <img class="employee-card__avatar" :src="employee.image"/>
          <div class="employee-card__info">
            <h3>{{ employee.name }}</h3>
            <p>{{ employee?.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped lang="sass">
  .employees-page 
    background-color: #1f1f1f
    padding: 24px
    color: #ffffff
    height: 100%
  
    &__title 
      font-size: 20px
      font-weight: 600
      margin-bottom: 24px
    
  
  
  .employee-list 
    display: flex
    flex-direction: column
    gap: 16px
  
  
  .employee-card 
    display: flex
    align-items: center
    background-color: #2b2b2b
    border-radius: 12px
    padding: 16px
    cursor: pointer
    transition: background 0.3s
  
    &:hover 
      background-color: #333
    
  
    &__avatar 
      width: 64px
      height: 64px
      background-color: #3a3a3a
      border-radius: 50%
      margin-right: 16px
      flex-shrink: 0
    
  
    &__info 
      h3 
        font-size: 16px
        margin: 0
        color: #fff
      
  
      p 
        font-size: 14px
        color: #cccccc
        margin: 4px 0 0
      
    
  
  </style>