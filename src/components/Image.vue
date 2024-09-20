<template>
    <div class="portfolio-item">
      <div class="hover-bg">
        <a :href="largeImage" :title="title" data-lightbox-gallery="gallery1">
          <div class="hover-text">
            <h4>{{ title }}</h4>
          </div>
          <img :src="smallImage" class="img-responsive" :alt="title" />
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageSection',
    props: {
      title: {
        type: String,
        required: true
      },
      largeImage: {
        type: String,
        required: true
      },
      smallImage: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar los estilos específicos del componente si es necesario */
  </style>
  