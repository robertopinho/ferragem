<template>
  <div style="display:none"></div>
</template>
<script>
import EventBus from "./event-bus";
export default {
  data() {
    return {
      produtos: [],
    };
  },
  mounted() {
    EventBus.$on("updateCarrinho", (produto, quant) => {
      this.produtos.push(produto);
      console.log("updateCarrinho", produto, quant);
      console.log(this.produtos);
    });
  },
};
</script>
