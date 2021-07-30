<template>
  <div class="container-home">
    <h2>Formulário Encontro de Líderes</h2>
    <form class="container-home__form-test">
      <v-input class="container-home__form-test__input" placeholder="Nome" v-model="name" type="text" required />
      <v-input class="container-home__form-test__input" placeholder="E-mail" v-model="email" type="e-mail" required />
      <v-input class="container-home__form-test__input" placeholder="Telefone" v-model="phone" type="text" required />
      <v-button name="Enviar" type="submit" :onClick="sendInformation" icon="mdi-send" />
    </form>
  </div>
</template>
<script lang="ts">
import VButton from '@/components/VButton.vue';
import VInput from '@/components/VInput.vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  components: { VInput, VButton },
  setup() {
    const name = ref('');
    const email = ref('');
    const phone = ref('');

    function sendInformation() {
      console.log(name, email, phone);
    }

    return { name, email, phone, sendInformation };
  },
});
</script>
<style lang="scss" scoped>
.container-home {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  &__form-test {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    &__input {
      margin: 10px 0;
    }
  }
}
</style>
