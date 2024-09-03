<template>
    <!-- Start Hero Section -->
    <div class="hero">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5">
            <div class="intro-excerpt">
              <h1>Shop Now<span class="d-block"></span></h1>
              <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <p>
                <a href="#" class="btn btn-secondary me-2">Shop Now</a>
                <a href="#" class="btn btn-white-outline">Explore</a>
              </p>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="hero-img-wrap">
              <img src="https://azharjacobs.github.io/AzharImages/Capstone/couch.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero Section -->
  
    <div class="untree_co-section product-section before-footer-section">
      <div class="container">
        <div class="row">
          <!-- Start Column 1 -->
          <div v-for="(product, index) in products" :key="index" class="col-12 col-md-4 col-lg-3 mb-5">
            <a class="product-item" href="#">
              <img :src="product.image" class="img-fluid product-thumbnail" />
              <h3 class="product-title">{{ product.title }}</h3>
              <strong class="product-price">{{ product.price }}</strong>
              <span class="icon-cross">
                <img src="images/cross.svg" class="img-fluid" />
              </span>
            </a>
          </div>
          <!-- End Column -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { image: 'images/product-3.png', title: 'Nordic Chair', price: '$50.00' },
          { image: 'images/product-1.png', title: 'Nordic Chair', price: '$50.00' },
          { image: 'images/product-2.png', title: 'Kruzo Aero Chair', price: '$78.00' },
          { image: 'images/product-3.png', title: 'Ergonomic Chair', price: '$43.00' },
          { image: 'images/product-3.png', title: 'Nordic Chair', price: '$50.00' },
          { image: 'images/product-1.png', title: 'Nordic Chair', price: '$50.00' },
          { image: 'images/product-2.png', title: 'Kruzo Aero Chair', price: '$78.00' },
          { image: 'images/product-3.png', title: 'Ergonomic Chair', price: '$43.00' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  