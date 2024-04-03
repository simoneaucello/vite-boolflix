<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Card from './components/partials/Card.vue'
  export default {
    components:{
      Header,
      Main,    
      Card,
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
      },


      getTv(){
        axios.get(this.store.apiTv, {
          params: this.store.queryParams
        })
        .then(result => {
          console.log(result.data.results);
          this.store.tvList = result.data.results
        })
        .catch(error => {
        console.log(error);
        })
      }
    },

    mounted(){
      this.getMovies();
      this.getTv();
    }

  }

</script>

<template>
  <div>

  <Header />
  <Main />
  <Card />
  <Footer />

  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss';

</style>