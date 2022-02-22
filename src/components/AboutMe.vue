<template>
  <section class="container">
    <img src="../assets/Profilo.png" alt="">
    <div class="text">
      <div class="code">p</div>
      <p>Fin dalle scuole superiori ho avuto passione per le materie informatiche, apprezzando particolarmente il fatto che è un mondo in continua espansione in cui non si finisce mai di imparare e in cui bisogna investire su se stessi.
      Inoltre ho un interesse per le materie artistiche e ritrovo in questo lavoro uno stimolo per la mia creatività.</p>
      <div class="code">p</div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'AboutMe',
}
</script>

<style scoped lang="scss"> 
  img{
    width: 30%;
    float: left;
  }

  .text{
    width: 50%;
    float: right;
    margin-top: 40px;
    p{
      font-size: 20px;
    }
  }
</style>