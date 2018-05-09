<template>
  <v-card >
    <v-card-media 
      :src="'https://image.tmdb.org/t/p/original/'+image" 
      height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ title }}</h3>
        <span class="grey--text">{{ originalTitle }}</span>
        <div>
          {{ overview | truncate(156) }}
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="red" @click="goToDetail">Ver más</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['id', 'title', 'originalTitle', 'image', 'overview', ],
  data: ()=>({

  }),
  methods: {
    goToDetail() {
      this.$router.push({
        name: 'MovieDetail', 
        params: { id: this.id }
      })
    }
  },
  filters: {
    truncate(value, stop, clamp) {
      if (!value) return ''
      value = value.toString()
      return value.slice(0, stop) + (stop < value.length ? clamp || '...' : '')
    }
  },
}
</script>

<style>

</style>
