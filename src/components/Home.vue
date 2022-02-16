<template>
  <div class="container">
    <video autoplay muted loop id="myVideo" >
      <source src="../assets/video.mp4" type="video/mp4">
    </video>
    <div class="text">
      <h1 class="">WELCOME</h1>
    </div>  
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container{
  padding: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.text{
  position: absolute;
}

h1{
  font-size: 80px;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  margin: 0%;
}

</style>
