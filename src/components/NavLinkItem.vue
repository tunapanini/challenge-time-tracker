<template>
  <span class="linkItem">
    <router-link :to="hrefLink">{{ label }}</router-link>
    <span v-if="active" class="activeLine"></span>
  </span>
</template>

<script lang="ts">
export default {
  name: 'NavLinkItem',
  props: {
    hrefLink: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.linkItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    align-self: center;
    margin: auto;
    padding: 22px 25px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #273142;
    .active {
      width: 80px;
      height: 3px;
      border-radius: 17px;
      background-color: #538fff;
    }
  }
  .activeLine {
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 3px;
    border-radius: 17px;
    background-color: #538fff;
  }
}
</style>
