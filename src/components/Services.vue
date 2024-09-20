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
  /* Aquí puedes agregar los estilos correspondientes */
  </style>
  