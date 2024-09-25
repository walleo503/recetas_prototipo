import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Header from '../components/Header.vue';
import Services from '../components/Services.vue';
import Login from '../views/Login.vue';
import Recetario from '../views/Recetario.vue';
import BajoSodio from '../views/RecetasBajoensodio.vue';
import Carne from '../views/RecetasConCarne.vue';
import Frutas from '../views/RecetasConFrutas.vue';
import Legumbres from '../views/RecetasConLegumbres.vue';
import Pastas from '../views/RecetasConPasta.vue';
import Pescado from '../views/RecetasConPescado.vue';
import Pollo from '../views/RecetasConPollo.vue';
import Postres from '../views/RecetasPostres.vue';
import Vegana from '../views/RecetasVeganas.vue';
import Vegetarianas from "../views/RecetasVegetarianas.vue";


const routes = [
  {
    path: '/',
    components: { default: Header, about: About, services: Services }
  },
  { path: '/login', component: Login },
  { path: '/recetario', component: Recetario },
  { path: '/pimientos', component: Vegetarianas },
  { path: '/arroz', component: BajoSodio },
  { path: '/carne', component: Carne },
  { path: '/frutas', component: Frutas },
  { path: '/legumbres', component: Legumbres },
  { path: '/pastas', component: Pastas },
  { path: '/pescado', component: Pescado },
  { path: '/pollo', component: Pollo },
  { path: '/postres', component: Postres },
  { path: '/vegana', component: Vegana }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
