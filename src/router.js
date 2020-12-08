import Vue from "vue";
import VueRouter from "vue-router";
import Inicial from "./components/Inicial.vue";
import Ofertas from "./components/Ofertas.vue";
import Entrar from "./components/Entrar.vue";
import Cadastro from "./components/Cadastro.vue"
import Produto from "./components/Produto.vue"
import Busca from "./components/Busca.vue"

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Inicial, name: 'inicial' },
    { path: "/ofertas", component: Ofertas },
    { path: "/entrar", component: Entrar },
    { path: "/cadastro", component: Cadastro },
    { path: "/produtos/:id", component: Produto },
    { path: "/busca/:produto", component: Busca, name: 'buscar' },
  ],
});
