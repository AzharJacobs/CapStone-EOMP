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
              <img :src="product.image" class="img-fluid product-thumbnail" @error="handleImageError" />
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
  import axios from 'axios'
  
  export default {
    data() {
      return {
        products: [],
        originalProducts: [], // store original products here
        searchQuery: '',
        categories: ['mens', 'womens', 'kids'],
        selectedCategory: '',
        sortByPrice: ''
      }
    },
    mounted() {
      this.fetchProducts()
    },
    methods: {
      handleImageError(event) {
    console.error(`Error loading image: ${event.target.src}`);
    event.target.src = 'fallback-image-url'; // or some other fallback behavior
  },
      async fetchProducts() {
        await axios.get('https://capstone-eomp-yhlw.onrender.com/products')
          .then(response => {
            const mappedProducts = response.data.map(product => ({
              title: product.ProdName,
              image: product.ProdUrl,
              price: product.amount,
              category: product.category ,
              product_id: product.product_id// add category property
            }))
            this.originalProducts = mappedProducts // store original products
            this.products = mappedProducts
          })
          .catch(error => {
            console.error(error)
          })
      },
      async searchProducts() {
        const filteredProducts = this.originalProducts.filter(product => {
          return product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
        this.products = filteredProducts
      },
      async filterByCategory() {
        if (this.selectedCategory === '') {
          this.products = this.originalProducts // reset to original products
        } else {
          const filteredProducts = this.originalProducts.filter(product => {
            return product.category === this.selectedCategory
          })
          this.products = filteredProducts
        }
      },
      async sortProducts() {
        if (this.sortByPrice === 'asc') {
          this.products.sort((a, b) => a.price - b.price)
        } else if (this.sortByPrice === 'desc') {
          this.products.sort((a, b) => b.price - a.price)
        }
      }
    },
    watch: {
      selectedCategory() {
        this.filterByCategory()
      },
      sortByPrice() {
        this.sortProducts()
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  