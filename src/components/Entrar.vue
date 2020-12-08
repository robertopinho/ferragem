<template>
  <div class="content">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-5">
          <form class="form-signin" @submit.prevent="logar">
            <br />
            <div class="d-flex justify-content-center">
              <h3>Login</h3>
            </div>
            <div class="con-form">
              <br />
              <small class="d-flex justify-content">Usuário</small>
              <vs-input
                type="email"
                id="inputEmail"
                class="form-control"
                danger
                state="dark"
                required
                autofocus
                v-model="email"
              ></vs-input>
              <small>Senha</small>
              <vs-input
                type="password"
                id="inputPassword"
                class="form-control"
                required
                state="dark"
                danger
                v-model="senha"
              ></vs-input>
            </div>
            <br />
            <div class="d-flex justify-content-center">
              <vs-button class="col-4" dark>Entrar</vs-button>
            </div>
          </form>
        </div>
        <div class="border mt-5"></div>
        <div class="col-5">
          <br />
          <div class="d-flex justify-content-center">
            <h3>Cadastro</h3>
          </div>
          <div>
            <br />
            <th>Para o cadastro, será necessário:</th>
            <br />
            <tr>◾ Nome completo;</tr>
            <tr>◾ CPF;</tr>
            <tr>◾ Endereço;</tr>
            <tr>◾ Email;</tr>
            <tr>◾ Telefone;</tr>
          </div>
          <br />
          <br />
          <br />
          <div class="d-flex justify-content-center">
            <vs-button to="/cadastro" class="col-4" dark>Cadastre-se</vs-button>
            <br />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
  <script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      senha: null,
    };
  },
  methods: {
    logar() {
      axios
        .post(this.$urlAPI + "/entrar", {
          email: this.email,
          senha: this.senha,
        })
        .then((response) => {
          if (response.data.user == null) {
            alert("Erro... Email ou senha inválido");
          } else {
            localStorage.setItem("token", response.data.access_token);
            this.$parent.mudaUser(response.data.user);
            this.$router.push("/");
          }
        });
    },
    sair() {
      localStorage.removeItem("token");
      this.$parent.mudaUser(null);
    },
  },

  props: {
    user: String,
  },
};
</script>
  <style lang="stylus">
 
  .con-form {
    width: 100%;

    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 0.8rem;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    }

    .vs-checkbox-label {
      font-size: 0.8rem;
    }

    .vs-input-content {
      margin: 10px 0px;
      width: calc(100%);

      .vs-input {
        width: 100%;
      }
    }
  }

  .footer-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100%);

    .new {
      margin: 0px;
      margin-top: 20px;
      padding: 0px;
      font-size: 0.7rem;

      a {
        color: getColor('primary') !important;
        margin-left: 6px;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .vs-button {
      margin: 0px;
    }
  }
</style>