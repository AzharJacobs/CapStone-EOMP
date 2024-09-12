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
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" v-model="name" />
                        <label class="form-label" for="form3Example1c">Your Name</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" v-model="email" />
                        <label class="form-label" for="form3Example3c">Your Email</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" v-model="password" />
                        <label class="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" class="form-control" v-model="repeatPassword" />
                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" v-model="termsAccepted" id="form2Example3c" />
                      <label class="form-check-label" for="form2Example3">
                        I agree to all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
    <button class="btn btn-primary btn-lg" @click="login">Login</button>
  </div>
                  </form>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid" alt="Sample image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Register Modal (Pop-up) -->
    <div v-if="showRegisterModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeRegisterModal">&times;</span>
        <RegisterComp />
      </div>
    </div>
  </section>
  <!--================login_part end =================-->
</template>

<script>
import axios from 'axios';
import RegisterComp from '@/components/RegisterComp.vue';

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      showRegisterModal: false, // This should only exist in data
      name: '',
      email: '',
      repeatPassword: '',
      termsAccepted: false
    }
  },
  components: { RegisterComp },
  methods: {
  login(event) {
    event.preventDefault(); // Prevents the default form submission
    // Make API call to authenticate user
    axios.post('https://capstone-eomp-yhlw.onrender.com/user/login', {
     emailAdd: this.username,
      userPass: this.password
    })
    .then(response => {
      // Handle successful response
      if (response.data.success) {
        // Redirect to adminViewPage
        this.$router.push({ name: '/adminViewPage' });
      } else {
        // Handle error response
        console.error('Invalid credentials');
      }
    })
    .catch(error => {
      console.error('Error authenticating user:', error);
    });
  }
}
}
</script>

<style scoped>
/* Add your styles here */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
}

.close {
  float: right;
  font-size: 24px;
  cursor: pointer;
}
</style>
