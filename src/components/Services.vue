<template>
    <div id="services" class="text-center">
      <div class="container">
        <div class="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
            Descubre los servicios que ofrecemos para ayudarte a disfrutar de la mejor experiencia culinaria.
          </p>
        </div>
        <div class="row">
          <div v-if="data.length > 0">
            <div v-for="(service, index) in data" :key="`${service.name}-${index}`" class="col-md-4">
              <i :class="service.icon"></i>
              <div class="service-desc">
                <h3>{{ service.name }}</h3>
                <p>{{ service.text }}</p>
              </div>
            </div>
          </div>
          <div v-else>cargando...</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServicesSection",
    props: {
      data: {
        type: Array,
        default: () => [],
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
  