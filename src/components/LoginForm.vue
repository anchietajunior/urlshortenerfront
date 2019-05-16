<template>
  <form>
    <div class="alert alert-secondary" role="alert" v-if="errors.length">
      <ul>
        <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
      </ul>
    </div>
    <div class="form-group">
      <label for="">Email address - {{ email }}</label>
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
    <button type="submit" class="btn btn-primary" @click="submitForm">Login</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      errors: [],
      email: '',
      password: ''
    }
  },
  computed: {
    formData: function() {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (this.email && this.password) {
        return true
      } else {
        if (this.email == '') {
          this.errors.push('E-mail não pode ficar em branco.')
        }
        if (this.password == '') {
          this.errors.push('Senha não pode ficar em branco.')
        }
        return false
      }
    },
    submitForm(e) {
      e.preventDefault();
      if(this.checkForm()) {
        this.$store.dispatch('login', this.formData)
      } else {
        return;
      }
    }
  }
}
</script>

