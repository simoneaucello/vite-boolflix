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
        this.store.moviesList = []
        this.store.errorMsg = ''
        axios.get(this.store.apiMovies, {
          params: this.store.queryParams
        })
        .then(result => {
          console.log(result.data.results);
          this.store.moviesList = result.data.results
        })
        .catch(error => {
        console.log(error);
        this.store.errorMsg = 'Film non trovato'
        })
      },


      getTv(){
        this.store.tvList = []
        this.store.errorMsg = ''
        axios.get(this.store.apiTv, {
          params: this.store.queryParams
        })
        .then(result => {
          console.log(result.data.results);
          this.store.tvList = result.data.results
        })
        .catch(error => {
        console.log(error);
        this.store.errorMsg = 'Serie non trovata'
        })
      },

      getTrend(){
        // this.store.trendParams= []
        // this.store.errorMsg = ''
        axios.get(this.store.apiTrend, {
          params: this.store.queryParams
        })
        .then(result => {
          console.log(result.data.results);
          this.store.trendingList = result.data.results
        })
        .catch(error => {
        console.log(error);
        })

      },

      getApis(){
        this.getMovies();
        this.getTv();
        this.getTrend()

      }


    },

    mounted(){
      this.getApis();
      
    }

  }

</script>

<template>
  <div>

  <Header 
  @goSearch="getApis"
  />
  <Main />
  <Footer />

  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss';

</style>