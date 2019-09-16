<template>
  <div>
    <h1>{{nameTop}}</h1>
    <h1>{{name2}}</h1>
    <input type="text" v-model="name2" />
    <button @click="resetParent">Change from child</button>
    <button type="button" v-on:click="resetAllchild">REset all</button>
    <slot></slot>
  </div>
</template>
<script>
export default {
  // name: 'top',
  data: function() {
    return {
      nameTop: "Name 's the first"
    };
  },
  // props: ["name2"],
  props: {
    name2: {},
    resetAllchild: Function
  },
  methods: {
    resetParent: function() {
      //   this.name2 = "reseted"
      this.$emit("changparent", this.name2);
    }
  }
};
</script>

<style scoped>
</style>