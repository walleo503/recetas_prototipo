<template>
    <div class="page-background">
      <Navigation /> <!-- Aquí se usa el componente Navigation -->
      <div class="header-container">
        <header class="header">
          <h1>Recetas Bajas en Sodio</h1>
          <input
            type="text"
            placeholder="Buscar recetas..."
            class="search-bar"
            v-model="searchTerm"
          />
          <select v-model="selectedTime" class="time-filter">
            <option value="">Todos los tiempos</option>
            <option value="Hasta 30 minutos">Hasta 30 minutos</option>
            <option value="Hasta 45 minutos">Hasta 45 minutos</option>
            <option value="Hasta 1 hora">Hasta 1 hora</option>
          </select>
          <button @click="goBack" class="back-button">Regresar</button>
        </header>
      </div>
      
      <div class="recipes-container">
        <div 
          v-for="recipe in filteredRecipes" 
          :key="recipe.name" 
          class="recipe-item" 
          @click="openModal(recipe)"
        >
          <img :src="recipe.image" :alt="recipe.name" />
          <p>{{ recipe.name }}</p>
        </div>
      </div>
  
      <!-- Modal para mostrar los detalles de la receta -->
      <div v-if="selectedRecipe" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div v-if="showComments">
            <h2>Comentarios</h2>
            <ul v-if="selectedRecipe.comments.length > 0">
              <li v-for="(comment, index) in selectedRecipe.comments" :key="index" class="comment">
                <div class="comment-header">
                  <img :src="comment.user.image" :alt="comment.user.name" class="user-image" />
                  <div>
                    <p><strong>{{ comment.user.name }}</strong></p>
                    <p>{{ comment.date }}</p>
                  </div>
                </div>
                <p>{{ comment.text }}</p>
              </li>
            </ul>
            <p v-else>No hay comentarios aún. ¡Sé el primero en comentar!</p>
  
            <textarea v-model="newComment" placeholder="Escribe tu comentario aquí..."></textarea>
            <button @click="addComment">Publicar comentario</button>
          </div>
  
          <div v-else>
            <h2>{{ selectedRecipe.name }}</h2>
            <h3>Publicado por:</h3>
            <p><strong>{{ selectedRecipe.user.name }}</strong> ({{ selectedRecipe.user.email }})</p>
            <p>Fecha de publicación: {{ selectedRecipe.user.datePublished }}</p>
            
            <h3>Ingredientes:</h3>
            <ul>
              <li v-for="(ingredient, index) in selectedRecipe.ingredients" :key="index">
                {{ ingredient }}
              </li>
            </ul>
  
            <h3>Pasos:</h3>
            <ol>
              <li v-for="(step, index) in selectedRecipe.steps" :key="index">
                {{ step }}
              </li>
            </ol>
          </div>
  
          <div class="modal-buttons">
            <button @click="toggleCommentsView">
              {{ showComments ? 'Ver Ingredientes/Pasos' : 'Ver Comentarios' }}
            </button>
            <button @click="toggleFavorite" class="favorite-button">
              {{ isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos' }}
            </button>
            <button @click="closeModal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

 import { Navigation } from '../components/Navigation.vue';
  import EnsaladaItaliana from './img/imgsodio/ensaladacaprese.png';
  import Bebidarosa from './img/imgsodio/bebida.png';
  import PandeBana from './img/imgsodio/PanBanana.png';
  import Usuariologo from "../views/img/imgsodio/usuario1.png";
  import Usuariologo2 from "../views/img/imgsodio/usuario2.png";
  import "../assets/css/RecetasbajoEnsodio.css";

  export default {
    name:"RecetasBajoensodio",

    components: {
      Navigation,
    },
    data() {
      return {
        recipes: [
          {
            name: 'Ensalada Italiana',
            user: {
              name: 'Lucía Martínez',
              email: 'lucia@example.com',
              datePublished: '2024-09-01',
            },
            image: EnsaladaItaliana,
            ingredients: [
              '200g de mozzarella fresca',
              '4 tomates maduros',
              'Hojas de albahaca fresca',
              'Aceite de oliva extra virgen',
              'Vinagre balsámico (opcional)',
              'Pimienta negra recién molida',
            ],
            steps: [
              'Cortar la mozzarella y los tomates en rodajas.',
              'Alternar las rodajas de mozzarella y tomate en un plato.',
              'Añadir hojas de albahaca entre las rodajas.',
              'Rociar con aceite de oliva y vinagre balsámico si se desea.',
              'Sazonar con pimienta negra al gusto.',
            ],
            timeCategory: 'Hasta 30 minutos',
            comments: [
              {
                user: {
                  name: 'Carlos Perez',
                  image: Usuariologo,
                },
                date: '2024-09-02',
                text: 'Me encanta esta receta, es súper refrescante y fácil de hacer.',
              },
            ],
          },
          {
                name: 'Agua fresca de sandía y arándanos rojos',
                user: {
                name: 'Lucía Martínez',
                email: 'lucia@example.com',
                datePublished: '2024-09-01'
                },
                image: Bebidarosa,
                link: '/bebidarosa',
                ingredients: [
                '2 1/2 libras de sandía sin semillas', 
                '1/4 de taza de jugo de lima fresco', 
                '1 taza de jugo de arándanos rojos', 
                '1 lima cortada en rodajas'
                ],
                steps: [
                'Licúa la sandía hasta obtener una consistencia suave.', 
                'Pasa el puré por un tamiz fino para eliminar la pulpa.', 
                'Añade jugos de arándano y lima y refrigera hasta enfriar.', 
                'Sirve con rodajas de lima.'
                ],
                timeCategory: 'Hasta 45 minutos',
                comments: [
                {
                    user: {
                    name: 'Carlos Perez',
                    image: Usuariologo2
                    },
                    date: '2024-09-02', // fecha del comentario
                    text: 'Me encanta esta receta, es súper refrescante y fácil de hacer.'
                },
            ],
          },
          {
                name: 'Pan de banana integral',
                user: {
                name: 'Lucía Martínez',
                email: 'lucia@example.com',
                datePublished: '2024-09-01'
                },  
                image: PandeBana,
                link: '/pandebanana',
                ingredients: [
                '1/2 taza de harina de arroz integral', 
                '1/2 taza de harina de amaranto', 
                '1/2 taza de harina de tapioca', 
                '1/2 de taza de harina de mijo', 
                '1/2 taza de harina de quinua', 
                '1 cucharadita de bicarbonato de sodio', 
                '2 tazas de puré de banana'
                ],
                steps: [
                'Precalentar el horno a 350°F.', 
                'Mezclar los ingredientes secos.', 
                'Añadir los húmedos y mezclar bien.', 
                'Hornear durante 50-60 minutos.'
                ],
                timeCategory: 'Hasta 1 hora',
                comments: [
                {
                    user: {
                    name: 'Carlos Perez',
                    image: Usuariologo
                    },
                    date: '2024-09-02', // fecha del comentario
                    text: 'Me encanta esta receta, es súper refrescante y fácil de hacer.'
                },
            ],
          },
        ],
        searchTerm: '',
        selectedRecipe: null,
        selectedTime: '',
        showComments: false,
        newComment: '',
        isFavorite: false,
      };
    },
    computed: {
      filteredRecipes() {
        return this.recipes.filter((recipe) => {
          const matchSearchTerm = recipe.name.toLowerCase().includes(this.searchTerm);
          const matchTime = this.selectedTime === '' || recipe.timeCategory === this.selectedTime;
          return matchSearchTerm && matchTime;
        });
      },
    },
    methods: {
      openModal(recipe) {
        this.selectedRecipe = recipe;
        this.showComments = false;
        this.newComment = '';
      },
      closeModal() {
        this.selectedRecipe = null;
      },
      toggleCommentsView() {
        this.showComments = !this.showComments;
      },
      addComment() {
        if (this.newComment.trim() !== '') {
          this.selectedRecipe.comments.push({
            user: { name: 'Nuevo Usuario', image: Usuariologo2 },
            date: new Date().toISOString().split('T')[0], // Fecha actual
            text: this.newComment,
          });
          this.newComment = '';
        }
      },
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
      },
      goBack() {
        this.$router.go(-1); // Ir a la página anterior
      },
    },
  };
  </script>
  