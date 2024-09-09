<template>
    <!-- Start Hero Section -->
    <div class="hero">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5">
            <div class="intro-excerpt">
              <h1>Cart</h1>
            </div>
          </div>
          <div class="col-lg-7"></div>
        </div>
      </div>
    </div>
    <!-- End Hero Section -->
  
    <!-- Cart Section -->
    <div class="untree_co-section before-footer-section">
      <div class="container">
        <div class="row mb-5">
          <form class="col-md-12" @submit.prevent="submitForm">
            <div class="site-blocks-table">
              <table class="table">
                <thead>
                  <tr>
                    <th class="product-thumbnail">Image</th>
                    <th class="product-name">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product-quantity">Quantity</th>
                    <th class="product-total">Total</th>
                    <th class="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in products" :key="index">
                    <td class="product-thumbnail">
                      <img :src="product.image" alt="Product Image" class="img-fluid" />
                    </td>
                    <td class="product-name">
                      <h2 class="h5 text-black">{{ product.name }}</h2>
                    </td>
                    <td>{{ product.price }}</td>
                    <td>
                      <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-black decrease" type="button" @click="decreaseQuantity(index)">−</button>
                        </div>
                        <input type="text" class="form-control text-center quantity-amount" v-model="product.quantity" />
                        <div class="input-group-append">
                          <button class="btn btn-outline-black increase" type="button" @click="increaseQuantity(index)">+</button>
                        </div>
                      </div>
                    </td>
                    <td>{{ product.total }}</td>
                    <td>
                      <button type="button" class="btn btn-black btn-sm" @click="removeProduct(index)">X</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
  
        <!-- Cart Actions -->
        <div class="row">
          <div class="col-md-6">
            <div class="row mb-5">
              <div class="col-md-6 mb-3 mb-md-0">
                <button class="btn btn-black btn-sm btn-block" @click="updateCart">Update Cart</button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-outline-black btn-sm btn-block" @click="continueShopping">Continue Shopping</button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label class="text-black h4" for="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div class="col-md-8 mb-3 mb-md-0">
                <input type="text" class="form-control py-3" id="coupon" v-model="couponCode" placeholder="Coupon Code" />
              </div>
              <div class="col-md-4">
                <button class="btn btn-black" @click="applyCoupon">Apply Coupon</button>
              </div>
            </div>
          </div>
  
          <!-- Cart Totals -->
          <div class="col-md-6 pl-5">
            <div class="row justify-content-end">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12 text-right border-bottom mb-5">
                    <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <span class="text-black">Subtotal</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">{{ subtotal }}</strong>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-md-6">
                    <span class="text-black">Total</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">{{ total }}</strong>
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-12">
                    <button class="btn btn-black btn-lg py-3 btn-block" @click="proceedToCheckout">Proceed To Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { name: 'Product 1', price: '$49.00', quantity: 1, total: '$49.00', image: 'images/product-1.png' },
          { name: 'Product 2', price: '$49.00', quantity: 1, total: '$49.00', image: 'images/product-2.png' },
        ],
        couponCode: '',
        subtotal: '$230.00',
        total: '$230.00',
      };
    },
    methods: {
      increaseQuantity(index) {
        this.products[index].quantity++;
        this.updateTotal(index);
      },
      decreaseQuantity(index) {
        if (this.products[index].quantity > 1) {
          this.products[index].quantity--;
          this.updateTotal(index);
        }
      },
      updateTotal(index) {
        // Logic to update total price based on quantity
        const price = parseFloat(this.products[index].price.replace('$', ''));
        this.products[index].total = `$${(price * this.products[index].quantity).toFixed(2)}`;
      },
      removeProduct(index) {
        this.products.splice(index, 1);
      },
      computed: {
  cartItems() {
    return this.$store.state.cart;
  }
},
      updateCart() {
        // Logic to update cart
      },
      continueShopping() {
        // Logic for continuing shopping
      },
      applyCoupon() {
        // Logic for applying coupon
      },
      proceedToCheckout() {
        // Logic for proceeding to checkout
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  