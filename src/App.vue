<template>
  <v-app>
    <v-content>
      <div class="d-flex justify-center align-center">
        <img class="popcorn" src="@/assets/burger-and-coke-06.png" alt="">
        <h1 class="movie--name">Movies</h1>
      </div>
     <!--  <v-bottom-nav color="red" class="mb-5">
        <v-btn flat v-for="n in nav" :to="{name:n.routeName}" :key="n.index" color="white">
          <span>{{ n.name }}</span>
          <v-icon>history</v-icon>
        </v-btn>
      </v-bottom-nav> -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          index: 1,
          name: 'Inicio',
          routeName: 'Search'
        }
      ],
       e3: 1,
      e31: true
    }
  },
  methods: {
    //
  },
  name: 'App'
}
</script>
<style>
  .application.theme--light {
    background: #fff!important;
  }
   .center-block {
    display: block;
    margin: auto;
  }
   .popcorn {
    max-width: 300px;
  }
  .bottom-nav {
    position: relative;
  }

   .movie--name {
    font-family: 'Pacifico', cursive;
    font-size: 5rem;
    flex: none!important;
  }
</style>

