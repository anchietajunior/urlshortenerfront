<template>
  <div class="container login-wrapper">
    <h1>Login</h1>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
  .login-wrapper {
    max-width: 600px;
    margin: 40px auto 0 auto;
  }
</style>
