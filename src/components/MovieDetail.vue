<template>
 <div>
  <v-progress-circular v-if="loading" :width="5" :size="70" class="mt-5 center-block" indeterminate color="red"></v-progress-circular>
   <v-jumbotron height="auto" v-else>
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs8 offset-xs2>
          <img class="center-block movie--poster mb-5" :src="'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path"  alt="">
          <h3 class="display-3">{{ movie.title }}</h3>
          <span class="title grey--text">{{ movie.original_title }}</span>
          <v-divider class="my-3"></v-divider>
          <v-chip color="orange" class="mb-3" text-color="white">
            {{ movie.vote_average }}
            <v-icon right>star</v-icon>
          </v-chip>
          <div class="body-2 mb-3">{{ movie.overview }}</div>
          <v-layout row wrap>
            <v-flex xs4>
              <span class="subheading"></span>
            </v-flex>
            <v-flex xs4>
              <span class="subheading"></span>
            </v-flex>
            <v-flex xs4>
              <span class="subheading"></span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
 </div>
</template>

<script>
import axios from 'axios'
import MovieCard from '@/components/MovieCard'
export default {
 name: 'MovieDetial',
 props: ['id'],
 data: ()=>({
   movie: null,
   loading: false
 }),
 created() {
   this.getMovie()
 },
 methods: {
   getMovie() {
     this.loading = true
    axios.get(`${process.env.END_POINT}/movie/${this.id}`, {
      params: {
        api_key: '00e5b946af568adbac06a26b43be1897',
        language: 'es-CO',
      },
    })
    .then((response) => {
      console.log(response)
      this.movie = response.data
      this.loading = false
    })
    .catch((error) => {
      console.log(error)
    })
   }
  },
  components: {
    MovieCard
  }
}
</script>

<style>
.movie--poster {
  border-radius: 10px;
   width: 100%;
}
</style>
