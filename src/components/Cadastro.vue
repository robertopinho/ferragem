<template>
  <div class="container-fluid">
    <form @submit.prevent="salvar">
      <h2 class="ml-2">Cadastro</h2>

      <div class="row mx-auto">
        <div class="col-sm-7">
          Nome completo
          <input class="form-control" type="text" v-model="cliente.nome" required />
        </div>
        <div class="col-sm-5">
          CPF
          <input class="form-control" type="text" v-model="cliente.cpf" required />
        </div>
        <div class="col-sm-1">
          UF
          <select class="form-control" v-model="cliente.uf" required>
            <option>RS</option>
          </select>
        </div>
        <div class="col-sm-3">
          Cidade
          <select class="form-control" v-model="cliente.cidade" required>
            <option>Pelotas</option>
          </select>
        </div>
        <div class="col-sm-6">
          Endereço
          <input
            class="form-control"
            placeholder="Ex.: Av. Duque de Caxias"
            type="text"
            v-model="cliente.endereco"
            required
          />
        </div>
        <div class="col-sm-2">
          Número
          <input class="form-control" type="text" v-model="cliente.numero" required />
        </div>
        <div class="col-sm-6">
          Complemento
          <input class="form-control" type="text" v-model="cliente.complemento" />
        </div>
        <div class="col-sm-3">
          Bairro
          <input class="form-control" type="text" v-model="cliente.bairro" required />
        </div>

        <div class="col-sm-3">
          Telefone
          <input class="form-control" type="text" v-model="cliente.telefone" required />
        </div>
        <div class="col-sm-6">
          Email
          <input class="form-control" type="email" v-model="cliente.email" required />
        </div>
        <div class="col-sm-3">
          Senha
          <input
            class="form-control"
            placeholder="******"
            type="password"
            v-model="cliente.senha"
            name="senha"
            id="senha"
            required
          />
        </div>
        <div class="col-sm-3">
          Confirmar senha
          <input
            class="form-control"
            placeholder="******"
            type="password"
            name="senhaconf"
            id="senhaconf"
            required
          />
        </div>
        <div class="container col-7">
          <br />
          <br />

          <input type="submit" class="btn col-sm-6 btn-dark" value="Cadastrar" />
          &nbsp;
          <button type="reset" class="btn col-sm-4 btn-light">Limpar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cliente: {
        id: null,
        nome: null,
        telefone: null,
        endereco: null,
        email: null,
        bairro: null,
        uf: null,
        cidade: null,
        cpf: null,
        complemento: null,
        numero: null,
      },
    };
  },

  methods: {
    salvar() {
      var s1 = document.getElementById("senha");
      var s2 = document.getElementById("senhaconf");
      if (s1.value != s2.value) {
        alert("Senha não confere, digite novamente.");
      } else {
        axios.post(this.$urlAPI + `/clientes`, this.cliente);
        console.log(this.cliente);
        this.cliente = {};
        alert("OK! Cadastro efetuado com sucesso. ");

        //window.location.reload();
      }
      this.listar();
    },
  },
  mounted() {},
  filters: {},
};
</script>
 