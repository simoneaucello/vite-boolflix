<script>
import Card from './partials/Card.vue';
import {store} from '../data/store'
  export default {

    components: {
      Card
    },


    data(){
      return{
        store,
      }
    },

    
  }
</script>


<template>
<div
v-if="store.moviesList.length > 0"
class="d-flex flex-wrap container">
  <Card 
  v-for="card in store.moviesList"
  :key="card.id"
  :title="card.title"
  :original_title="card.original_title"
  :original_language="card.original_language"
  :vote_average="card.vote_average"
  :poster_path="card.poster_path"
  />

</div>
<div v-else class="container text-center my-5">
  <h2 class="text-danger">{{store.errorMsg}}</h2>

</div>


</template>



<style lang="scss" scoped>

</style>