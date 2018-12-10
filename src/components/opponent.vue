<template>
  <div class="opponent container-fluid">
    <div class="row justify-content-center">
      <h2>{{opponent.name}}</h2>
    </div>
    <div class="row">
      <div class="col-2" v-for="card in opponent.hand">
        <div v-if="card.visible">
          <img :src="card.img" height="100px">
          <p>{{card.name}}</p>
          <p>Attack: {{card.attack}}</p>
          <p>Defense: {{card.defense}}</p>
          <p>Health: {{card.health}}</p>
        </div>
        <div v-else>
          <img src="/src/assets/hidden-card1.png" alt="hidden-card">
        </div>
      </div>
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
        return this.$store.state.game.opponent
      }
    },
    methods: {

    }
  }

</script>

<style>


</style>