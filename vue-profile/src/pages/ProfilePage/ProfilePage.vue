<template>
    <div class="profile-page">
      <div class="profile-card">
        <img class="profile-avatar" src="/image.png"/>
        <div class="profile-info">
          <h2>{{ employee.name }}</h2>
          <p class="position">{{ employee.position }}</p>
          <p class="email">Email: {{ employee.email }}</p>
          <p class="phone">Телефон: {{ employee.phone }}</p>
          <p class="department">Отдел: {{ employee.department }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

        const employee = {
          id: 1,
          name: "Анна Иванова",
          position: "Руководитель отдела продаж",
          email: "ivan.petrov@company.ru",
          phone: "+7 (912) 345-67-89",
          department: "Продажи",
        }
  </script>
  
  <style scoped lang="sass">
  .profile-page 
    background-color: #1f1f1f
    padding: 32px
    color: #ffffff
    display: flex
    justify-content: center
    height: 100%
  
  
  .profile-card 
    background-color: #2b2b2b
    border-radius: 16px
    padding: 24px
    width: 100%
    height: 300px
    display: flex
    gap: 24px
  
    @media (max-width: 600px) 
      flex-direction: column
      align-items: center
    
  
  
  .profile-avatar 
    width: 120px
    height: 120px
    background-color: #3a3a3a
    border-radius: 50%
    flex-shrink: 0
  
  
  .profile-info 
    h2 
      font-size: 22px
      margin-bottom: 8px
      color: #ffffff
    
  
    .position 
      font-size: 16px
      color: #cccccc
      margin-bottom: 16px
    
  
    p 
      margin: 4px 0
      color: #aaaaaa
      font-size: 14px
    
  
  </style>