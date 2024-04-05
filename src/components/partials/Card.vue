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
    },


    methods: {
      voteAverage(rating){
        const star = []
        const rate = Math.ceil(rating/2)
        for (let i = 0; i < 5; i++){
          if(i < rate){
            star.push('<i class="fa-solid fa-star" style="color: #FFD43B;"></i>')
          } else{
            star.push('<i class="fa-regular fa-star"></i>')
          }
        }
        return star.join(' ');
      }
    }  
  }
</script>

<template>

<div class="card m-3 sa_card " style="width: 17rem;">


  <img
    v-if="this.poster_path !== null"
    :src="`https://image.tmdb.org/t/p/w342${poster_path}`"
    class="card-img-top"
    alt="...">
    
  <img
    v-else
    src="/img/csaff-no-poster.jpg"
    class="card-img-top"
    alt="...">

  

  <div class="card-body text-center rounded-3"  id="description" >
    
    <h5>{{ original_title }}</h5>
    <div class="hide ">
    <p class="card-text">{{ title }}</p>
    <p
      v-if="this.original_language == 'it'"
      class="card-text">
    <img
      src="/img/it.png"
      alt=""
      width="30px"
      >
  </p>
    <p
      v-else-if="this.original_language == 'en'"
      class="card-text">
      <img
      src="/img/en.png"
      alt=""
      width="30px"
      >
    </p>
    <p v-else class="card-text">{{ original_language }}</p>

    <p v-html="voteAverage(vote_average)"></p>
  </div>
    <p class="card-text over">{{ overview }}</p>

    
  </div>
</div>
 
</template>


<style lang="scss" scoped>

.sa_card{
  position: relative;
  background-color: #d1d1d100;
  box-shadow: 0px 10px 20px 3px rgba($color: #000000, $alpha: 1.0);
  border-radius: 20px;
  transition: 1s ease-in-out
  
}
.sa_card:hover{
  box-shadow: inset 0px 10px 20px 12px rgba($color: #000000, $alpha: 1.0);
  // transition: 1s ease
  
}

.over{
  position: absolute;
  top: 100%;
  opacity: 0;
  transition: .5s ease-out;
  margin-left: 0;
  border-radius: 20px;
  padding:5px;
  font-size: 14px;
  height: 60%;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  }

.sa_card:hover .over{
  top:5%;
  background-color: rgba($color: #020202, $alpha: .8);
  width: 90%;
  opacity: 1;
}
#description{

  background-color: #cec5c500;
  color: rgb(255, 255, 255);
}
#description:hover{
  transition: .2s ease-in;
  cursor: pointer; 
}
div:hover .hide{
  display: block;
}

</style>