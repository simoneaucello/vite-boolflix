<script>
import Card from './partials/Card.vue';
import CardTv from './partials/CardTv.vue';
import {store} from '../data/store';
  export default {

    components: {
      Card,
      CardTv,

    },


    data(){
      return{
        store,
      }
    },


    
  }
</script>


<template>
  <main class="container-fluid">

    <h1 class="my-5 text-white rounded-3 text-center p-2 fw-bold">ULTIME USCITE</h1>

    <div
    class="d-flex flex-wrap justify-content-center text-center">

      <CardTv
      v-for="poster in store.trendingList"
      :key="poster.id"
      :name="poster.title"
      :original_name="poster.original_title"
      :original_language="poster.original_language"
      :vote_average="poster.vote_average"
      :poster_path="poster.poster_path"
      :overview="poster.overview"
      />

    </div>

    <h1
      v-if="store.moviesList.length > 0"
      class="my-5 text-white rounded-3 text-center p-2 fw-bold">FILM</h1>
    <div
    v-if="store.moviesList.length > 0"
    class="d-flex flex-wrap justify-content-center">

      <Card 
      v-for="poster in store.moviesList"
      :key="poster.id"
      :title="poster.title"
      :original_title="poster.original_title"
      :original_language="poster.original_language"
      :vote_average="poster.vote_average"
      :poster_path="poster.poster_path"
      :overview="poster.overview"
      />
    </div>

    <div v-else class="container text-center my-5">
      <h2 class="text-danger d-flex justify-content-center align-items-center">{{store.errorMsg}}</h2>
    </div>

    <h1
      v-if="store.tvList.length > 0"
      class="my-5 text-white rounded-3 mx-4 text-center p-2 fw-bold">SERIE TV</h1>
    <div
    v-if="store.tvList.length > 0"
    class="d-flex flex-wrap justify-content-center">

      <CardTv
      v-for="poster in store.tvList"
      :key="poster.id"
      :name="poster.name"
      :original_name="poster.original_name"
      :original_language="poster.original_language"
      :vote_average="poster.vote_average"
      :poster_path="poster.poster_path"
      :overview="poster.overview"
      />

    </div>
    <div v-else class="container text-center my-5">
      <h2 class="text-danger">{{store.errorMsg}}</h2>
    </div>


</main>

</template>



<style lang="scss" scoped>



</style>