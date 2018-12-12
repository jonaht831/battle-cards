<template>
  <div class="player container-fluid">
    <div class="row justify-content-center">
      <h2>{{player.name}}</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-2" v-for="card in player.hand">
        <div class="card" @click="setPlayerCard(card.id)">
          <img :src="card.img" height="100px">
          <p>{{card.name}}</p>
          <p>Attack: {{card.attack}}</p>
          <p>Defense: {{card.defense}}</p>
          <p>Health: {{card.health}}</p>
        </div>
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
        return this.$store.state.game.player || []
      }
    },
    methods: {
      setPlayerCard(cardId) {
        return this.$store.dispatch('setPlayerCard', cardId)
      }
    }
  }

</script>

<style scoped>
  .card {
    background-color: rgb(204, 122, 29);
    color: black;
  }
</style>