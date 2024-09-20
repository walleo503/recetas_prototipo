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
  /* Aquí puedes agregar los estilos específicos de este componente si es necesario */
  </style>
  