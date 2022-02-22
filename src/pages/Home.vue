<template>
  <main>
      <div class="text-top">
          Vídeos novos todas às <b>quintas</b> às <b>20h</b>
      </div>
      <a href="https://www.youtube.com/channel/UCA95s6vW1WRsRBhb1fLws1Q" target="blank">
        <img alt="Inscreva-se" id="subscribe" src="https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/assets/images/subscribe.svg">
      </a>
      <div class="text-botton">
          youtube.com/oficial
      </div>
  </main>
</template>

<script>
export default {
name: 'Home'
}
</script>

<style scoped>
    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top {
        color: var(--color-text-light);
        font-size: 22px;
        margin-bottom: 15px;
    }

    .text-botton {
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 10px;
    }

    #subscribe {
        width: 340px;
    }

    @media (min-width:700px) {
        #subscribe {
            width: 380px;
        }   
    }
</style>