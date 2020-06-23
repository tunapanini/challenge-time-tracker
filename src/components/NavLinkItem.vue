<template>
  <span class="linkItem" @click="onClick">
    <router-link :to="hrefLink">{{ label }}</router-link>
    <span v-if="active" class="activeLine"></span>
  </span>
</template>

<script>
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
  },
  methods: {
    onClick () {
      this.$emit('click')
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
}
.activeLine {
  position: absolute;
  display: none;
  bottom: 0;
  width: 80px;
  height: 3px;
  border-radius: 17px;
  background-color: #538fff;
}
@media screen and (min-width: 768px) {
  .toggler {
    display: none;
  }
  .links{
    flex-direction: row;
    position: static;
    height: 70px;
    display: inline-flex;
    background-color: transparent;
  }
  .activeLine {
    display: block;
  }
}
</style>
