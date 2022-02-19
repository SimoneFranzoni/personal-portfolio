<template>
  <div id="app">
    <header class="d-flex justify-content-center">
      <img src="./assets/logo.jpeg" alt="">
    </header> 
    <div class="container-fluid">
      
     <!-- <video autoplay muted loop id="myVideo" >
        <source src="./assets/video.mp4" type="video/mp4">
      </video>
      -->
      <div class="text">
        <h1 class="">I am <span>Simone</span></h1>
        <h2 class="pb-4"> <span>Full-stack</span> Developer</h2>
        <a class="my-btn" href="#project">Project</a>
        <a class="my-btn" id="my-btn-orange" href="Cv.html" >Cv</a>
        <a class="my-btn">About me</a>
      </div>  
      <div class="social-btn">
        <a href="https://www.linkedin.com/in/simone-franzoni-72850222a/" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/SimoneFranzoni" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>   
    </div>
    <section class="container mt-5" id="project">  
      <h1 class="orange">I miei progetti:</h1>
      <Project titleType="Siti attivi:" /> 
      <!--<Project titleType="Progetti Boolean:"/>
      <Project titleType="Piccoli progetti personali:"/>-->
    </section>
  </div>  
</template>

<script>

import Project from './components/Project.vue';

export default {
  name: 'App',
  components: {
      Project,
    
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  background-color: #000000;
}

header{
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: #ff5100ec;       
  z-index: 2;

  img{
    height: 100%;
  }
}

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

  span{
    color: #ff5100ec;
  }

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
      font-size: 20px;
      font-weight: bold;
    }
}

#my-btn-orange{
  background-color: #ff5100ec;
  border: 1px solid #ff5100ec;

  &:hover{
    background-color: white;
    color: #272b34;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid white;
  }
}

//social btn
.social-btn{
  position: absolute;
  left: 93%;
  a{
    margin: 15px 0;
  }
}

$social-button-size: 70px;
$social-button-icon-size: 0.4;
$social-button-background: #fff;
$social-button-active-color: #fff;
$social-button-transition-time: 0.3s;

$social-button-colors: (
  'linkedin': #0077b5,
  'github': #6e5494,
);

.social-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: $social-button-size;
  height: $social-button-size;
  text-decoration: none;
  border-radius: 100%;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    display: block;
    width: 0;
    height: 0;
    border-radius: 100%;
    transition: $social-button-transition-time;
  }

  &:focus,
  &:hover {
    color: black;

    &::after {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      margin-left: calc(-50% - 1px);
    }
  }

  i,
  svg {
    position: relative;
    z-index: 1;
    transition: $social-button-transition-time;
  }

  i {
    font-size: $social-button-size * $social-button-icon-size;
  }

  svg {
    height: percentage($social-button-icon-size);
    width: percentage($social-button-icon-size);
  }

  @each $name, $color in $social-button-colors {
    &--#{$name} {
      color: white;

      &::after {
        background: white;
      }
    }
  }

}
//play-btn


.orange{
    color: #ff5100ec;
}

section{
    color: white;
}



</style>
