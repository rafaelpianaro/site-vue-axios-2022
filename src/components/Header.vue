<template>
  <header>
      <nav>
            <a href=""><img id="logo" src="https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/assets/images/wdev.svg" alt="logo"></a>
            <img id="menu-button" src="https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/assets/images/menu.svg" alt="Abrir menu">
      </nav>
  </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>

    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
    }

    #logo {
        width: 130px;
    }

    #menu-button {
        width: 30px;
    }

</style>