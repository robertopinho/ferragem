<template>
  <div>
    <div class="card-group d-flex justify-content-center">
      <tr v-for="produto in produtos" v-bind:key="produto.id">
        <div class="card border-danger m-2">
          <div class="card-body">
            <router-link :to="`/produtos/${produto.id}`">
              <!-- <img class="card-img-top rounded mx-auto d-block" :src="`./img/default.jpg`" /> -->
              <img
                class="card-img-top rounded mx-auto d-block"
                :src="`${produto.imagem}`"
              />

              <small>Cód: {{ produto.id }}</small
              >,
              <small>Unidade: {{ produto.unidade }}</small>

              <h5 class="card-title text-dark">{{ produto.nome }}</h5>
            </router-link>
            <div id="preco" class="text-danger">
              R$: {{ produto.valor_venda | estiloMoeda }}
            </div>
            <div class="d-flex justify-content-center">
              <vue-numeric-input
                v-model="produto.quant_minima"
                :min="0"
              ></vue-numeric-input>
            </div>
            <div class="mt-2 d-flex justify-content-center">
              <button class="btn btn-success" @click="updateCarrinho(produto)">
                Adicionar ao carrinho
              </button>
            </div>
          </div>

          <!-- <div class="card-footer">
              
            </div>

            -->
        </div>
      </tr>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import EventBus from "./event-bus";
export default {
  data() {
    return {
      produtos: [],
      pesquisa: "",
    };
  },

  methods: {
    updateCarrinho(produto, quant) {
      EventBus.$emit("updateCarrinho", produto, quant);
    },
    listar() {
      axios
        .get(this.$urlAPI + "/destaques")
        .then((response) => (this.produtos = response.data));
    },

    todosprodutos() {
      console.log(this.pesquisa);
      axios
        .get(this.$urlAPI + `/produtos`)
        .then((response) => (this.produtos = response.data));
    },
  },
  mounted() {
    this.listar();
  },
  filters: {
    estiloMoeda(value) {
      return value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
    },
  },
  props: { banner: Boolean },
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

