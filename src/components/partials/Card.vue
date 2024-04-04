<script>
  export default {
    props: {
      title: String,
      original_title: String,
      original_language: String,
      vote_average: Number,
      poster_path: String,
      name: String,
      original_name: String,
      overview: String

    }
    
  }
</script>

<template>

<div class="card m-3 sa_card" style="width: 18rem;">
  <img
    v-if="this.poster_path !== null"
    :src="`https://image.tmdb.org/t/p/w342${ poster_path }`"
    class="card-img-top"
    alt="...">
  <img
    v-else
    src="/img/csaff-no-poster.jpg"
    class="card-img-top"
    alt="...">

  <div class="card-body text-center rounded-3 "  id="description" >
    <h3>{{ original_title }}</h3>
    <h6 class="card-text">{{ title }}</h6>
    <p
      v-if="this.original_language == 'it'"
      class="card-text">
    <img
      src="../../../public/img/it.png"
      alt=""
      width="30px"
      >
  </p>
    <p
      v-else-if="this.original_language == 'en'"
      class="card-text">
      <img
      src="../../../public/img/en.png"
      alt=""
      width="30px"
      >
    </p>
    <p v-else class="card-text">{{ original_language }}</p>

    <h6 class="card-text">{{ vote_average }}</h6>
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
  transition: .4s;
}
.sa_card:hover{
  box-shadow: inset 0px 10px 90px 10px rgba($color: #e6e6e6, $alpha: 1.0);
  
}

.over{
  display: none;
  transition: .2s ease-in
}
#description{
  background-color: #cec5c500;
  color: rgb(255, 255, 255);
}
#description:hover{
  background-color: #cec5c500;
  color: rgb(27, 27, 27);
  transition: .2s ease-in;
  cursor: pointer;
}






</style>