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
  import Navigation from '@/components/Navigation.vue';
  
  export default {
    name: "RecetarioSection",
    components: {
      Navigation
    },
    data() {
      return {
        searchTerm: '',
        recipes: [
          { name: 'Recetas vegetarianas', image: require('@/assets/img/Pimientos.png'), link: '/pimientos' },
          { name: 'Recetas bajas en sodio', image: require('@/assets/img/recetadearroz.png'), link: '/arroz' },
          { name: 'Recetas con frutas', image: require('@/assets/img/postredefresa.png'), link: '/fresas' },
          { name: 'Recetas con legumbres', image: require('@/assets/img/Legunbre.png'), link: '/legumbres' },
          { name: 'Recetas veganas', image: require('@/assets/img/ensalada.png'), link: '/verduras' },
          { name: 'Recetas con pasta', image: require('@/assets/img/espagetis.png'), link: '/pasta' },
          { name: 'Recetas con pescado', image: require('@/assets/img/pescadofrito.png'), link: '/pescado' },
          { name: 'Recetas con pollo', image: require('@/assets/img/pechugaalaplancha.png'), link: '/pollo' },
          { name: 'Recetas con carne', image: require('@/assets/img/carneasada.png'), link: '/carne' },
          { name: 'Recetas de postres', image: require('@/assets/img/crepas.png'), link: '/postres' }
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
  
  <style scoped>
  /* Aquí se puede incluir el mismo CSS que tienes en tu archivo styles.css */
    /* Fondo de la página */
    .page-background {
    background-image: url('./img/fondobusqueda.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    padding-top: 70px; 
    }

    /* Contenedor del encabezado */
    .header-container {
    width: 100%;
    background-image: url('./img/fondo.webp');
    background-size: cover;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f9fa;
    margin-top: 10px; 
    }


    .header {
    display: flex;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    margin-top: 20px;
    }

    .recetario-title {

    font-size: 50px;
    color: rgb(255, 255, 255);
    flex: 1; 
    }


    .search-bar {
    padding: 8px;
    font-size: 30px;
    border: 2px solid #ccc;
    border-radius: 8px;
    width: 250px;
    
    }


    .recipes-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
    width: 100%;
    }


    .recipe-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    border: 3px solid hsl(240, 1%, 36%);
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: calc(33.333% - 40px);
    height: 250px;
    box-sizing: border-box;
    background-color: #ffedcd;
    transition: transform 0.3s;
    flex-grow: 0;
    flex-shrink: 0;
    cursor: pointer;
    }

    .recipe-item:hover {
    transform: scale(1.05);
    }


    .recipe-item img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    }

    .recipe-item p {
    margin-top: 10px;
    font-size: 18px;
    color: #333;
    text-align: center;
    width: 100%;
    }


    .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
    }

    .modal-content h2 {
    margin-top: 0;
    }

    .modal-content button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #5ca9fb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    .modal-content button:hover {
    background-color: #4a8fd1;
    }

    .modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    }

    .modal-buttons button {
    padding: 10px 20px;
    background-color: #5ca9fb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    }

    .modal-buttons button:hover {
    background-color: #4a8fd1;
    }

  </style>
  