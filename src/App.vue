<template>
  <div>
    <Header />
    <Menu />
    <RouterView />
  </div>
</template>

<script>
import Header from "@/components/header/Nav";
import Menu from "@/components/menu/Menu";
export default {
  components: {
    Header,
    Menu,
  },
};
</script>

<style>
@import "./assets/main.css";
</style>
