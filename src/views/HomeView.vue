<template>
  <div class="home">
    <h1>¿Quíen es este pokemon?</h1>
    <PokemonSearch />
    <div class="search">
      <input type="text" id="searchPokemon" class="nes-input" />
      <button type="button" class="nes-btn is-primary" @click="getPokemon()">
        Adivinar
      </button>
    </div>
  </div>
</template>

<script>
import PokemonSearch from "@/components/PokemonSearch.vue";

export default {
  name: "HomeView",
  components: {
    PokemonSearch,
  },
  methods: {
    getPokemon() {
      this.$emit("change");
    },
  },
};
</script>
