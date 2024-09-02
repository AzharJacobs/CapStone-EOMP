<template>
  <!-- Start Header/Navigation -->
  <nav class="custom-navbar navbar navbar-expand-md navbar-dark" aria-label="Furni navigation bar">
    <div class="container">
      <router-link class="navbar-brand" to="/">Furni<span>.</span></router-link>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarsFurni" 
        aria-controls="navbarsFurni" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li><router-link class="nav-link" to="/shop">Shop</router-link></li>
          <li><router-link class="nav-link" to="/about">About us</router-link></li>
          <li><router-link class="nav-link" to="/services">Services</router-link></li>
          <li><router-link class="nav-link" to="/blog">Blog</router-link></li>
          <li><router-link class="nav-link" to="/contact">Contact us</router-link></li>
        </ul>
        
        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li><router-link class="nav-link" to="/user"><img src="images/user.svg" alt="User"></router-link></li>
          <li><router-link class="nav-link" to="/cart"><img src="images/cart.svg" alt="Cart"></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Header/Navigation -->
</template>

<script>
export default {
  name: 'NavbarView'
}
</script>

<style scoped>
/* Add your custom styles here */
</style>