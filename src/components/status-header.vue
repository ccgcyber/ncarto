<template lang="pug">
  nav.navbar.navbar-fixed-top
    .container
      .navbar-header
      ul.navbar-nav.navbar-right.list-unstyled
        interface-status(v-for='interface in interfaces' v-bind:interface='interface' v-bind:key='interface.name')
</template>
<script>
  import interfaceStatus from './interface-status.vue'

  export default {
    data() {
      return {
        interfaces: [
          {
            name: "eth0",
            rxBytesPerSecond: 2300,
            txBytesPerSecond: 4020 
          },
          {
            name: "eth1",
            rxBytesPerSecond: 7390,
            txBytesPerSecond: 5600 
          }
        ]
      }
    },
    components: {
      interfaceStatus
    }
  }
</script>

<style lang="stylus">
  .navbar
    padding-top: 1em
  ul.nav>li
    padding-left: 1em
</style>
