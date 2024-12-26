<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/first">Первый тест</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>