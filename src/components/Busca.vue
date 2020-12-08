<template>
  <div>
    <div class="content bg-danger">
      <br />

      <form
        @submit.prevent="pesquisar"
        class="form-inline d-flex justify-content-center md-form form-sm"
      >
        <input
          v-model="pesquisa"
          class="form-control form-control-sm mr-1 col-6"
          type="text"
          placeholder="Pesquise aqui seu produto"
          aria-label="Search"
        />

        <button class="btn-sm btn-info" type="submit">
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <br />
    </div>
    <div class="content">
      <h3 class="d-flex justify-content-center mt-1 bg-danger text-light">Produtos em destaque</h3>
    </div>
    <div>
      <div class="card-group d-flex justify-content-center">
        <tr v-for="produto in produtos" v-bind:key="produto.id">
          <div class="card border-danger m-2">
            <div class="card-body">
              <router-link :to="`/produtos/${produto.id}`">
                <!-- <img class="card-img-top rounded mx-auto d-block" :src="`./img/default.jpg`" /> -->
                <img class="card-img-top rounded mx-auto d-block" :src="`${produto.imagem}`" />

                <small>Cód: {{produto.id}}</small>,
                <small>Unidade: {{produto.unidade}}</small>

                <h5 class="card-title text-dark">{{produto.nome}}</h5>
              </router-link>
              <div id="preco" class="text-danger">R$: {{produto.valor_venda | estiloMoeda}}</div>
              <div class="d-flex justify-content-center">
                <vue-numeric-input v-model="produto.quant_minima" :min="0"></vue-numeric-input>
              </div>
              <div class="mt-2 d-flex justify-content-center">
                <button class="btn btn-success">Adicionar ao carrinho</button>
              </div>
              <small class="d-flex justify-content-center">Em estoque: {{produto.quant}}</small>
            </div>
          </div>
        </tr>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      produtos: [],
      pesquisa: "",
    };
  },

  methods: {
    listar() {
      axios
        .get(this.$urlAPI + "/destaques")
        .then((response) => (this.produtos = response.data));
    },
    pesquisar(valorBusca) {
      if (valorBusca.length == 0) {
        this.listar();
      } else {
        console.log(valorBusca);
        axios
          .get(this.$urlAPI + `/busca/${valorBusca}`)
          .then((response) => (this.produtos = response.data));
      }
    },
  },
  watch: {
    $route: function (newValue) {
      if (!newValue) {
        return;
      } else {
        this.pesquisar(this.$route.params.produto);
      }
    },
  },
  mounted() {
    this.pesquisar(this.$route.params.produto);
    console.log(this.$route.params.produto);
  },
  filters: {
    estiloMoeda(value) {
      return value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
    },
  },
};
</script>
<style scoped>
img.card-img-top {
  width: 180px;
  height: 150px;
}

#preco {
  font-size: 23px;
  font-weight: bold;
}
</style>