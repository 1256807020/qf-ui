<template>

  <!-- 单文件组件 -->
  <!-- <button class="v5-button" v-if="v5IconPosition === 'right'">
      <slot></slot>
      <svg v-if="v5icon" class="icon">
        <use :xlink:href="`#icon-${v5icon}`"></use>
      </svg>
    </button>
    <button class="v5-button" v-else>
      <svg v-if="v5icon" class="icon">
        <use :xlink:href="`#icon-${v5icon}`"></use>
      </svg>
      <slot></slot>
    </button> -->
  <button class="v5-button" :class="{[`icon-${v5IconPosition}`]:true}" @click="$emit('click')">
    <!-- <svg v-if="v5icon" class="icon">
      <use :xlink:href="`#icon-${v5icon}`"></use>
    </svg> -->
    <v5-icon class="icon loading" v-if="loading" name="loading"></v5-icon>
    <v5-icon class="icon" v-if="v5icon&&!loading" :name="v5icon"></v5-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>

</template>
<script>
export default {
  props: {
    v5icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    v5IconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        // if (value !== 'left' && value !== 'right') {
        //   return false
        // } else {
        //   return true
        // }
        // 精简后为
        return value === 'left' || value === 'right'
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.v5-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
