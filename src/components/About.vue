<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <img src="img/about.webp" class="img-responsive" alt="" />
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="about-text">
            <!-- Cambiamos el color del título -->
            <h2 :style="{ color: '#000000' }">Sobre Nosotros</h2>
            <!-- Cambiamos el color del texto -->
            <p :style="{ textAlign: 'justify', color: '#000000' }">
              "En Feast, creemos que la cocina es mucho más que solo preparar alimentos; es una forma de conectar, celebrar y crear momentos memorables. Nuestra pasión por la gastronomía nos inspira a compartir recetas deliciosas, fáciles de seguir y llenas de sabor, para que tanto principiantes como expertos puedan disfrutar de la magia de cocinar en casa.

              Desde platos tradicionales hasta creaciones innovadoras, en Feast encontrarás una amplia variedad de recetas que se adaptan a todos los gustos y ocasiones.
            </p>
            <!-- Cambiamos el color del subtítulo -->
            <h3 :style="{ color: '#000000' }">¿Por qué elegirnos?</h3>
            <div class="list-style">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <ul :style="{ color: '#000000' }">
                  <li>✓ Recetas fáciles</li>
                  <li>✓ Variedad</li>
                  <li>✓ Ingredientes Accesibles</li>
                  <li>✓ Innovación culinaria</li>
                </ul>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <ul :style="{ color: '#000000' }">
                  <li>✓ Comunidad activa</li>
                  <li>✓ Consejos prácticos</li>
                  <li>✓ Calidad garantizada</li>
                  <li>✓ Amor por la cocina</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import "../components/Login/data/About.css";

  export default {
    name: 'AboutSection', // Cambié el nombre aquí
  };
  </script>
  
  