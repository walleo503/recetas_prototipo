<template>
    <div>
      <navigation />
      <div class="page-background">
        <div class="header-container">
          <div class="header">
            <h1 class="recetario-title">Recetario</h1>
            <input
              type="text"
              placeholder="Buscar receta..."
              class="search-bar"
              v-model="searchTerm"
              @input="handleSearchChange"
            />
          </div>
        </div>
  
        <div class="recipes-container">
          <div v-for="recipe in filteredRecipes" :key="recipe.name" class="recipe-item">
            <router-link :to="recipe.link">
              <img :src="recipe.image" :alt="recipe.name" />
              <p>{{ recipe.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import Navigation from '../components/Navigation.vue';
  import '../assets/css/recetas.css';  


  export default {
    name: "RecetarioSection",
    components: {
      Navigation
    },
    data() {
      return {
        searchTerm: '',
        recipes: [
            { name: 'Recetas vegetarianas', image: require('@/views/img/Pimientos.png'), link: '/pimientos' },
            { name: 'Recetas bajas en sodio', image: require('@/views/img/recetadearroz.png'), link: '/arroz' },
            { name: 'Recetas con frutas', image: require('@/views/img/postredefresa.png'), link: '/fresas' },
            { name: 'Recetas con legumbres', image: require('@/views/img/Legunbre.png'), link: '/legumbres' },
            { name: 'Recetas veganas', image: require('@/views/img/ensalada.png'), link: '/verduras' },
            { name: 'Recetas con pasta', image: require('@/views/img/espagetis.png'), link: '/pasta' },
            { name: 'Recetas con pescado', image: require('@/views/img/pescadofrito.png'), link: '/pescado' },
            { name: 'Recetas con pollo', image: require('@/views/img/pechugaalaplancha.png'), link: '/pollo' },
            { name: 'Recetas con carne', image: require('@/views/img/carneasada.png'), link: '/carne' },
            { name: 'Recetas de postres', image: require('@/views/img/crepas.png'), link: '/postres' }
          ]
      };
    },
    computed: {
      filteredRecipes() {
        return this.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    },
    methods: {
      handleSearchChange(event) {
        this.searchTerm = event.target.value;
      }
    }
  };
  </script>
  