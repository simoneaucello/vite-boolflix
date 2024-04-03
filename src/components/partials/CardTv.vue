<script>
  export default {
    props: {
      name: String,
      original_name: String,
      original_language: String,
      vote_average: Number,
      poster_path: String,
      

    }
    
  }
</script>

<template>

  <div class="card m-3 sa_card" style="width: 18rem;">
  <img :src="`https://image.tmdb.org/t/p/w342${ poster_path }`" class="card-img-top" alt="...">
  <div class="card-body"  id="description" >
    <h5>{{ original_name }}</h5>
    <p class="card-text">{{ name }}</p>
    <p class="card-text">{{ original_language }}</p>
    <p class="card-text">{{ vote_average }}</p>
    <div class="over">
    <p class="card-text">{{ overview }}</p>
  </div>
  </div>
  </div>
</template>


<style lang="scss" scoped>


.sa_card{
  background-color: #d1d1d100;
  box-shadow: inset 0px 10px 90px 10px rgba($color: #161616, $alpha: 1.0);
  border-radius: 20px;
}

.sa_card:hover{
  box-shadow: inset 0px 10px 90px 10px rgba($color: #f74141, $alpha: 1.0);
}
.over{
  display: none;
  transition: .2s ease-out
}
#description{
  background-color: #cec5c500;
  color: rgb(255, 255, 255);
}
#description:hover{
  background-color: #cec5c500;
  color: rgb(255, 174, 81);
  transition: .2s ease-in;
  cursor: pointer;

}




</style>