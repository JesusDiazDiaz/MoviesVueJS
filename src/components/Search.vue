<template>
  <div>
    <v-container class="container--search" fluid >
    <div>
    <v-toolbar
      color="grey lighten-3 elevation-0"
      tabs
    >
      <v-text-field
        prepend-icon="search"
        label="Escribe el nombre de la pelicula..."
        solo-inverted
        v-model="value" 
        @keyup.enter="searchMovies" 
        :loading="loading" 
        class="mx-3"
        flat
      ></v-text-field>
    </v-toolbar>
  </div>
  </v-container>
  <v-container grid-list-lg>
    <v-layout row wrap class="mt-5">
      <template v-if="!empty">
        <v-flex xs4 v-for="(movie, index) in movies" :key="index">
        <movie-card
          :id="movie.id"
          :title="movie.title" 
          :original-title="movie.original_title"
          :image="movie.poster_path"
          :overview="movie.overview">
        </movie-card>
      </v-flex>
      </template>
      <h2 v-else>No existen resultados de tu busqueda: '{{ searchString }}' </h2>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
  import axios from 'axios'
  import MovieCard from '@/components/MovieCard'
  export default {
    name: 'Search',
    data: () => ({
      value: '',
      searchString : '',
      empty: false,
      loading: false,
      header: 'Resultados',
      movies: []
    }),
    methods: {
      searchMovies() {
        console.log('Buscando...')
        this.searchString = this.value
        this.loading = true
        this.empty = false
        axios.get(`${process.env.END_POINT}/search/movie/`, {
            params: {
              api_key: '00e5b946af568adbac06a26b43be1897',
              page: 1,
              language: 'es-CO',
              query: this.value,
            },
          })
          .then((response) => {
            console.log(response)
            this.loading = false
            this.movies = response.data.results
            if(this.movies.length==0)
              this.empty = true
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


  .search {
    max-width: 600px;
  }

  .card__media__content {
    background: rgba(0, 0, 0, 0.5);
  }

  .container--search {
    padding: 0 20px 30px 20px!important;
  }

</style>
