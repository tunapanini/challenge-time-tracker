<template>
  <nav class="wrapper">
    <div class="links">
      <NavLinkItem hrefLink="/timesheets" label="Timesheets" :active="pathname === '/timesheets'"/>
      <NavLinkItem hrefLink="/expenses" label="Expenses" :active="pathname == '/expenses'"/>
      <NavLinkItem hrefLink="/management" label="Management" :active="pathname == '/management'"/>
    </div>
    <div class="right">
      <img class="alert" src alt>
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

<script lang="ts">
import NavLinkItem from './NavLinkItem.vue'

export default {
  name: 'NavigationBar',
  props: {
    pathname: String
  },
  components: {
    NavLinkItem
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

.links {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  height: 70px;
}

.right {
  position: absolute;
  right: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  .notification {
    margin-right: 23px;
  }
  .profile {
    display: flex;
    align-items: center;
    margin-right: 30px;
    .avatar {
      width: 46px;
      height: 46px;
      background-image: url("../assets/avatar.svg");
      margin-right: 10px;
    }
    .name {
      width: 103px;
      height: 17px;
      font-size: 12px;
      color: #273142;
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

.notification {
  width: 21px;
  height: 24px;
  background-image: url("../assets/notification.svg");
}

.arrow {
  width: 8px;
  height: 6px;
  background-image: url("../assets/arrow.svg");
  background-repeat: no-repeat;
  margin: 4px 0 0 10px;
}
</style>
