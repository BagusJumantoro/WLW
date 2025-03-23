<script setup>
import { computed } from "vue";
const props = defineProps({
  showMemu: Boolean,
});

const showMenu = computed(() => {
  return props.showMemu;
});
</script>
<template>
  <div
    class="min-w-48 h-screen bg-sky-500 inset-y-0 left-0 transition duration-200 ease-in-out"
    :class="{
      'absolute -translate-x-full': !showMenu,
      'relative translate-x-0': showMenu,
      'md:translate-x-0 md:relative': true,
    }"
  >
    <div
      class="p-6 flex items-center justify-center gap-2 text-sky-100 shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>

      <h1 class="font-bold">WLW</h1>
    </div>
    <nav class="w-full flex flex-col gap-y-2 font-semibold text-sky-100 p-2">
      <router-link
        to="/"
        class="group p-3 hover:bg-sky-700 flex items-center gap-2 rounded duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6 group-hover:text-sky-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <span class="group-hover:text-sky-300">Dashboard</span>
      </router-link>
      <router-link
        to="/learnApi"
        class="group p-3 hover:bg-sky-700 flex items-center gap-2 rounded duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6 group-hover:text-sky-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
          />
        </svg>

        <span class="group-hover:text-sky-300">Learn API</span>
      </router-link>
    </nav>
  </div>
</template>
