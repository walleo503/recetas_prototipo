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
  