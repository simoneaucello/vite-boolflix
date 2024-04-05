<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store,
        searchMovie: '',
      }
    },

    methods: {
      goSearch(){        
        this.store.queryParams.query = this.searchMovie
        this.$emit('goSearch')       
      },
    }
    
  }
</script>


<template>

<header class="p-3">
  <div class="container-fluid d-flex justify-content-between align-items-center ">
    <img class="logo" src="/img/BoolFlix-logo.png" alt="">

    <!-- navbar -->
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid ">
    <a class="navbar-brand text-warning" href="#">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Film</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Serie TV</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Cartoon</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Generi
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Commedia</a></li>
            <li><a class="dropdown-item" href="#">Azione</a></li>
            <li><a class="dropdown-item" href="#">Horror</a></li>
            <li><a class="dropdown-item" href="#">Avventura</a></li>
            <li><a class="dropdown-item" href="#">Fantascienza</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <!-- navbar -->
    <div class="d-flex p-3">
      <input
      v-model.trim="store.queryParams.query"
      @keyup.enter="$emit('goSearch')"
      type="text" class="form-control" placeholder="Search title" aria-describedby="addon-wrapping" size="10">
      <button
      @click="$emit('goSearch')"
      type="button" class="btn btn-danger mx-3">Search</button>
    </div>  
  </div>
</header>

</template>



<style lang="scss" scoped>

header{
  background-color: #1d1d1d;
  box-shadow: 0px 5px 35px 1px rgb(143, 104, 53);
  .logo{
    width: 250px
  }
  h1{
    color: #eb2a3e;
  }
}


</style>