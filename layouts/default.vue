<template>
  <v-app>
    <v-app-bar
      color="white"
      flat
      :src="image_src"
      prominent
      app
    >
      <v-toolbar-title v-text="title" />
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
      title: 'reward-distribution-calculator',
      image_src: require("../assets/011.jpg")
    }
  }
}
</script>
