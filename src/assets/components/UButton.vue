<script></script>

<template>
    <button class="btn btn-primary mt-4">
      <slot></slot>
    </button>
</template>
<style scoped>
.btn {
  background: linear-gradient(to bottom right, #8A2BE2, #4B0082);
  color: white;
  border: 3px solid #751ac9;
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}
</style>