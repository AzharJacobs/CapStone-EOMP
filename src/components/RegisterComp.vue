<template>
      <!-- Start Hero Section -->
  <div class="hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="intro-excerpt">
            <h1>Customer<span class="d-block">Register</span></h1>
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

    <section class="h-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    class="img-fluid"
                    style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;"
                  />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Create New Account</h3>
  
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" v-model="firstName" />
                          <label class="form-label" for="form3Example1m">First name</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n" class="form-control form-control-lg" v-model="lastName" />
                          <label class="form-label" for="form3Example1n">Last name</label>
                        </div>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1m1" class="form-control form-control-lg" v-model="motherName" />
                          <label class="form-label" for="form3Example1m1">Age</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1n1" class="form-control form-control-lg" v-model="fatherName" />
                          <label class="form-label" for="form3Example1n1">User Roll</label>
                        </div>
                      </div>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example8" class="form-control form-control-lg" v-model="address" />
                      <label class="form-label" for="form3Example8">Email Address</label>
                    </div>
  
                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 class="mb-0 me-4">Gender: </h6>
  
                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="Female"
                          v-model="gender"
                        />
                        <label class="form-check-label" for="femaleGender">Female</label>
                      </div>
  
                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="Male"
                          v-model="gender"
                        />
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>
  
                      <div class="form-check form-check-inline mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="Other"
                          v-model="gender"
                        />
                        <label class="form-check-label" for="otherGender">Other</label>
                      </div>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example9" class="form-control form-control-lg" v-model="dob" />
                      <label class="form-label" for="form3Example9">User Password</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example90" class="form-control form-control-lg" v-model="pincode" />
                      <label class="form-label" for="form3Example90">User Profile</label>
                    </div>
  
                    <div class="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        class="btn btn-light btn-lg"
                        @click="resetForm"
                      >
                        Reset all
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning btn-lg ms-2"
                        @click="submitForm"
                      >
                        Submit form
                      </button>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        motherName: '',
        fatherName: '',
        address: '',
        gender: '',
        state: '',
        city: '',
        dob: '',
        pincode: '',
        course: '',
        email: '',
      };
    },
    methods: {
      resetForm() {
        this.firstName = '';
        this.lastName = '';
        this.motherName = '';
        this.fatherName = '';
        this.address = '';
        this.gender = '';
        this.state = '';
        this.city = '';
        this.dob = '';
        this.pincode = '';
        this.course = '';
        this.email = '';
      },
      submitForm() {
        // Handle form submission
      }
    }
  };
  </script>
  
  <style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
border: 4px;
border-color: #314d43;
}
.card-registration .select-arrow {
top: 13px;
}
  </style>
  