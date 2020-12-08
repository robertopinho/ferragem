<template>
  <div>
    <div class="row container-fluid">
      <div class="col">
        <router-link to="/">
          <img src="img/logo.jpg" width="180" height="100" />
        </router-link>
      </div>
      <div class="col-md-8 mt-2">
        <div class="mx-auto" style="width: 500px;">
          <a href="https://wa.me/555332210880" target="_blank">
            <i class="fab fa-whatsapp-square"></i> 53 3221-0880&nbsp;
          </a>
          <a href>
            <i class="fas fa-comments"></i> Atendimento&nbsp;
          </a>
          <a href>
            <i class="fas fa-home"></i> Nossas Lojas&nbsp;
          </a>
          <a href>
            <i class="fas fa-user-friends"></i> Quem somos&nbsp;
          </a>
        </div>

        <div class="mt-3">
          <form
            @submit.prevent="pesquisar"
            class="form-inline d-flex justify-content-center md-form form-sm"
          >
            <input
              v-model="pesquisa"
              class="form-control form-control-sm mr-1 col-9"
              type="text"
              placeholder="Pesquise aqui seu produto"
              aria-label="Search"
            />
            <button class="btn btn-info btn-sm">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div id="entrar" class="mt-4" align="center">
        <span v-if="user">
          Olá,
          <b>{{user}}</b>
          <br />
          <button class="btn">
            <i class="fas fa-shopping-cart"></i> Carrinho
          </button>
          |
          <button class="btn" @click="sair()">
            <i class="fas fa-sign-out-alt"></i> Sair
          </button>
        </span>
        <span v-else>
          <a class="nav-link" href="/entrar">
            <i class="fas fa-user"></i>
            Olá, faça seu login
            <br />ou cadastre-se
          </a>
        </span>
      </div>
    </div>

    <div class="dropdown-menu">
      <span v-if="user">
        <a class="dropdown-item" href="#" @click="sair">Logout</a>
      </span>
      <span v-else>
        <router-link to="/login" class="dropdown-item">Login</router-link>
      </span>
    </div>
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <ul class="navbar-nav">
        <div class="#dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown">
            <i class="fas fa-bars"></i> Departamentos
          </a>
          <div class="dropdown-menu bg-light">
            <a class="dropdown-item" href="#">▪ Acessórios para Banheiro</a>
            <a class="dropdown-item" href="#">▪ Decoração</a>
            <a class="dropdown-item" href="#">▪ EPIs</a>
            <a class="dropdown-item" href="#">▪ Ferragens</a>
            <a class="dropdown-item" href="#">▪ Ferramentas</a>
            <a class="dropdown-item" href="#">▪ Iluminação</a>
            <a class="dropdown-item" href="#">▪ Materiais Elétricos</a>
            <a class="dropdown-item" href="#">▪ Materiais Hidráulicos</a>
            <a class="dropdown-item" href="#">▪ Pisos e Revestimentos</a>
            <a class="dropdown-item" href="#">▪ Porta, Janelas e Portões</a>
            <a class="dropdown-item" href="#">▪ Tintas e Acessórios</a>
            <div class="dropdown-divider"></div>
            <router-link to="/todosprodutos" class="dropdown-item" href="#">▪ Todos Produtos</router-link>
          </div>
        </div>

        <li class="nav-item">
          <a class="nav-link" href="/ofertas">
            <i class="fas fa-percentage"></i> Ofertas
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data: () => {
    return {
      pesquisa: "",
    };
  },
  methods: {
    sair() {
      localStorage.removeItem("token");
      this.$parent.mudaUser(null);
    },
    pesquisar() {
      this.$router.push({ name: "buscar", params: { produto: this.pesquisa } });
      // console.log(this.pesquisa);
      // axios
      //   .get(this.$urlAPI + `/busca/${this.pesquisa}`)
      //   .then((response) => (this.produtos = response.data));
    },
  },

  props: {
    user: String,
  },
};
</script>
<style scoped>
#entrar {
  color: #ff0000;
}
</style>