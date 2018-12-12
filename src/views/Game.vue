<template>
  <div v-if="!game.over" class="game">
    <div class="row">
      <opponent class="col-12" />
    </div>
    <div class="row justify-content-center d-flex flex-column">
      <h4>Select two cards to battle</h4>
      <button v-if="activeCards.playerCardId && activeCards.opponentCardId" class="btn btn-warning" type="button"
        @click="attack">Attack</button>
      <player class="col-12" />
    </div>
  </div>
  <div v-else>
    {{game.winner}}
  </div>
</template>

<script>
  import player from '@/components/player.vue'
  import opponent from '@/components/opponent.vue'
  export default {
    name: 'game',
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)
    },
    data() {
      return {
        cardId: ''
      }
    },
    computed: {
      activeCards() {
        return this.$store.state.activeCards
      },
      game() {
        return this.$store.state.game
      }
    },
    components: {
      player,
      opponent
    },
    methods: {
      attack() {
        this.$store.dispatch('attack', { gameId: this.$route.params.gameId, data: this.activeCards })
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