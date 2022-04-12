<template>
  <div class="">
    <img :src="image" :id="id" v-bind:class="getClass" />
    <h3 v-if="active">{{ name }}</h3>
  </div>
</template>

<script>
import Api from "../Service/Api";
export default {
  name: "PokemonSearch",
  data() {
    return {
      id: "",
      name: "No name",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      active: false,
    };
  },
  computed: {
    getClass() {
      return this.active ? "pokemonActive" : "pokemon";
    },
  },
  methods: {
    searchPokemon: function () {
      const data = Api.random();
      this.id = data.id;
      this.name = data.name;
      this.image = data.image;
      this.active = false;
    },
    showPokemon: function () {
      this.active = true;
      setTimeout(() => {
        this.searchPokemon();
      }, 2000);
    },
  },
  mounted() {
    this.searchPokemon();
  },
  created: function () {
    this.$parent.$on("change", this.showPokemon);
  },
};
</script>
