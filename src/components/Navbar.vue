<script setup>
import { RouterLink } from 'vue-router';
import router from '../router';
import store from '../Store/store';


</script>


<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/addproduct">Add Product</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" to="/products">Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link " active-class="active" aria-current="page" v-if="store.getters.roootayollatokeni==false" to="/sign">Sign in</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link " active-class="active" aria-current="page" v-if="store.getters.roootayollatokeni==true"
          @click="removelocal" href="#">Logout</a>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" @keyup="searchproduct" v-model="this.search" aria-label="Search">
        <button class="btn btn-outline-success" type="button" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</template>
<script>
export default {
  data() {
    return {
      search:''
    }
  },
  methods: {
    removelocal(){
this.$store.dispatch('mailisil')
     
    },
    searchproduct(){
this.$store.dispatch('searchproducteand',this.search)
    }
  },
}
</script>

<style scoped>
.active{
    color:  white;
    background-color: darkgreen;
}
</style>