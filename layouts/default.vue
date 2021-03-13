<template>
  <v-app>
    <v-app-bar
      color="black"
      flat
      :src="image_src"
      prominent
      app
      dark
    >
      <v-toolbar-title v-text="title" class="white--text font-weight-black" />
    </v-app-bar>
    
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'reward distribution calculator',
      image_src: require("../assets/header.jpg")
    }
  }
}
</script>
