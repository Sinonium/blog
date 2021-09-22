<template>
  <form>
      <input type="email" required placeholder="Введите вашу почту">
      <input type="password" required placeholder="Введите пароль">
      <button>Войти</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const email = ref("")
        const password = ref("")

        return { email, password }
    }
}
</script>

<style>

</style>