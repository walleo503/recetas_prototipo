<template>
  <div id="app">
    <!-- La navegación se mantiene fija -->
    <NavigationSection />
    
    <!-- El contenido cambiará dinámicamente basado en la ruta -->
    <router-view name="header"></router-view>
    <router-view name="about"></router-view>
    <router-view name="services"></router-view>

    <!-- Aquí va el contenido principal según la ruta -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationSection from '../src/components/Navigation.vue';

export default {
  components: {
    NavigationSection,
  }
};
</script>
