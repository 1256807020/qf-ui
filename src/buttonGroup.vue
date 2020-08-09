<template>
  <div class="v5-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(
          `v5-button-group的子元素应该全是v5-button,但是你写的是${name}`
        )
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.v5-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .v5-button {
    border-radius: 0;
    // &:not(:first-child) {
    //   border-left: none;
    // }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
