<template>
    <nav id="menu" class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/recetario" class="navbar-brand page-scroll">
            <img
              src="img/logo.svg"
              alt="Logo"
              style="width: 30px; margin-right: 10px; display: inline-block;"
            />
            FEAST.com
          </router-link>
        </div>
  
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/#about" class="page-scroll">Inicio</router-link>
            </li>
            <li>
              <router-link to="/#services" class="page-scroll">Servicios</router-link>
            </li>
            <li>
              <router-link to="/login" class="page-scroll">Login</router-link>
            </li>
            <li>
              <router-link to="/recetario" class="page-scroll">Recetario</router-link>
            </li>
            <li>
              <router-link to="/favoritos" class="page-scroll">Favoritos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavigationSection"
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
  