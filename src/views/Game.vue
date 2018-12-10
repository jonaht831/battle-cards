<template>
  <div class="game">
    <div class="row">
      <opponent class="col-12" />
    </div>
    <div class="row">
      <player class="col-12" />
    </div>
  </div>
</template>

<script>
  import player from '@/components/player.vue'
  import opponent from '@/components/opponent.vue'
  export default {
    name: 'game',
    components: {
      player,
      opponent
    }
  }

</script>

<style>

</style>