<template>
    <div>
      <div id="mySidenav" :class="{'sidenav': true, 'open': sidenavOpen}">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <h2>Cart</h2>
        <div v-html="cartHtml"></div>
      </div>
  
      <div id="main" :style="{ marginLeft: sidenavOpen ? '250px' : '0' }">
        <span style="font-size:30px;cursor:pointer" @click="openNav">&#9776; open</span>
        <button @click="addToCart('Product 1', 10.99)">Add Product 1 to Cart</button>
        <button @click="addToCart('Product 2', 5.99)">Add Product 2 to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidenavOpen: false,
        cart: []
      };
    },
    computed: {
      cartHtml() {
        return this.cart
          .map(
            item => `
            <div class="cart-item">
              ${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
            </div>`
          )
          .join('');
      }
    },
    methods: {
      openNav() {
        this.sidenavOpen = true;
      },
      closeNav() {
        this.sidenavOpen = false;
      },
      addToCart(name, price) {
        let existingItem = this.cart.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          this.cart.push({ name, price, quantity: 1 });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: "Lato", sans-serif;
  }
  
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  
  .sidenav.open {
    width: 250px;
  }
  
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .sidenav a:hover {
    color: #f1f1f1;
  }
  
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  
  #main {
    transition: margin-left 0.5s;
    padding: 16px;
  }
  
  .cart-item {
    padding: 8px 8px 8px 32px;
    font-size: 18px;
    color: #818181;
    display: block;
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
  </style>
  