<template>
  <div class="box" :style="{ backgroundImage: `url(${item.thumb})`}">
    <div class="inner-bg">
      <div class="title">{{item.title}}</div>
      <div class="bg-none mt-3">
        <a class="my-btn" :href="item.linkweb">Web</a>
        <a class="my-btn" id="my-btn-orange" :href="item.linkcode">Code</a>
      </div>
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

 @import '../assets/style/general.scss';

.box{
  width: 31%;
  margin: 1%;
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
    font-size: 30px;
  }

  .bg-none{
    background: none;
  }
}

</style>