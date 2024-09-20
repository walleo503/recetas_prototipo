<template>
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <img src="img/about.webp" class="img-responsive" alt="" />
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="about-text">
              <h2 style="color: #000000">Sobre Nosotros</h2>
              <p style="text-align: justify; color: #000000">
                En Feast, creemos que la cocina es mucho más que solo preparar alimentos...
              </p>
              <h3 style="color: #000000">¿Por qué elegirnos?</h3>
              <div class="list-style">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <ul style="color: #000000">
                    <li>✓ Recetas fáciles</li>
                    <li>✓ Variedad</li>
                    <li>✓ Ingredientes Accesibles</li>
                    <li>✓ Innovación culinaria</li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <ul style="color: #000000">
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
  export default {
    name: 'AboutSection', // Cambié el nombre aquí
  };
  </script>
  
  
  <style scoped>
  #about {
    background-color: #f8f9fa;
    padding: 50px 0;
  }
  
  .about-title {
    color: #2c3e50;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .about-subtitle {
    color: #16a085;
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  
  .about-description {
    color: #34495e;
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
  }
  
  .list-style ul {
    list-style-type: none;
    padding: 0;
  }
  
  .list-style ul li {
    color: #2980b9;
    font-size: 18px;
    margin-bottom: 10px;
  }
  </style>
  