<template>
  <div id="app">
    <div class="container-fluid">
      <video autoplay muted loop id="myVideo" >
        <source src="./assets/video.mp4" type="video/mp4">
      </video>
      <div class="text">
        <h1 class="">I am Simone</h1>
        <h2 class="pb-4">Full-stack Developer</h2>
        <a class="my-btn">Project</a>
        <a class="my-btn" href="Cv.html" >Cv</a>
        <a class="my-btn">About me</a>
      </div>    
    </div>
  </div>  
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">


.container-fluid{  
  padding: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.text{
  position: absolute;
}

h1{
  font-size: 80px;
}

#myVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100vh;
  margin: 0%;
}

//BUTTON
.my-btn{
    color: white;
    border: 1px solid white;
    border-radius: 1px;
    padding: 10px 20px;
    margin: 10px;
    text-transform: uppercase;
    text-decoration: none;
    transition: .4s;

    &:hover{
      background-color: white;
      color: #272b34;
    }
}

</style>
