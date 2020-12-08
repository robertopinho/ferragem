<template>
  <div id="app">
    <topo :user="user" />
    <banner />
    <router-view />
    <produto />
    <!-- 
    <carrinho /> -->
    <rodape />
  </div>
</template>

<script>
import Topo from "./components/Topo.vue";
import banner from "./components/banner.vue";
import Rodape from "./components/Rodape.vue";
// import Carrinho from "./components/Carrinho.vue";
// import Produto from "./components/Produto.vue";

export default {
  name: "App",
  components: {
    Topo,
    banner,
    // Produto,
    // Carrinho,
    Rodape,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    mudaUser(nome) {
      this.user = nome;
    },
  },
};
</script>

<style>
</style>
