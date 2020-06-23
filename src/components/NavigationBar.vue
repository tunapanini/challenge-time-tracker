<template>
  <nav class="wrapper">
    <div class="toggler" @click="toggleNavLinks()">
      <md-icon >menu</md-icon>
    </div>
    <div class="links" :class="isOpen ? 'open': ''">
      <NavLinkItem hrefLink="/timesheets" label="Timesheets" :active="pathname === '/timesheets'"  @click="toggleNavLinks(false)" />
      <NavLinkItem hrefLink="/expenses" label="Expenses" :active="pathname == '/expenses'" @click="toggleNavLinks(false)" />
      <NavLinkItem hrefLink="/management" label="Management" :active="pathname == '/management'" @click="toggleNavLinks(false)" />
    </div>
    <div class="right">
      <div class="profile">
        <img class="avatar" src alt>
        <div class="info">
          <p class="name">Adam Fisherman</p>
          <p class="level">Administrator</p>
        </div>
        <button type="button" class="arrow">Open Profile</button>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import { MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import NavLinkItem from './NavLinkItem.vue'

Vue.use(MdIcon)

export default {
  name: 'NavigationBar',
  props: {
    pathname: String
  },
  data () {
    return {
      isOpen: false
    }
  },
  components: {
    NavLinkItem
  },
  methods: {
    toggleNavLinks (value = !this.isOpen) {
      this.isOpen = value
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: auto;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px 3px #eff6ff;
}
.toggler {
  position: absolute;
  left: 30px;
  display: flex;
  cursor: pointer;
}
.links {
  display: none;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 70px;
  width: 100%;
  background-color: #eff6ff;
  &.open {
    display: inline-flex;
  }
}
.right {
  position: absolute;
  right: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  .profile {
    display: flex;
    align-items: center;
    margin-right: 30px;
    .avatar {
      width: 46px;
      height: 46px;
      background-image: url('../assets/avatar.svg');
      margin-right: 10px;
    }
    .name {
      padding-right: 1px;
      width: 103px;
      height: 17px;
      font-size: 12px;
      color: #273142;
      white-space: nowrap;
    }
    .level {
      width: 82px;
      height: 17px;
      font-size: 12px;
      color: #9cb2cd;
    }
    .arrow {
      font-size: 0;
    }
  }
}
.arrow {
  width: 8px;
  height: 6px;
  background-image: url('../assets/arrow.svg');
  background-repeat: no-repeat;
  margin: 4px 0 0 10px;
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
}
</style>
