<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <router-link class="navbar-brand" to="/">Dashboard</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" id="navbar-links">
        <router-link class="nav-item nav-link active" to="/subscribe">Subscribe</router-link>
        <router-link class="nav-item nav-link active" to="/login">Login</router-link>
        <router-link class="nav-item nav-link active" to="/">Links</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar a, #navbar-links a {
    color: #FFF;
  }
</style>
