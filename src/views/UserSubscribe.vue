<template>
  <div class="container login-wrapper">
    <h1>Subscribe</h1>
    <subscribe-form></subscribe-form>
  </div>
</template>

<script>
import SubscribeForm from '@/components/SubscribeForm.vue';

export default {
  components: {
    SubscribeForm
  }
}
</script>

<style scoped>
  .login-wrapper {
    max-width: 600px;
    margin: 40px auto 0 auto;
  }
</style>
