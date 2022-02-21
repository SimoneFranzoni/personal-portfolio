<template>
  <section>
    <h2>{{titleType}}</h2>

    <div class="row">
    <BoxSite 
      v-for="(item, index) in Work"
      :key="index"
      :item="item"
    />
    </div>      
  </section>
</template>

<script>


import Work from '../assets/data/Project.js';
import BoxSite from './BoxSite.vue';

export default {
    name: 'Project',
    components: {
      BoxSite,
    },
    props: {
      
      titleType: String,
    },
    data() {
      return {
        Work
      }
    }
}
</script>

<style lang="scss" scoped>

 @import '../assets/style/general.scss';

section{
  text-align: center;
}

.row{
  display: flex;
  flex-wrap: wrap;
}
</style>