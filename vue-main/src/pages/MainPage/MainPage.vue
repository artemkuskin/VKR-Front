<template>
    <div class="home">
      <section class="home__section">
        <h2 class="home__title">Новости</h2>
        <div class="home__news">
          <div class="card news-card">
            <img class="img-placeholder" src="/news.jpg" />
            <h3>Заголовок новости</h3>
            <p>Краткое описание новости, чтобы заинтересовать пользователя.</p>
            <span class="date">24 апреля 2024</span>
          </div>
          <div class="card reminder-card">
            <h3>Напоминания</h3>
            <p>Скоро собрание отдела маркетинга.</p>
            <button>Подробнее</button>
          </div>
        </div>
      </section>
  
      <section class="home__section">
        <h2 class="home__title">Главная страница</h2>
        <div class="card">
          <p>Здесь отображаются общие данные, ссылки, метрики и другие важные компоненты портала.</p>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped lang="scss">
  .home {
    background-color: #1f1f1f;
    color: #fff;
    padding: 24px;
    font-family: 'Segoe UI', sans-serif;
    height: 100%;
  
    .home__section {
      margin-bottom: 32px;
    }
  
    .home__title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
      color: #e0e0e0;
    }
  
    .home__news {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  
    .card {
      background-color: #2b2b2b;
      border-radius: 12px;
      padding: 16px;
      flex: 1 1 300px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
  
      h3 {
        margin-bottom: 8px;
        font-size: 16px;
      }
  
      p {
        font-size: 14px;
        color: #c0c0c0;
        flex-grow: 1;
      }
  
      .date {
        font-size: 12px;
        color: #999;
        margin-top: 12px;
      }
  
      button {
        margin-top: auto;
        background-color: #444;
        color: #fff;
        border: none;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
  
        &:hover {
          background-color: #555;
        }
      }
    }
  
    .img-placeholder {
      background-color: #3a3a3a;
      height: 120px;
      border-radius: 8px;
      margin-bottom: 12px;
    }
  }
  </style>