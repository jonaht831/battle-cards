<template>
  <div class="opponent container-fluid">
    <div class="row justify-content-center">
      <div class="col-2" v-for="card in opponent.hand">
        <div class="card" @click="setOpponentCard(card.id)">
          <img :src="card.img" height="100px">
          <p>{{card.name}}</p>
          <p>Attack: {{card.attack}}</p>
          <p>Defense: {{card.defense}}</p>
          <p>Health: {{card.health}}</p>
        </div>
        <!-- <div v-else>
          v-if="card.visible"
          <img src="@/assets/hidden-card1.png" @click="setOpponentCard(card.id)" height="150px" width="100px" alt="hidden-card">
        </div> -->
      </div>
    </div>
    <div class="row justify-content-center">
      <h2>{{opponent.name}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'opponent',
    data() {
      return {

      }
    },
    computed: {
      opponent() {
        return this.$store.state.game.opponent || []
      }
    },
    methods: {
      setOpponentCard(cardId) {
        return this.$store.dispatch('setOpponentCard', cardId)
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