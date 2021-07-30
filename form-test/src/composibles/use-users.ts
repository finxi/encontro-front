import { reactive, readonly } from '@vue/composition-api';
import * as Types from '@/types';
import { postUser } from '@/services/form.services';

const state = reactive<Types.StateUser>({
  users: [],
});

export function useUsers() {
  async function createUser(user: Types.RawUser) {
    await postUser(user);
  }

  return {
    state: readonly(state),
    createUser,
  };
}
