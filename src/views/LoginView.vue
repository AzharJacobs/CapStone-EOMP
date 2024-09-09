<template>
    <!-- Start Hero Section -->
    <div class="hero">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5">
            <div class="intro-excerpt">
              <h1>Customer<span class="d-block">Login</span></h1>
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
  
    <!--================login_part Area =================-->
    <section class="login_part padding_top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="login_part_text text-center">
              <div class="login_part_text_iner">
                <h2>New to our Shop?</h2>
                <p>There are advances being made in science and technology
                  everyday, and a good example of this is the</p>
                <router-link to="/register" class="btn_3">Create an Account</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="login_part_form">
              <div class="login_part_form_iner">
                <h3>Welcome Back ! <br>
                  Please Sign in now</h3>
                <form class="row contact_form" @submit.prevent="login">
                  <div class="col-md-12 form-group p_star">
                    <input type="text" class="form-control" id="name" v-model="username" placeholder="Username">
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account d-flex align-items-center">
                      <input type="checkbox" id="f-option" v-model="rememberMe">
                      <label for="f-option">Remember me</label>
                    </div>
                    <button type="submit" class="btn_3">
                      log in
                    </button>
                    <router-link to="/forgot-password" class="lost_pass">forget password?</router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================login_part end =================-->
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false
      }
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Login button clicked')
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>