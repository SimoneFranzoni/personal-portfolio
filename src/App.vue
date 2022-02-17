<template>
  <div id="app">
    <div class="container">
      <video autoplay muted loop id="myVideo" >
        <source src="./assets/video.mp4" type="video/mp4">
      </video>
      <div class="text">
        <h1 class="">I am Simone</h1>
        <h2>Full-stack Developer</h2>
        <button type="button" class="my-btn"> Project</button>
        <button type="button" class="my-btn"> <a href="Cv.html">Cv</a></button>
        <button type="button" class="my-btn">About me</button>
      </div>    
    </div>
    <Cv />
  </div>  
</template>

<script>

import Cv from './components/Cv.vue'

export default {
  name: 'App',
  components: {
    Cv,
  }
}
</script>

<style lang="scss">

*{
  background-color: black;
}

.container{  
  padding: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(255, 115, 0);
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

//BUTTON
button {
 padding: 0.8em 1.8em;
 border: 2px solid rgb(255, 115, 0);
 background: white;
 margin: 10px;
 border-radius: 50px;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: rgb(255, 115, 0);
}

button::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: rgb(255, 115, 0);
 transition: .5s ease;
 display: block;
 z-index: -1;
}

button:hover::before {
 width: 105%;
}

button:hover {
 color: black;
}


</style>
