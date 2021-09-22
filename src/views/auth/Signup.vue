<template>
  <form>
      <input type="text" required placeholder="Введите ваше имя">
      <input type="email" required placeholder="Введите вашу почту">
      <input type="password" required placeholder="Введите пароль">
      <button>Создать Аккаунт</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const name = ref("")
        const email = ref("")
        const password = ref("")

        return { email, password, name}
    }
}
</script>

<style>

</style>