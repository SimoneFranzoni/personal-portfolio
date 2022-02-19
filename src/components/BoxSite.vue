<template>
  <div class="box" :style="{ backgroundImage: `url(${item.thumb})`}">
    <div class="inner-bg">
      <div class="mt-5 title">{{item.title}}</div>
        <a :href="item.linkweb">Clicca qui</a>
    </div>
  </div>
</template>

<script>
export default {
    name:'BoxSite',
    props: {
      item: Object
    }
}
</script>

<style lang="scss" scoped>

.box{
  width: 30%;
  height: 300px;
  background-size: cover;
  background-position: center;
  padding: 0;
  
  .inner-bg{
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(97, 95, 95, 0.596);
  }

  .title{
    background: none;
    font-size: 40px;
  }
  
  a{
    font-size: 25px;
    background: none;
  }
}

</style>