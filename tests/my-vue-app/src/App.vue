<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/first">Первый тест(Пространственное мышление)</router-link>
        <router-link to="/second">Второй тест(Внимание)</router-link>
        <router-link to="/third">Третий тест(Концентрация)</router-link>
        <router-link to="/fourth">Четвертый тест(Память)</router-link>
        <router-link to="/fifth">Пятый тест(Тест струппа)</router-link>
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
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
}

nav {
  margin: 0; 
}

nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
}

main {
}
</style>