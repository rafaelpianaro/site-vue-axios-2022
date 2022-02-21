<template>
  <header>
      <nav class="container">
            <a href="#"><img id="logo" alt="logo" src="https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/assets/images/wdev.svg" ></a>
            <img @click="openMenu" id="menu-button" alt="Abrir menu" src="https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/assets/images/menu.svg" >
            <div @click="closeMenu" id="menu-overlay" v-show="menuActive"></div>
            <div id="menu-items" :class="{active:menuActive}">
                <img id="menu-logo" alt="logo" src="https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/assets/images/wdev.svg" >
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/videos">Vídeos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </div>
      </nav>
  </header>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu() {
            this.menuActive = true
        },
        closeMenu() {
            this.menuActive = false
        },
    }
}
</script>

<style scoped>

    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    #logo {
        width: 130px;
    }

    #menu-button {
        width: 30px;
    }

    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000;
        opacity: 0.8;
    }

    #menu-logo {
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #menu-items {
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        /* display: flex; */
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.active {
        display: flex;
    }

    ul {
        list-style: none;
        text-align: center;
    }

    ul li {
        margin: 20px 0;
    }

    ul li a {
        color: var(--color-text-light);
    }

</style>