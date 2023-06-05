<script setup>

const {headerAlerts} = await useHeader()


</script>

<template>
  <div class="border border-[red]">
      <div>THIS IS TheHeader:</div>
    <p>{{ headerAlerts }}</p>
    </div>
</template>
