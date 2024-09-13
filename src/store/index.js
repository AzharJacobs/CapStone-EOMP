import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import Cookies from 'js-cookie';
const dbURL ="https://capstone-eomp-yhlw.onrender.com"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: "",
    cart: [],
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    updateCart(state, payload) {
      state.cart.push(payload);
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('updateCart', payload);
    },
    async register(context, payload) {
      try {
        let msg = (await axios.post(`${dbURL}user/`, payload)).data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Sign Up",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
          // router.push({ name: "login" });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async login(context, payload) {
      console.log("Login action triggered");
      try {
        let { data } = await axios.post(`${dbURL}user/login`, payload);
        let { msg, result, token } = data;
    
        if (result) {
          sweet({
            title: "Login",
            text: `${msg}`,
            icon: "success",
            timer: 4000,
          });
    
          context.commit("setUser", result);
          // Set the token as a cookie
          Cookies.set('LegitUser', { token, result });
          // Apply the token to your API requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          location.reload();
        } else {
          sweet({
            title: "Error",
            text: `${msg}`,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: `An error occurred while logging in.`,
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let results = (await axios.get(`${dbURL}/user/`)).data;
        if (results) {
          context.commit("setUsers", results);
          // console.log(results)
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while retrieving Users",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let result = (await axios.get(`${dbURL}user/${payload.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User not found",
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "this user was not found.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let msg = await axios.patch(`${dbURL}user/${payload.userID}`, payload);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Updated this user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while updating this user.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async deleteUser(context, payload) {
      try {
        let msg = await axios.delete(`${dbURL}user/${payload}`);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Deleted user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while trying to delete this user.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let {data}  = await axios.get(`${dbURL}/products/`);
        console.log (data)
        if (data) {
          context.commit("setProducts", data);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while trying to retrieve Products",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let result = (await axios.get(`${dbURL}products/${payload.id}`))
          .data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet.alert({
            title: "Retrieve a single product",
            text: "This product was not found",
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "this product was not found.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async addProduct(context, payload) {
      try {
        let msg = (await axios.post(`${dbURL}products/`, payload)).data;
        if (msg) {
          context.dispatch("fetchProducts");
          sweet({
            title: "Add Product",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
          
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async editProduct(context, payload) {
      try {
        const product_id = payload.product_id;
        const updatedFields = { /* create an object with only the updated fields */ };
        console.log('1');
        
        const response = await axios.patch(`${dbURL}products/${product_id}`, updatedFields);
        console.log('2');
        if (response) {
          context.dispatch("fetchProducts");
          console.log('3');
          sweet({
            title: "Edit Product",
            text: response.data,
            icon: "success",
            timer: 4000,
          });
          location.reload();
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async deleteProduct(context, payload) {
      try {
        let msg = await axios.delete(`${dbURL}products/${payload}`);
        if (msg) {
          context.dispatch("fetchProducts");
          sweet({
            title: "Delete Product",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload() 
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Could not delete this item",
          icon: "error",
          timer: 4000,
        });
      }
    },
  },
  modules: {},
});