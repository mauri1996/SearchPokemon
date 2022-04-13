<template>
  <div class="home">
    <h1>¿Quíen es este pokemon?</h1>
    <PokemonSearch v-on:valid="validName" />
    <div class="search">
      <input
        type="text"
        v-bind:class="[getClass, classOriginInput]"
        v-model="nameInsert"
        :disabled="!normal"
      />
      <button type="button" v-bind:class="getClassButton" @click="getPokemon()">
        Adivinar
      </button>
      <button
        type="button"
        class="nes-btn"
        v-if="again"
        @click="getNewPokemon()"
      >
        Otra
      </button>
    </div>
  </div>
</template>

<script>
import PokemonSearch from "@/components/PokemonSearch.vue";
import Filter from "@/Service/Filter";

export default {
  name: "HomeView",
  data() {
    return {
      nameInsert: "",
      again: false,
      normal: true,
      correct: true,
      classOriginInput: "nes-input",
      activeButton: true,
    };
  },
  components: {
    PokemonSearch,
  },
  computed: {
    getClass() {
      return this.normal
        ? "normal"
        : this.correct
        ? "correctAns"
        : "inccorrectAns is-disabled";
    },
    getClassButton() {
      return this.activeButton ? "nes-btn is-primary" : "nes-btn is-disabled";
    },
  },
  methods: {
    getPokemon() {
      this.$emit("adivinar");
    },
    getNewPokemon() {
      this.$emit("newPokemon");
      this.again = false;
      this.activeButton = true;
      this.normal = true;
      this.nameInsert = "";
    },
    validName(value) {
      this.normal = false;
      if (Filter.filter(this.nameInsert) == Filter.filter(value)) {
        this.correct = true;
      } else {
        this.correct = false;
      }
      this.again = true;
      this.activeButton = false;
    },
  },
};
</script>
