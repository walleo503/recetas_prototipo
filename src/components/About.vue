<template>
  <div id="about" class="about-section">
    <div class="container">
      <div class="row about-row">
        <!-- Contenedor de la imagen -->
        <div class="about-image-container">
          <img src="../components/Login/data/Personal.png" class="about-image" />
        </div>
        <!-- Contenedor de la información -->
        <div class="about-info-container">
          <div class="about-text">
            <h2>Sobre Nosotros</h2>
            <p>
              En Feast, creemos que la cocina es mucho más que solo preparar alimentos; es una forma de conectar, celebrar y crear momentos memorables.<br/>
               Nuestra pasión por la gastronomía nos inspira a compartir recetas deliciosas, fáciles de seguir y llenas de sabor, para que tanto principiantes <br/>
                como expertos puedan disfrutar de la magia de cocinar en casa.
              Desde platos tradicionales hasta creaciones innovadoras, en Feast encontrarás <br/> 
              una amplia variedad de recetas 
              que se adaptan a todos los gustos y ocasiones.
            </p>
            <h3>¿Por qué elegirnos?</h3>
            <ul>
              <li>Recetas fáciles</li>
              <li>Variedad</li>
              <li>Ingredientes accesibles</li>
              <li>Innovación culinaria</li>
              <li>Comunidad activa</li>
              <li>Consejos prácticos</li>
              <li>Calidad garantizada</li>
              <li>Amor por la cocina</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../components/Login/data/About.css";

export default {
  name: "AboutSection",
};
</script>
