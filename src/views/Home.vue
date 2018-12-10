<template>
  <div class="home">
    <h1>Battle</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Cards</h1>
    <form action="">
      <button class="btn btn-success" @click="startGame">Start Game</button>
      <input type="text" placeholder="Enter Name" v-model="newGame.gameConfig.playerName">
      <input type="number" placeholder="Select Deck 1-4" max="4" min="1" v-model="newGame.gameConfig.set">
    </form>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        newGame: {
          gameConfig: {
            playerName: "", //The player's name
            set: "" // Card Images are generated based on game set 1-4
          }
        }
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("startGame", this.newGame)
      }
    }
  }
</script>