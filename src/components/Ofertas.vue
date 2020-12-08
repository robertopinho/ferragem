<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="banner1">
            <img class="d-block img-fluid w-100" src="carousel/banner1.jpg" alt="First slide" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="banner2">
            <img class="d-block img-fluid w-100" src="carousel/banner2.jpg" alt="Second slide" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="banner3">
            <img class="d-block img-fluid w-100" src="carousel/banner3.jpg" alt="Second slide" />
          </a>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
    <div class="content">
      <h3 class="d-flex justify-content-center mt-1 bg-danger text-light">Produtos em destaque</h3>
    </div>
    <div class>
      <div class="card-group d-flex justify-content-center">
        <tr v-for="produto in produtos" v-bind:key="produto.id">
          <div class="card border-danger m-2">
            <img class="card-img-top rounded mx-auto d-block" src="img/default.jpg" />
            <div class="card-body">
              <small>Cód: {{produto.id}}</small>,
              <small>Unidade: {{produto.unidade}}</small>

              <h5 class="card-title text-dark">{{produto.nome}}</h5>
              <div id="preco" class="text-danger">R$: {{produto.valor_venda | estiloMoeda}}</div>
              <div>
                <button class="btn" v-on:click="remove()">
                  <i class="fas fa-minus-circle text-danger"></i>&nbsp;
                </button>
                <vue-numeric-input v-model="produto.quant" :min="0"></vue-numeric-input>
                <button class="btn" v-on:click="adiciona()">
                  <i class="fas fa-plus-circle text-success"></i>
                </button>
              </div>
              <div class="mt-2 d-flex justify-content-center">
                <button class="btn btn-success">Adicionar ao carrinho</button>
              </div>
              <small class="d-flex justify-content-center">Em estoque: {{produto.quant}}</small>
            </div>

            <!-- <div class="card-footer">
              
            </div>

            -->
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
      marcas: [],
    };
  },

  methods: {
    listar() {
      axios
        .get(this.$urlAPI + "/destaques")
        .then((response) => (this.produtos = response.data));
      axios
        .get(this.$urlAPI + "/marcas")
        .then((response) => (this.marcas = response.data));
    },

    adiciona() {
      document.getElementById("num").value++;
    },
    remove() {
      document.getElementById("num").value--;
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
};
</script>
<style scoped>
img.card-img-top {
  width: 180px;
  height: 150px;
}
#bottom {
  font-size: 14px;
}
#preco {
  font-size: 23px;
  font-weight: bold;
}
</style>