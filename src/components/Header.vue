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
      }
    }
    
  }
</script>


<template>

<header class="p-3">
  <div class="container d-flex justify-content-between align-items-center ">
    <h1>Boolflix</h1>
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
  background-color: #2e2e2e;
  h1{
    color: #eb2a3e;
  }
}


</style>