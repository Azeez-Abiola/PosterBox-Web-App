<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
</script>

<template>
  <NavbarComp />
  <RouterView />
  <FooterComp />
</template>

<style scoped></style>
