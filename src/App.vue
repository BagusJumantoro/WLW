<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from "./components/main/SideBar.vue";
import Header from "./components/main/Header.vue";
import { ref } from "vue";
import { RouterView } from "vue-router";

const showMenuParam = ref(false);

function showMenu(condition) {
  console.log(condition);
  showMenuParam.value = condition;
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    showMenuParam.value = false;
  }
});
</script>

<template>
  <dev class="relative w-full min-h-screen flex">
    <SideBar :showMemu="showMenuParam" />
    <div>
      <Header :showMenuIcon="showMenuParam" @showMenu="showMenu" />
      <RouterView />
    </div>
  </dev>
</template>
