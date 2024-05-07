<template>
  <div class="remove-all-button__wrapper">
    <button class="remove-all-button">
      <span>Очистить всё</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.remove-all-button {
  background-color: #96ac87;
  padding: 10px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 2px #000;
  font-size: 20pt;
  margin-top: 10px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>

<script setup lang="ts">
</script>