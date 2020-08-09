<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props: ['name']
}
</script>
<style lang="scss" scoped>
.v5-icon {
  width: 1em;
  height: 1em;
}
</style>
