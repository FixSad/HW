<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/first">Первый тест(Пространственное мышление)</router-link>
        <router-link to="/second">Второй тест(Пространственное мышление)</router-link>
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
  -webkit-font-smoothing: antialiased;
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


</style>