<template>
  <section class="container mt-5" id="project">  
    <h1 class="orange">I miei progetti:</h1>
    <h2>Siti creati:</h2>
    <BoxSite />
    <h2>Lavori svolti durante il corso Boolean:</h2>
    <h2>Piccoli progetti personali:</h2>
  </section>
</template>

<script>
import BoxSite from './BoxSite.vue';

export default {
    name: 'Project',
    components: {
      BoxSite,
    }
}
</script>

<style lang="scss">

.orange{
    color: #ff5100ec;
}

section{
    color: white;
}

</style>