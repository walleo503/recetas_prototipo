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
import "../components/Login/data/About.css";

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
