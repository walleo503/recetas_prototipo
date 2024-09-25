<template>
    <div id="features" class="text-center">
      <div class="container">
        <div class="col-md-10 col-md-offset-1 section-title">
          <h2>Características</h2>
        </div>
        <div class="row">
          <!-- Verificamos si los datos existen antes de hacer el loop -->
          <div v-if="data && data.length > 0">
            <div
              v-for="(d, i) in data"
              :key="`${d.title}-${i}`"
              class="col-xs-6 col-md-3"
            >
              <i :class="d.icon"></i>
              <h3>{{ d.title }}</h3>
              <p>{{ d.text }}</p>
            </div>
          </div>
          <!-- Mensaje de carga si no hay datos -->
          <div v-else>Cargando...</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FeaturesSection",
    props: {
      data: {
        type: Array,
        required: false,
      },
    },
  };
  </script>
  
  <style scoped>
  #about {
    background-color: #f8f9fa;
    padding: 50px 0;
  }
  
  .about-title {
    color: #2c3e50;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .about-subtitle {
    color: #16a085;
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  
  .about-description {
    color: #34495e;
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
  }
  
  .list-style ul {
    list-style-type: none;
    padding: 0;
  }
  
  .list-style ul li {
    color: #2980b9;
    font-size: 18px;
    margin-bottom: 10px;
  }
  </style>
  