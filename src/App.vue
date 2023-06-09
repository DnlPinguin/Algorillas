<template>
  <div id="app">
    <NavigationHeader :language="'DE'" />
    <main>
      <router-view></router-view>
    </main>
    <FooterSection />
  </div>
</template>

<script>

import NavigationHeader from './components/NavBar/NavigationHeader.vue';
import FooterSection from './components/Footer/FooterSection.vue';

export default {
  components: {
    NavigationHeader, FooterSection
  },
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(90deg, rgb(11, 11, 14) 0%, rgb(19, 10, 2) 100%);
  font-family: 'Inter', sans-serif;

}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body::-webkit-scrollbar {
  width: .3em;
}

body::-webkit-scrollbar-track {
  background-color: black;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: #ff8c00;
}

header {
  flex-shrink: 0;
  font-size: 18px;
}

h1 {
  font-weight: 700;
}

input {
  padding: 2vh;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 5px;
  outline: none !important;
}

textarea {
  padding: 2vh;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 5px;
  outline: none !important;
  font-family: 'Inter', sans-serif;
}

.half-width {
  width: 50% !important;

}

.full-width {
  width: 100%;
}

.quarter-width {
  width: 25%;
}

.three-quarter-width {
  width: 75%;
}

.seperator {
  height: 1px;
  background-color: black;
  margin: auto;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.contact-button {
  background-color: #ff8c00;
  color: white;
  border: none;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 2px;
  transition-duration: 0.4s;
}

.contact-button:hover {
  background-color: #ff8c00;
  color: black;
}



main {
  flex-grow: 1;
  margin-top: 4rem;
}
</style>
