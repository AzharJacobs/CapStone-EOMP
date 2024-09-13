<template>
    <div class="single-product-view">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product-image-wrap">
              <img :src="product.image" class="img-fluid product-image" @error="handleImageError" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product-info">
              <h1>{{ product.title }}</h1>
              <p class="product-price">{{ product.price }}</p>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-actions">
                <button class="btn btn-secondary" @click="addToCheckout(product)">Add to Cart</button>
                <button class="btn btn-white-outline" @click="goBack">Back to Products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        selectedProduct: null,
        productId: 1 // define productId
      }
    },
    mounted() {
      this.fetchProductData();
    },
    methods: {
      fetchProductData() {
        axios.get(`https://capstone-eomp-yhlw.onrender.com/products/${this.productId}`) // fix the reference to productId
          .then(response => {
            this.selectedProduct = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      handleImageError(event) {
        console.error(`Error loading image: ${event.target.src}`);
        event.target.src = 'fallback-image-url'; // or some other fallback behavior
      },
      addToCheckout(product) {
        this.$store.dispatch('addToCart', product);
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }
  </script>
  
  <style scoped>
  .single-product-view {
    padding: 40px 0;
  }
  
  .product-image-wrap {
    text-align: center;
  }
  
  .product-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .product-info {
    padding: 20px;
  }
  
  .product-price {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .product-description {
    margin-bottom: 20px;
  }
  
  .product-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .product-actions button {
    margin: 10px;
  }
  </style>