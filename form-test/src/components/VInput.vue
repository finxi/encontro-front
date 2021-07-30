<template>
  <input
    class="v-input"
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :required="required"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import * as Types from '@/types';

export default defineComponent({
  name: 'VInput',
  props: {
    value: { type: [String, Number] },
    placeholder: { type: String },
    type: { type: String as PropType<Types.InputTypes> },
    required: { type: Boolean },
  },
});
</script>

<style lang="scss" scoped>
.v-input {
  height: 2rem;
  border-radius: 0.2rem;
  border: 2px solid #1a93b2;
  background: none;
  text-indent: 5px;
  &:focus {
    outline-style: none;
    border-color: #4d4c4c;
  }
  &:focus:required:invalid {
    outline-style: none;
    border-color: red;
  }
  &:focus:required:valid {
    outline-style: none;
    border-color: green;
  }
  &::placeholder {
    color: #fff;
  }
}
</style>
