<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Header,
      Main,    
      Footer
    },

    data(){
      return{
        store
      }
    }, 

    methods: {
      getMovies(){
        axios.get(this.store.apiMovies, {
          params: this.store.queryParams
        })
        .then(result => {
          console.log(result.data.results);
          this.store.moviesList = result.data.results
        })
        .catch(error => {
        console.log(error);
        })
      }
    },

    mounted(){
      this.getMovies();
    }

  }

</script>

<template>
  <div>

  <Header />
  <Main />
  <Footer />

  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss';

</style>