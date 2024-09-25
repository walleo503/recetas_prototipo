<template> 
  <div>
    <Navigation /> <!-- Menú de navegación global -->
    <router-view /> <!-- Aquí se renderizan los componentes según las rutas -->
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style>
/* Aquí puedes poner tu CSS global o importar App.css */
@media screen and (max-width: 400px) {
  #features {
    padding: 20px;
    width: 111%;
  }
  #about,
  #services,
  #testimonials,
  #team,
  #contact,
  #footer {
    width: 111%;
  }
  #portfolio {
    width: 110%;
  }
}
</style>
