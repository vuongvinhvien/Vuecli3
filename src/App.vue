<template>
  <div id="app" class="container-fluid css-text">
    <div >
      <button type="button" class="btn btn-primary">button</button>

      <bootstrap-vue></bootstrap-vue>
    </div>
    <hr />
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-component msg="Welcome Vuejs Cli3" />
    <hr />
    <input type="text" v-model="name1" />
    <p>{{ name1}}</p>
    <button type="button" v-on:click="changeBtn">change</button>
    <br />
    <h5>Child</h5>
    <top-component :name2="name1" v-on:changparent="name1 = $event" :resetAllchild="resetAll">
      <p>slot hêre</p>
    </top-component>
    <hr />
    <div class="gly"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import top from "./Shared/Top.vue";
import bootstrapvue from "./components/BootstrapVue.vue";

export default {
  name: "app",
  components: {
    "hello-component": HelloWorld,
    "top-component": top,
    "bootstrap-vue": bootstrapvue
  },
  data: function() {
    return {
      name1: "121"
    };
  },
  methods: {
    changeBtn: function() {
      this.name1 = "changed";
    },
    resetAll: function() {
      this.name1 = "";
    }
  }
};
</script>

<style>
/* #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #130606;
    margin-top: 50px;
} */
  /* @import '../assets/sass/styleVue.css'; */

  @import 'assets/sass/_style.scss';
</style>
