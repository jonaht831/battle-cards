<template>
  <div class="game">
    <div class="row">
      <opponent class="col-12" />
    </div>
    <div class="row justify-content-center">
      <button class="btn btn-warning" type="button" @click="attack">Attack</button>
      <player class="col-12" />
    </div>
  </div>
</template>

<script>
  import player from '@/components/player.vue'
  import opponent from '@/components/opponent.vue'
  export default {
    name: 'game',
    data() {
      return {
        cardId: ''
      }
    },
    components: {
      player,
      opponent
    },
    methods: {
      attack(cardId) {

      }
    }
  }

</script>
<style>
  .game {
    background-color: black;
    color: whitesmoke;
  }
</style>