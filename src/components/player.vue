<template>
  <div class="player container-fluid">
    <div class="row justify-content-center">
      <button @click="playTurn">Play</button>
      <h2>{{player.name}}</h2>
    </div>
    <div class="row">
      <div class="col-2 justify-content-around" v-for="card in player.hand">
        <img :src="card.img" height="100px">
        <p>{{card.name}}</p>
        <p>Attack: {{card.attack}}</p>
        <p>Defense: {{card.defense}}</p>
        <p>Health: {{card.health}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {

      }
    },
    computed: {
      player() {
        return this.$store.state.game.player
      }
    },
    methods: {
      playTurn() {
        this.$store.dispatch("playTurn", {})
      }
    }
  }

</script>

<style>


</style>