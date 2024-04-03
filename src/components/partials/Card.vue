<script>
  export default {
    props: {
      title: String,
      original_title: String,
      original_language: String,
      vote_average: Number,
      poster_path: String

    }
    
  }
</script>

<template>
  <div 
  class="flip-card container my-5 ">
  <div class="flip-card-inner ">
    <div class="flip-card-front">
      <img :src="poster_path" :alt="title" >
    </div>
    <div class="flip-card-back">
      <h3>{{title}}</h3>
      <h4>{{original_title}}</h4>
      <p>{{original_language}}</p>
      <p>{{vote_average}}</p>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  // border: 1px solid #f1f1f1;
  perspective: 1000px; 
}


.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}


.flip-card-back {
  background-color: rgb(59, 59, 59);
  color: white;
  transform: rotateY(180deg);
}

</style>