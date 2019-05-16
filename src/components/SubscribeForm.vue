<template>
  <div class="container">
    <form v-if="!subscribed">
      <div class="alert alert-secondary" role="alert" v-if="errors.length">
        <ul>
          <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
        </ul>
      </div>
      <div class="form-group">
        <label for="">Email address</label>
        <input type="email" 
                class="form-control" 
                id="email" 
                placeholder="Enter email" 
                v-model="email">
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input type="password" 
                class="form-control" 
                id="password" 
                placeholder="Password" 
                v-model="password">
      </div>
      <div class="form-group">
        <label for="">Confirme your password</label>
        <input type="password" 
                class="form-control" 
                id="passwordConfirmation" 
                placeholder="Password Confirmation"
                v-model="passwordConfirmation">
      </div>
      <button type="submit" 
              class="btn btn-primary" 
              v-on:click="submitForm">Subscribe</button>
    </form>
    <div class="jumbotron" v-if="subscribed">
      <h1 class="display-4">Congratulations!</h1>
      <p class="lead">You are now subscribed with e-mail {{ email }}</p>
      <router-link class="btn btn-primary btn-lg" to="/login">Login</router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      subscribed: false,
      errors: [],
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  computed: {
    formData: function() { 
      return { 
        email: this.email, 
        password: this.password, 
        password_confirmation: this.passwordConfirmation 
      }
    }
  },
  methods: {
    checkForm () {
      this.errors = [];
      if (this.email && this.password && this.passwordConfirmation && this.password == this.passwordConfirmation) {
        return true;
      } else {
        if (this.email == '') {
          this.errors.push('E-mail não pode ser vazio.');
        } 
        if (this.password == '') {
          this.errors.push('Senha não pode ser vazia.');
        }  
        if (this.passwordConfirmation == '') {
          this.errors.push('Confirmação de Senha não pode ser vazia.');
        }  
        if (this.password != this.passwordConfirmation) {
          this.errors.push('Senha e confirmação não conferem.');
        }  
        return false;
      }
    },
    submitForm (e) {
      e.preventDefault();
      if (this.checkForm()) {
        this.$store.dispatch('subscribe', this.formData);
        this.subscribed = true
      } else {
        return;
      }
    } 
  }
}
</script>

<style scoped>
  .form-alert {
    display: none;
  }
</style>

