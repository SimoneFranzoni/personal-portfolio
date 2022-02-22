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
      <div class="code" id="mainopen">main</div>
      <div class="text d-flex flex-column justify-content-center align-items-center align-content-center">
        <div>
          <div class="code">h1</div>
          <h1>My name is <span class="orange">Simone</span></h1>
          <div class="code">/ h1</div>
          <div class="code mb-1">h2</div>
          <h2 class="wordCarousel">
            <div>
              <ul class="flip3">
                <li>Front-End</li>
                <li>Full-Stack</li>
                <li>Back-End</li>
              </ul>
            </div>
            <span class="orange">Developer</span>
          </h2>
          <div class="code">/ h2</div>
          <div class="mt-4">
            <a class="my-btn" href="#project">Project</a>
            <a class="my-btn" id="my-btn-orange" href="Cv.html">Cv</a>
            <a class="my-btn" href="#aboutme">About me</a>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="line"></div>     
          <div class="social-btn">
            <a href="https://www.linkedin.com/in/simone-franzoni-72850222a/" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/SimoneFranzoni" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        <div class="line"></div>
      </div>   
    </div>

    <section class="mt-5" id="project">  
      <div class="code">h1</div>
      <h1 class="orange">I miei progetti:</h1>
      <div class="code">h1</div>
      <Project titleType="Siti attivi:" /> 
      <!--<Project titleType="Progetti Boolean:"/>
      <Project titleType="Piccoli progetti personali:"/>-->
    </section>

    <section id="aboutme">
      <div class="code">h1</div>
      <h1 class="orange">About Me:</h1>
      <div class="code">h1</div>
      <AboutMe />
    </section>
  </div>  
</template>

<script>

import Project from './components/Project.vue';
import AboutMe from './components/AboutMe.vue';

export default {
  name: 'App',
  components: {
      Project,
      AboutMe,
  }
}
</script>

<style lang="scss">

@import './assets/style/general.scss';
@import './assets/style/wordcarousel.scss';


header{
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: black;       
  z-index: 2;
  -webkit-box-shadow: 0px 26px 32px 7px #000000;
  -moz-box-shadow: 0px 26px 32px 7px #000000;
  -o-box-shadow: 0px 26px 32px 7px #000000;
    box-shadow: 0px 26px 32px 7px #000000;

  img{
    height: 100%;
  }
}

.container-fluid{  
  padding: 0px;
  width: 100%;
  height: 100vh;
  color: white;
}

.text{ 
  padding: 15% 0 0 0;

  h1{
    font-size: 80px;
    margin-left: 28px;
  }
}

#mainopen{
  position: absolute;
  top: 14%;
  left: 2%;
}

#myVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100vh;
  margin: 0%;
}

//social btn
.fab{
  background: none;
}

.right{
  position: absolute;
  top: 20%;
  left: 94%;

  .line{
    margin-left: 32px;
    width: 3px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
  }
  
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

  i, svg {
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
    text-align: center;
}

#project{
  padding: 0 10%;
}

</style>
