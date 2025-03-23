<script setup>
import { reactive, computed } from "vue";
const props = defineProps({
  showMenuIcon: Boolean,
});

const emits = defineEmits(["showMenu"]);

const showMenuIcon = computed(() => {
  return props.showMenuIcon;
});

function showMenu(condition) {
  console.log(!condition);
  emits("showMenu", !condition);
}
</script>
<template>
  <div class="w-full flex items-center gap-2 p-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="size-6 md:hidden cursor-pointer"
      @click="showMenu(showMenuIcon)"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>

    <h1 class="font-bold">Header</h1>
  </div>
</template>
