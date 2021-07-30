<template>
  <button class="v-button" :type="type" @click.prevent="onClick">
    <i :class="'v-button__icon mdi ' + icon"></i>
    {{ name }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import * as Types from '@/types';

export default defineComponent({
  name: 'VButton',
  props: {
    name: { type: String, required: true },
    icon: { type: String },
    type: { type: String as PropType<Types.ButtonTypes>, default: 'button' },
    onClick: { type: Function, required: true },
  },
});
</script>

<style lang="scss">
.v-button {
  height: 2rem;
  width: auto;
  border-radius: 0.2rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: color 0.2s;

  background: #1a93b2;
  &__icon {
    margin-right: 5px;
  }
}
</style>
