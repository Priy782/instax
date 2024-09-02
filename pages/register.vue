<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="container" style="padding: 5px 0 10px 0">
    <Account v-if="user" />
    <Auth v-else />
  </div>
</template>

