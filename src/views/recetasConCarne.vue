<template>
    <div class="page-background">
      <Navigation /> <!-- Aquí se usa el componente Navigation -->
      <div class="header-container">
        <header class="header">
          <h1>Recetas con Carne</h1> <!-- Cambié el título -->
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
  import Navigation from '../components/Navigation.vue'; // Importa el componente Navigation
  
  export default {
    components: { // Aquí se registra el componente Navigation
      Navigation,
    },
    data() {
      return {
        searchTerm: '',
        selectedTime: '',
        selectedRecipe: null,
        showComments: false,
        newComment: '',
        isFavorite: false,
        recipes: [
          {
            name: 'Pollo al horno',
            user: {
              name: 'Juan García',
              email: 'juan@example.com',
              datePublished: '2024-09-10',
            },
            image: require('./img/imgcarne/polloalhorno.png'), // Imagen diferente para recetas con carne
            ingredients: [
              '1 pollo entero',
              'Sal',
              'Pimienta',
              'Aceite de oliva',
              'Romero fresco',
              'Papas para acompañar',
            ],
            steps: [
              'Precalentar el horno a 180°C.',
              'Sazonar el pollo con sal, pimienta y romero.',
              'Rociar con aceite de oliva.',
              'Colocar el pollo en una bandeja para horno y agregar las papas alrededor.',
              'Hornear por 1 hora o hasta que el pollo esté dorado y crujiente.',
            ],
            timeCategory: 'Hasta 1 hora',
            comments: [
              {
                user: {
                  name: 'Ana López',
                  image: require('./img/usuario2.png'), // Imagen del usuario
                },
                date: '2024-09-11',
                text: 'Receta excelente, el pollo queda muy jugoso.',
              },
            ],
          },
          // Otras recetas con carne
        ],
      };
    },
    computed: {
      filteredRecipes() {
        return this.recipes.filter(recipe => {
          const matchSearchTerm = recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase());
          const matchTime = !this.selectedTime || recipe.timeCategory === this.selectedTime;
          return matchSearchTerm && matchTime;
        });
      },
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
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
            user: {
              name: 'Usuario Actual',
              image: require('./img/usuario_actual.png'),
            },
            date: new Date().toISOString().slice(0, 10), // Fecha actual en formato AAAA-MM-DD
            text: this.newComment,
          });
          this.newComment = '';
        }
      },
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
      },
    },
  };
  </script>
  
   
  <style scoped>
    /* Aquí copias el CSS que ya tenías en tu archivo */
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
    }

    .header-container {
    width: 100%;
    background-image: url('./img/fondo.webp');
    background-size: cover;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    }

    .comment-header {
    display: flex;
    align-items: center;
    }


    .header {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .header h1 {
    margin-right: 50px;
    font-size: 30px;
    color: rgb(255, 255, 255);
    }

    .header button {
    background-color: #8d8e8f;
    color: rgb(255, 255, 255);
    border: 40px;
    padding: 20px 30px;
    border-radius: 28px;
    cursor: pointer;
    margin-left: 40px;
    font-size:20px;
    }

    .header button:hover {
    background-color: #4a8fd1;
    }

    .search-bar {
    padding: 8px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    width: 250px;
    margin-right: 15px;
    }


    .time-filter {
    padding: 8px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: white;
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

    .modal-content ul li {
    font-size: 20px; /* Este es el tamaño del texto de los ingredientes */
    }

    .modal-content ol li {
    font-size: 20px; /* Este es el tamaño del texto de los pasos */
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
    font-size: 25px;
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
    font-size: 15px;
    }

    .modal-buttons button:hover {
    background-color: #4a8fd1;
    }

    .favorite-button {
    background-color: #ff6347;
    }

    .favorite-button:hover {
    background-color: #ff4500;
    }

    .modal-content .comment p {
    font-size: 20px; /* Aquí puedes cambiar el tamaño del texto de los comentarios */
    }

    .comment-header p strong {
    font-size: 15px; /* Aquí puedes cambiar el tamaño del nombre del usuario en los comentarios */
    }

    .comment-header p {
    font-size: 15px; /* Aquí puedes cambiar el tamaño de la fecha del comentario */
    }

    /* Cuadro de texto para escribir el comentario */
    .modal-content textarea {
    margin-top: 10px; /* Añade margen superior para separar del contenido previo */
    margin-bottom: 20px; /* Añade margen inferior para separar del botón */
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #ccc;
    font-size: 16px;
    resize: none;
    }

    /* Botón de publicar comentario */
    .modal-content button {
    padding: 10px 20px;
    background-color: #5ca9fb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px; /* Añade margen superior para separación */
    }

    /* Barra de búsqueda */
    .search-bar {
    padding: 8px;
    font-size: 25px; /* Aumenta el tamaño de la letra */
    border: 2px solid #ccc;
    border-radius: 8px;
    width: 250px;
    margin-right: 15px;
    }

    /* Filtro de tiempo */
    .time-filter {
    padding: 8px;
    font-size: 20px; /* Aumenta el tamaño de la letra */
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: white;
    }

  </style>
  